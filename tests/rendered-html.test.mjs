import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

async function render(path = "/") {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request(`http://localhost${path}`, {
      headers: { accept: "text/html" },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );
}

test("server-renders the shared-navigation homepage", async () => {
  const response = await render();

  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();

  assert.match(html, /<title>Carly Clark Zimmer \| Life &amp; Leadership Coach<\/title>/i);
  assert.match(html, /Build a business that leaves room for life\./i);
  assert.match(html, /The Living Business Lounge/i);
  assert.equal((html.match(/aria-label="Site navigation"/gi) ?? []).length, 1);
  assert.match(html, /Work With Carly/i);
  assert.match(html, /href="\/services"/i);
  assert.doesNotMatch(html, /href="\/contact"/i);
  assert.equal(
    (html.match(/href="https:\/\/carlyclarkzimmer\.as\.me"[^>]*target="_blank"/gi) ?? []).length,
    2,
  );
  assert.doesNotMatch(html, /href="\/client-results"/i);
  assert.doesNotMatch(html, /href="\/links"/i);
  assert.doesNotMatch(html, /carlyclarkzimmer\.com\/services/i);
  assert.doesNotMatch(html, /https:\/\/www\.google\.com\/recaptcha\/api\.js/i);
  assert.doesNotMatch(html, /codex-preview/i);
  assert.doesNotMatch(html, /Your site is taking shape/i);
  assert.doesNotMatch(html, /react-loading-skeleton/i);
});

test("serves the full Services page inside the shared site shell", async () => {
  const response = await render("/services");
  const html = await response.text();

  assert.equal(response.status, 200);
  assert.match(
    html,
    /<title>Carly Clark Zimmer \| Clarity for Life and Business Transitions<\/title>/i,
  );
  assert.match(
    html,
    /name="description" content="For people who know something needs to change but are unsure what comes next\./i,
  );
  assert.match(
    html,
    /rel="canonical" href="https:\/\/carlyclarkzimmer\.com\/services\/"/i,
  );
  assert.match(html, /property="og:title" content="When What You Built No Longer Fits"/i);
  assert.match(
    html,
    /property="og:image" content="https:\/\/carlyclarkzimmer\.com\/services-social\.png"/i,
  );
  assert.match(html, /name="twitter:card" content="summary_large_image"/i);
  assert.match(html, /Ways to Work Together/i);
  assert.match(html, /That’s where the Business Restoration Method comes in\./i);
  assert.match(html, /Apply Here/i);
  assert.match(html, /Book A Recommendation Call/i);
  assert.match(html, /carly-services-restoration\.jpg/i);
  assert.match(html, /testimonial-emily\.png/i);
  assert.match(html, /testimonial-rochelle\.png/i);
  assert.doesNotMatch(html, /Decision Map Intensive/i);
  assert.doesNotMatch(html, /Identity Uplevel/i);
  assert.doesNotMatch(html, /Laser Coaching Club/i);
  assert.doesNotMatch(html, /What happens when you wait/i);
  assert.match(html, /aria-label="Site navigation"/i);
});

test("serves the complete Business Restoration About page", async () => {
  const response = await render("/about");
  const html = await response.text();

  assert.equal(response.status, 200);
  assert.match(html, /About Carly Clark Zimmer \| Business Restoration Coach/i);
  assert.match(html, /Carly Clark Zimmer Behavior Change and Business Coach/i);
  assert.match(html, /src="\/carly-about-hero\.png"/i);
  assert.match(
    html,
    /alt="Carly Clark Zimmer seated on stone steps in a magenta velvet jacket"/i,
  );
  assert.match(html, /If your business is growing but your life outside of it keeps getting smaller/i);
  assert.match(html, /The Business Restoration Method/i);
  assert.match(html, /We build your Bottleneck Offload System\./i);
  assert.match(html, /src="\/carly-about-promise\.jpg"/i);
  assert.match(
    html,
    /alt="Carly Clark Zimmer seated in a shimmering black dress"/i,
  );
  assert.match(html, /src="\/carly-about-airport-client-call\.jpg"/i);
  assert.match(html, /alt="Carly taking a client call from an airport"/i);
  assert.match(html, /This is me, squeezing in a client call at an airport/i);
  assert.match(html, /src="\/carly-about-life-outside-work\.jpg"/i);
  assert.match(html, /alt="Carly enjoying breakfast outdoors in Spain"/i);
  assert.match(html, /what your business is still relying on <em>you<\/em> to carry/i);
  assert.match(html, /<strong>Bottleneck Offload System<\/strong> is the fastest and most effective way/i);
  assert.match(html, /Stop the Leaks/i);
  assert.match(html, /Open the Walls/i);
  assert.match(html, /Rebuild the Business Backbone/i);
  assert.match(html, /Phase (?:<!-- -->)?1/i);
  assert.match(html, /Phase (?:<!-- -->)?2/i);
  assert.match(html, /Phase (?:<!-- -->)?3/i);
  assert.doesNotMatch(html, /Phase (?:<!-- -->)?0[1-3]/i);
  assert.match(html, /That was my oh shit moment\./i);
  assert.match(html, /ICF Professional Certified Coach \(PCC\)/i);
  assert.equal((html.match(/role="img"/gi) ?? []).length, 0);
  assert.match(html, /src="\/carly-about-bio-green\.jpg"/i);
  assert.match(
    html,
    /alt="Carly Clark Zimmer smiling in a green velvet jacket"/i,
  );
  assert.match(html, /src="\/carly-about-where-i-come-in-seated\.jpg"/i);
  assert.match(
    html,
    /alt="Carly Clark Zimmer seated in a green velvet jacket"/i,
  );
  assert.match(html, /href="\/services"[^>]*>Show Me My Options<\/a>/i);
  assert.match(html, /aria-label="Site navigation"/i);
});

test("serves a branded 404 with clear routes back into the site", async () => {
  const response = await render("/this-page-does-not-exist");
  const html = await response.text();

  assert.equal(response.status, 404);
  assert.match(html, /This page has left the building\./i);
  assert.match(html, /zapped by the internet gods/i);
  assert.match(html, /aria-label="Site navigation"/i);
  assert.match(html, /href="\/">Head back home<\/a>/i);
  assert.match(html, /href="\/services"/i);
  assert.equal((html.match(/<footer\b/gi) ?? []).length, 1);
});

test("provides a branded recoverable site error boundary", async () => {
  const source = await readFile(new URL("../app/error.tsx", import.meta.url), "utf8");

  assert.match(source, /The site is a little borked\./i);
  assert.match(source, /we(?:’|')ll\s+be\s+back ASAP/i);
  assert.match(source, /onClick=\{reset\}/i);
  assert.match(source, /href="\/"/i);
  assert.doesNotMatch(source, /SiteShell/i);
});

test("serves the campaign without shared site navigation", async () => {
  const response = await render("/beyond-the-bottleneck-2026");
  const html = await response.text();

  assert.doesNotMatch(html, /aria-label="Campaign navigation"/i);
  assert.match(html, /<main\b/i);
  assert.match(html, /<footer\b/i);
  assert.match(html, /© carlyclarkzimmer\.com/i);
  assert.doesNotMatch(html, /Back to top/i);
  assert.doesNotMatch(html, /aria-label="Site navigation"/i);
  assert.match(html, /<title>Beyond the Bottleneck \| Free Audio Series<\/title>/i);
  assert.doesNotMatch(html, /Real stories about the moment things finally changed\./i);
  assert.match(html, /FREE AUDIO SERIES/i);
  assert.match(html, /ACCESS THE AUDIOS/i);
  assert.doesNotMatch(html, /listening tour/i);
  assert.match(
    html,
    /You took the leap and left corporate to start your own business and create more freedom in your life\./i,
  );
  assert.doesNotMatch(html, /Have you ever heard the saying/i);
  assert.doesNotMatch(html, /If the description above feels a little too close for comfort/i);
  assert.doesNotMatch(html, /They got back in the driver&#x27;s seat/i);
  assert.doesNotMatch(html, /all of those feelings were there/i);
  assert.match(
    html,
    /You are not confused about what needs to change\. You just cannot seem to make yourself do it\./i,
  );
  assert.equal((html.match(/type="checkbox"/gi) ?? []).length, 0);
  assert.match(html, /If you check even one thing off this list/i);
  assert.doesNotMatch(html, /Honest conversations\. <i>Actual change\.<\/i>/i);
  assert.doesNotMatch(html, /<span[^>]*>SHORT AUDIO SERIES<\/span>/);
  assert.match(html, /who were once in your shoes/i);
  assert.match(html, /free audio series[\s\S]*featuring honest conversations/i);
  assert.match(html, /What they finally changed/i);
  assert.match(
    html,
    /alt="Carly Clark Zimmer smiling in a berry-colored jacket"/i,
  );
  assert.match(html, /BEGINS OCTOBER 5TH/i);
  assert.doesNotMatch(html, /BEYOND THE BOTTLENECKS—20 MINUTES OR LESS/i);
  assert.match(html, /The current pattern may be exhausting, but it(?:&#x27;|')s familiar/i);
  assert.match(html, /What if the client is disappointed\?/i);
  assert.match(
    html,
    /What if there(?:&#x27;|')s also more room for you and life outside of work\?/i,
  );
  assert.match(html, /What if the boundary you(?:&#x27;|')ve spent six months worrying about/i);
  assert.match(html, /More mornings that do not begin inside Slack/i);
  assert.match(
    html,
    /And what if, on the other side of that decision,[\s\S]*?stronger business\?[\s\S]*?What if there(?:&#x27;|')s also more room for you and life outside of work\?[\s\S]*?More energy\./i,
  );
  assert.match(html, /I(?:&#x27;|')m sick of feeling like this\. I want to listen!/i);
  assert.match(html, /What you(?:&#x27;|')ll hear/i);
  assert.doesNotMatch(html, /Designed for recognition/i);
  assert.doesNotMatch(html, /You will hear about/i);
  assert.doesNotMatch(html, /REGISTER FOR FREE/i);
  assert.doesNotMatch(html, /Short audio interviews, each 20 minutes or less\./i);
  assert.match(html, /Listen on your own schedule/i);
  assert.match(html, /Listen on your own time/i);
  assert.doesNotMatch(
    html,
    /Because the change you keep putting off may not be nearly as hard as continuing to live inside the pattern\./i,
  );
  assert.match(html, /Meet the Business Owners Thriving Beyond the Bottleneck/i);
  assert.match(html, /Featured Host: Carly Clark Zimmer/);
  assert.doesNotMatch(html, /Carly Clark Zimmer portrait placeholder/);
  assert.match(html, /Leadership and Behavioral Change Coach, ICF PCC/);
  const featuredHostCard = html.split('alt="Carly Clark Zimmer"')[1]?.split('id="chapter-01"')[0] ?? "";
  assert.doesNotMatch(featuredHostCard, /The Pattern Behind the Plateau/i);
  assert.match(html, /When what made you successful becomes the bottleneck\.\.\./);
  assert.match(html, /Rewriting the rules of how you work now\.\.\./);
  assert.match(html, /Letting go of control, responsibility, and “it has to be me”\.\.\./);
  assert.match(html, /Simplifying, choosing, and making room for what matters\.\.\./);
  assert.match(html, /chapter-01/i);
  assert.match(html, /chapter-04/i);
  assert.match(html, /Kristin Brabant/i);
  assert.match(html, /Kari Poppleton/i);
  assert.match(html, /Christine Williams/i);
  assert.doesNotMatch(html, /Christine “Chris” Williams/i);
  assert.doesNotMatch(html, /These conversations are not organized around how impressive someone looks online/i);
  assert.doesNotMatch(html, /Each 20-minute interview/i);
  assert.match(html, /Overachieving made me feel safe/i);
  assert.match(html, /Ashley Krooks/i);
  assert.match(html, /Nervous System &amp; Somatic Coach, Founder of The Nourished Woman/i);
  assert.match(html, /The Freedom Was There\. She Just Couldn.t Feel It: Ashley Krooks on Nervous System Regulation/i);
  assert.match(html, /What got you here will not get you there\./i);
  const contributorImages = [
    ["Kristin Brabant", "kristin-brabant"],
    ["Michelle Knight", "michelle-knight"],
    ["Jen Liddy", "jen-liddy"],
    ["Sarah Young", "sarah-young"],
    ["Emily Reagan", "emily-reagan"],
    ["Ashley Krooks", "ashley-krooks"],
    ["Katie Ferro", "katie-ferro"],
    ["Réland Logan", "reland-logan"],
    ["Holly Haynes", "holly-haynes"],
    ["Christine Williams", "christine-williams"],
    ["Heather Sager", "heather-sager", "png"],
    ["Holly Ostrout", "holly-ostrout"],
    ["Keenya Kelly", "keenya-kelly"],
    ["Nata Salvatori", "nata-salvatori"],
    ["Megan Yelaney", "megan-yelaney"],
    ["Zhara-Marie Henry", "zhara-marie-henry"],
    ["Renee Bowen", "renee-bowen"],
    ["Kimberly Tara", "kimberly-tara"],
    ["Rosemary Dede", "rosemary-dede"],
    ["Ash McDonald", "ash-mcdonald"],
    ["Linda Sidhu", "linda-sidhu"],
    ["Beth Nydick", "beth-nydick"],
    ["Kari Poppleton", "kari-poppleton"],
  ];
  const imageTags = [...html.matchAll(/<img\b[^>]*>/g)].map((match) => match[0]);
  const hostImage = imageTags.find((tag) => tag.includes('alt="Carly Clark Zimmer"'));
  assert.match(hostImage ?? "", /carly-clark-zimmer-host-2\.jpg/);
  const hostAsset = await readFile(new URL("../public/contributors/carly-clark-zimmer-host-2.jpg", import.meta.url));
  assert.ok(hostAsset.length > 0, "featured host headshot asset should exist");
  for (const [name, slug, extension = "jpg"] of contributorImages) {
    const matchingTags = imageTags.filter((tag) => tag.includes(`alt="${name}"`));
    assert.equal(matchingTags.length, 1, `${name} should have one headshot`);
    assert.match(matchingTags[0], new RegExp(`${slug}\\.${extension}`));
    assert.doesNotMatch(html, new RegExp(`${name} portrait placeholder`));
    const asset = await readFile(new URL(`../public/contributors/${slug}.${extension}`, import.meta.url));
    assert.ok(asset.length > 0, `${name}'s headshot asset should exist`);
  }
  const firstChapter = html.split('id="chapter-01"')[1]?.split('id="chapter-02"')[0] ?? "";
  const firstChapterNames = [...firstChapter.matchAll(/<h4[^>]*>([^<]+)<\/h4>/g)]
    .map((match) => match[1]);
  assert.deepEqual(firstChapterNames, [
    "Kristin Brabant",
    "Michelle Knight",
    "Jen Liddy",
    "Sarah Young",
    "Emily Reagan",
    "Ashley Krooks",
  ]);
  assert.doesNotMatch(html, /Contributor name/i);
  const creatorPurpose = html.indexOf("That&#x27;s why I created Beyond the Bottleneck.");
  const creatorMission = html.indexOf("Today, I help booked-out service providers and founders");
  const beliefIntro = html.indexOf("My work is built on a simple belief");
  assert.ok(creatorPurpose >= 0 && creatorMission > creatorPurpose && beliefIntro > creatorMission);
  assert.equal((html.match(/data-drip-embedded-form="419624977"/gi) ?? []).length, 1);
  assert.match(html, /action="https:\/\/www\.getdrip\.com\/forms\/419624977\/submissions"[^>]*method="post"/i);
  assert.match(html, /name="fields\[first_name\]"/i);
  assert.match(html, /name="fields\[email\]"/i);
  assert.match(html, /name="fields\[social_media\]"/i);
  assert.doesNotMatch(html, /name="fields\[optin_source\]"/i);
  assert.match(html, /<input[^>]*tabindex="-1"[^>]*name="website"/i);
  assert.match(html, /name="g-recaptcha-response-data\[form_submission\]"/i);
  assert.match(html, /name="tags\[\]"[^>]*value="Beyond the Bottleneck Audio Series 2026"/i);
  assert.match(html, /data-sitekey="6LdKtHUtAAAAAKOHfTjUMdNYjc0H1vfetOitEMMP"/i);
  assert.match(html, /Get Beyond the Bottleneck/i);
  assert.match(html, /Send Me the Series/i);
  assert.match(html, /href="\/privacy"[^>]*target="_blank"/i);
  assert.doesNotMatch(html, /Let.s Keep In Touch|latest news and exclusive offers/i);
  assert.doesNotMatch(html, /id="signup-form"/i);
  assert.doesNotMatch(html, /href="#signup-form"/i);
  assert.match(html, /data-drip-attribute="sign-up-button"/i);
  assert.match(html, /type="email"/i);
  assert.match(html, /href="#register"/i);
  assert.match(html, /There(?:&#x27;|')s a whole lotta life waiting for you beyond the bottleneck/i);
  assert.match(
    html,
    /alt="Carly Clark Zimmer in an emerald green blazer centered among the Beyond the Bottleneck contributors"/i,
  );
  assert.match(html, /alt="Carly Clark Zimmer seated on stone steps"/i);
});

test("renders one modal Drip form for UTM visits", async () => {
  const response = await render(
    "/beyond-the-bottleneck-2026?utm=instagram%20partner",
  );
  const html = await response.text();

  assert.equal(response.status, 200);
  assert.equal((html.match(/data-drip-embedded-form="419624977"/gi) ?? []).length, 1);
  assert.match(html, /name="fields\[optin_source\]"[^>]*value="instagram partner"/i);
});

test("redirects the former campaign route to the 2026 URL", async () => {
  const response = await render("/beyond-the-bottleneck");

  assert.equal(response.status, 308);
  assert.equal(
    new URL(response.headers.get("location")).pathname,
    "/beyond-the-bottleneck-2026",
  );
});

test("serves the Coaching Club baseline as a focused landing page", async () => {
  const response = await render("/coaching-club");
  const html = await response.text();

  assert.equal(response.status, 200);
  assert.match(html, /<title>Laser Coaching Club \| Carly Clark Zimmer<\/title>/i);
  assert.match(html, /What if the thing you have been putting off for six months/i);
  assert.match(html, /The Laser Coaching Club is where you stop gathering more info/i);
  assert.match(html, /Three live Pattern Breaker Power Hours/i);
  assert.match(html, /each month\./i);
  assert.match(html, /\$97 per month \(Founding Member Rate\)/i);
  assert.match(html, /Anne K\./i);
  assert.match(html, /Jennifer B\./i);
  assert.match(html, /Jenn L\./i);
  assert.match(
    html,
    /href="https:\/\/carlyclarkzimmer\.thrivecart\.com\/laser-coaching-club\/"/i,
  );
  assert.match(
    html,
    /alt="Carly Clark Zimmer seated outdoors in a berry-colored jacket"/i,
  );
  assert.match(html, /<footer\b/i);
  assert.doesNotMatch(html, /aria-label="Site navigation"/i);
  assert.doesNotMatch(html, /aria-label="Campaign navigation"/i);
  assert.doesNotMatch(html, /connect\.facebook\.net|leadpages|center\.io/i);
});

test("serves the Behavior Bottleneck Finder as a focused signup page", async () => {
  const response = await render("/behavior-bottleneck-beta-systems-showcase-2026");
  const html = await response.text();

  assert.equal(response.status, 200);
  assert.match(html, /<title>Behavior Bottleneck Finder \| Carly Clark Zimmer<\/title>/i);
  assert.match(html, /Try the/i);
  assert.match(html, /Behavior <em>Bottleneck<\/em> Finder/i);
  assert.match(html, /The short-term relief behavior/i);
  assert.match(html, /Get Two Week Access/i);
  assert.match(html, /type="email"/i);
  assert.match(html, /name="confirmation"/i);
  assert.match(html, /data-drip-embedded-form="699148655"/i);
  assert.match(html, /id="drip-ef-699148655"/i);
  assert.match(html, /https:\/\/www\.getdrip\.com\/forms\/699148655\/submissions/i);
  assert.match(html, /name="fields\[first_name\]"/i);
  assert.match(html, /name="fields\[email\]"/i);
  assert.match(html, /Behavior Bottleneck Finder Beta/i);
  assert.match(html, /data-sitekey="6LdKtHUtAAAAAKOHfTjUMdNYjc0H1vfetOitEMMP"/i);
  assert.match(html, /name="g-recaptcha-response-data\[form_submission\]"/i);
  assert.match(html, /href="\/privacy"[^>]*target="_blank"/i);
  assert.doesNotMatch(html, /api\.leadpages\.io/i);
  assert.match(html, /alt="Carly Clark Zimmer standing in a teal jacket/i);
  assert.doesNotMatch(html, /aria-label="Site navigation"/i);
  assert.doesNotMatch(html, /connect\.facebook\.net|center\.io/i);
});

test("serves the Right Role mini-class as a focused landing page", async () => {
  const response = await render("/right-role");
  const html = await response.text();

  assert.equal(response.status, 200);
  assert.match(
    html,
    /<title>How to Make Your Next Hire, the RIGHT Hire with the Kolbe Index<\/title>/i,
  );
  assert.match(html, /rel="canonical" href="\/right-role"/i);
  assert.match(html, /Simplify How to Make Your Next Hire the/i);
  assert.match(html, /Right Hire/i);
  assert.match(html, /Here&#x27;s what you&#x27;ll learn\.\.\./i);
  assert.match(html, /Define exactly WHO your first, or next hire is\./i);
  assert.match(html, /The Kolbe fills the gap between equally important elements/i);
  assert.match(html, /Training &amp; Certifications/i);
  assert.match(
    html,
    /Share your details below and I&#x27;ll send the mini-class straight to your inbox\./i,
  );
  assert.match(html, /Send Me the Mini-Class/i);
  assert.match(html, /placeholder="you@example\.com"/i);
  assert.match(html, /id="drip-ef-933352998"/i);
  assert.match(
    html,
    /https:\/\/www\.getdrip\.com\/forms\/933352998\/submissions/i,
  );
  assert.match(html, /name="fields\[first_name\]"/i);
  assert.match(html, /<input[^>]*required[^>]*name="fields\[email\]"/i);
  assert.match(html, /name="fields\[social_media\]"/i);
  assert.match(html, /name="tags\[\]"[^>]*value="Kolbe-Right-Role"/i);
  assert.match(
    html,
    /data-sitekey="6LdKtHUtAAAAAKOHfTjUMdNYjc0H1vfetOitEMMP"/i,
  );
  assert.match(html, /name="g-recaptcha-response-data\[form_submission\]"/i);
  assert.match(html, /href="\/privacy"[^>]*target="_blank"/i);
  assert.doesNotMatch(html, /serve-leadbox|api\.leadpages\.io/i);
  assert.match(html, /carly-hero\.jpg/i);
  assert.match(html, /carly-supporting\.jpg/i);
  assert.doesNotMatch(html, /aria-label="Site navigation"/i);
  assert.doesNotMatch(html, /connect\.facebook\.net|center\.io/i);
});

test("serves the Communication Scripts page as a focused landing page", async () => {
  const response = await render("/scripts");
  const html = await response.text();

  assert.equal(response.status, 200);
  assert.match(html, /<title>Go-To Communication Scripts<\/title>/i);
  assert.match(html, /rel="canonical" href="\/scripts"/i);
  assert.match(html, /Boundary Scripts/i);
  assert.match(html, /Simple phrases\. Big impact\./i);
  assert.match(
    html,
    /Share your details below and I&#x27;ll send the go-to communication scripts straight to your inbox\./i,
  );
  assert.match(html, /id="drip-ef-88996381"/i);
  assert.match(
    html,
    /https:\/\/www\.getdrip\.com\/forms\/88996381\/submissions/i,
  );
  assert.match(html, /name="fields\[first_name\]"/i);
  assert.match(html, /name="fields\[email\]"/i);
  assert.match(html, /name="fields\[social_media\]"/i);
  assert.match(html, /Social Media \(Optional\)/i);
  assert.match(html, /value="Communication Scripts Opt-In"/);
  assert.match(html, /data-sitekey="6LdKtHUtAAAAAKOHfTjUMdNYjc0H1vfetOitEMMP"/i);
  assert.match(html, /href="\/privacy"[^>]*target="_blank"/i);
  assert.match(html, /carly-hero\.jpg/i);
  assert.match(html, /carly-supporting\.jpg/i);
  assert.doesNotMatch(html, /aria-label="Site navigation"/i);
  assert.doesNotMatch(
    html,
    /serve-leadbox|api\.leadpages\.io|connect\.facebook\.net|center\.io/i,
  );
});

test("serves the Laser Coaching Lab welcome page at its thank-you route", async () => {
  const response = await render("/thank-you-laser-coaching-lab");
  const html = await response.text();

  assert.equal(response.status, 200);
  assert.match(html, /<title>Laser Coach Lab<\/title>/i);
  assert.match(
    html,
    /rel="canonical" href="\/thank-you-laser-coaching-lab"/i,
  );
  assert.match(html, /LASER COACHING LAB!/i);
  assert.match(html, /An email is on its way to your inbox/i);
  assert.match(html, /https:\/\/t\.me\/\+HFqmSD8GYW4wMmRh/i);
  assert.match(html, /carly-supporting\.jpg/i);
  assert.doesNotMatch(html, /Get the Scripts/i);
  assert.doesNotMatch(html, /aria-label="Site navigation"/i);
  assert.doesNotMatch(html, /api\.leadpages\.io|connect\.facebook\.net|center\.io/i);
});

test("serves the Simplify Hiring with Kolbe delivery page", async () => {
  const response = await render("/training-simplify-hiring-with-kolbe");
  const html = await response.text();

  assert.equal(response.status, 200);
  assert.match(html, /<title>Simplify Hiring with Kolbe<\/title>/i);
  assert.match(
    html,
    /rel="canonical" href="\/training-simplify-hiring-with-kolbe"/i,
  );
  assert.match(html, /How to Make Your Next Hire, the/i);
  assert.match(html, /RIGHT Hire!/i);
  assert.match(
    html,
    /player\.vimeo\.com\/video\/915632476\?h=6126dfe951/i,
  );
  assert.match(html, /title="Simplify Hiring with Kolbe"/i);
  assert.match(
    html,
    /The Kolbe fills the gap between equally important elements of values, mission, and personality/i,
  );
  assert.match(html, /Your NEXT STEP\.\.\./i);
  assert.match(
    html,
    /href="https:\/\/carlyclarkzimmer\.thrivecart\.com\/kolbe-session\/"/i,
  );
  assert.match(html, /Book Certified Kolbe Session with Carly/i);
  assert.match(html, /carly-supporting\.jpg/i);
  assert.match(html, /kolbe-certified\.png/i);
  assert.match(html, /PROFESSIONALLY TRAINED, SEVEN\+ YEARS EXPERIENCE/i);
  assert.doesNotMatch(html, /aria-label="Site navigation"/i);
  assert.doesNotMatch(
    html,
    /api\.leadpages\.io|connect\.facebook\.net|center\.io|leadpages/i,
  );
  assert.doesNotMatch(html, /Drama Triangle/i);
});

test("serves the Walk the House exercise delivery page", async () => {
  const response = await render("/walk-the-house-exercise");
  const html = await response.text();

  assert.equal(response.status, 200);
  assert.match(html, /<title>Walk the House Exercise<\/title>/i);
  assert.match(html, /rel="canonical" href="\/walk-the-house-exercise"/i);
  assert.match(html, /A guided exercise for seasoned entrepreneurs navigating/i);
  assert.match(html, /identity up-level/i);
  assert.match(html, /player\.vimeo\.com\/video\/1152679286\?h=8ccf143908/i);
  assert.match(html, /title="Walk the House Exercise"/i);
  assert.match(html, /drive\.google\.com\/file\/d\/1OPD_Zk8vYEKoEvtqgyMtXt7K77RUhngd\/view/i);
  assert.match(html, /Click here to access the companion guide/i);
  assert.match(html, /Think HGTV Nate Berkus and Jeremiah Brent energy/i);
  assert.match(html, /The goal is simple\./i);
  assert.match(html, /voxer\.app\.link\/profile\?username=carlyclarkzimmer/i);
  assert.match(html, /mailto:carly@carlyclarkzimmer\.com/i);
  assert.match(html, /instagram\.com\/carlyclarkzimmer/i);
  assert.match(html, /carly-supporting\.jpg/i);
  assert.match(html, /Hey there! I&#x27;m Carly\./i);
  assert.match(html, /© Balance by the Bay, LLC 2026/i);
  assert.doesNotMatch(html, /aria-label="Site navigation"/i);
  assert.doesNotMatch(html, /aria-label="Campaign navigation"/i);
  assert.doesNotMatch(html, /leadpages|connect\.facebook\.net|center\.io|googletagmanager/i);
  assert.doesNotMatch(html, /Heart-Centered Coach Newsletter Sign-Up/i);
});

test("Breakthrough page", async () => {
  const response = await render("/breakthrough");
  assert.equal(response.status, 200);
  const html = await response.text();

  assert.match(html, /Stop swirling\./);
  assert.match(html, /Find the <em>20%<\/em> that actually matters\./);
  assert.match(html, /id="get-access"/);
  assert.match(html, /data-drip-embedded-form="205408070"/);
  assert.match(html, /https:\/\/www\.getdrip\.com\/forms\/205408070\/submissions/);
  assert.match(html, /name="fields\[first_name\]"/);
  assert.match(html, /<input[^>]*required[^>]*name="fields\[first_name\]"/i);
  assert.match(html, /<input[^>]*required[^>]*name="fields\[email\]"/i);
  assert.match(html, /name="fields\[social_media\]"/);
  assert.match(html, /name="tags\[\]"[^>]*value="5-Minute Laser Coach Custom Chat GPT"/);
  assert.match(html, /data-sitekey="6LdKtHUtAAAAAKOHfTjUMdNYjc0H1vfetOitEMMP"/);
  assert.match(html, /href="\/privacy"[^>]*target="_blank"/i);
  assert.equal((html.match(/type="button"/g) ?? []).length, 6);
  assert.match(html, /5-Minute Laser Coach/);
  assert.match(html, /Get your free 5-Minute Laser Coach Custom GPT/);
  assert.doesNotMatch(html, /© carlyclarkzimmer\.com Balance by the Bay, LLC 2026/);
  assert.match(html, /player\.vimeo\.com\/video\/1097028350/);
  assert.doesNotMatch(html, /carlyclarkzimmer\.thrivecart\.com|serve-leadbox|api\.leadpages\.io/);
  assert.doesNotMatch(html, /laser-coach-promo\.png/);
  assert.match(html, /Cross-Cultural Competency, Awareness, and Equity Pledge/);
  assert.doesNotMatch(html, /site-header/);
});

test("serves branded signup status and privacy pages", async () => {
  const [thankYouResponse, privacyResponse] = await Promise.all([
    render("/beyond-the-bottleneck-2026/thank-you?status=registered"),
    render("/privacy"),
  ]);

  assert.equal(thankYouResponse.status, 200);
  const thankYouHtml = await thankYouResponse.text();
  assert.match(thankYouHtml, /You’re in/i);
  assert.match(thankYouHtml, /href="\/beyond-the-bottleneck-2026"/i);
  assert.match(thankYouHtml, /Return to Beyond the Bottleneck/i);
  assert.equal(privacyResponse.status, 200);
  assert.match(await privacyResponse.text(), /Email signup information is processed through Drip/i);
});

test("serves the Beyond the Bottleneck listening library", async () => {
  const response = await render("/beyond-the-bottleneck-2026-delivery");
  const html = await response.text();

  assert.equal(response.status, 200);
  assert.match(html, /<title>Beyond the Bottleneck \| Listening Library<\/title>/i);
  assert.match(html, /The Complete Audio Series/i);
  assert.match(html, /You(?:&#x27;|')re in!/i);
  assert.match(html, /Welcome to Beyond the Bottleneck/i);
  assert.doesNotMatch(html, /src="\/beyond-the-bottleneck-delivery-hero\.png"/i);
  assert.match(html, /Choose how you want to listen\./i);
  assert.match(html, /🎧 Listen in Your Favorite Podcast App/i);
  assert.match(html, /href="#episode-directory"[^>]*>↓ Listen right here<\/a>/i);
  assert.match(html, /Scroll down to choose an episode\./i);
  assert.doesNotMatch(html, /Free Audio Series|Or explore the individual conversations below\./i);
  assert.match(html, /href="https:\/\/podcasts\.helloaudio\.fm\/subscribe\/4e65bd8b-48e0-46c3-a41f-844a5435a02d\/ErJfjS4Um0"[^>]*target="_blank"[^>]*rel="noreferrer"/i);
  assert.doesNotMatch(html, /Listen on Apple Podcasts|apple-podcasts-url-todo/i);
  assert.doesNotMatch(html, /Table of Contents/i);
  assert.match(html, /Explore the Series/i);
  assert.match(html, /Meet the Contributors/i);
  assert.match(html, /Choose a conversation to start listening\./i);
  assert.doesNotMatch(html, /href="#episode-intro"/i);
  assert.match(html, /How to Use This Series/i);
  assert.match(html, /Start here\. A quick introduction to how to use the series, what to listen for, and how to get the most from the conversations as you move through them\./i);
  assert.match(html, /Listen to the Introduction/i);
  assert.match(html, /href="#episode-kimberly-tara"/i);
  assert.match(html, /When Work Follows You Everywhere/i);
  assert.doesNotMatch(html, /aria-label="Contributor image placeholder"/i);
  assert.doesNotMatch(html, /data-placeholder="true"/i);
  const episodeSlugs = new Set(
    [...html.matchAll(/aria-labelledby="listen-([^"]+)"/gi)].map((match) => match[1]),
  );
  assert.equal(episodeSlugs.size, 25);
  assert.doesNotMatch(html, /\[AUDIO PLAYER PLACEHOLDER\]/i);
  const helloAudioEpisodeIds = [
    "bac0af12-8048-4020-9ec1-6c28fb2d919f",
    "3b1f3ab8-5653-4bbb-9320-67f556fb00b5",
    "c1603c41-7681-4964-9538-bceffa8c47bd",
    "f5c03d5f-d7cf-4f32-8c8f-ae2590c0b66b",
    "a81c2c0e-964b-463f-abc4-2aa5e90c519f",
    "f3e63769-2159-4560-8209-fafa96475fea",
    "3e8a53db-704a-4d1b-9252-b4e08596209d",
    "a42bec00-913d-4237-92b4-157ab548ec1b",
    "e7f3c646-a84b-404c-a47b-44beaee3a0d9",
    "d260f755-d029-4fe0-9c03-4db3b1d97513",
    "3c9d5cfb-41cb-42af-879d-773dc97d2da6",
    "fdd0f365-93ce-4089-86c3-370d5c86be72",
    "1ebd8607-4ee7-4ed1-a1b0-480f4e4fdca6",
    "3884b576-0d6b-48b3-a72b-94fcb36dbac7",
    "e6c16d25-1abe-4820-a07f-2da341893ef5",
    "76d83f7c-7312-49e8-9534-6e5d5e123ad5",
    "0b97a1a5-7a66-458a-b8af-08a3da5abf11",
    "fa65ca58-09f9-4e65-ba23-1bf4244560a7",
    "bb230f7c-d268-45b7-92f7-c46f05c0fa83",
    "71dc6880-b7cd-4bdd-81db-1b664430c7a4",
    "a67c53a5-51cc-451f-9c31-14345e24d252",
    "43393aaf-056f-475e-a928-b869d5077781",
    "d1263fde-04ec-4166-b023-c381d48474bd",
    "c8981a56-cde7-44c2-9d38-aaf13db5f3d3",
    "560f3068-dfb9-41a7-9bdc-1162b2811494",
  ];
  for (const episodeId of helloAudioEpisodeIds) assert.match(html, new RegExp(episodeId));
  assert.equal((html.match(/Back to all episodes/gi) ?? []).length, 48);
  assert.doesNotMatch(html, /Welcome to Beyond the Bottleneck: How to Use This Series/i);
  const orderedEpisodeSlugs = [
    "intro",
    "kimberly-tara",
    "rosemary-dede",
    "meg-yelaney",
    "keenya-kelly",
    "reland-logan",
    "linda-sidhu",
    "emily-reagan",
    "jen-liddy",
    "renee-bowen",
    "zhara-marie-henry",
    "michelle-knight",
    "ashley-krooks",
    "kari-poppleton",
    "sarah-young",
    "katie-ferro",
    "christine-williams",
    "kristin-brabant",
    "holly-haynes",
    "heather-sager",
    "beth-nydick",
    "nata-salvatori",
    "ash-mcdonald",
    "holly-ostrout",
    "carly-clark-zimmer",
  ];
  const orderedEpisodeIndexes = orderedEpisodeSlugs.map((slug) => html.indexOf(`id="episode-${slug}"`));
  assert.ok(orderedEpisodeIndexes.every((index) => index >= 0));
  assert.ok(orderedEpisodeIndexes.every((index, position) => position === 0 || index > orderedEpisodeIndexes[position - 1]));
  const introHtml = html.split('id="episode-intro"')[1]?.split('id="episode-directory"')[0] ?? "";
  assert.match(introHtml, /podcasts\.helloaudio\.fm\/player\?episodeId=bac0af12-8048-4020-9ec1-6c28fb2d919f&code=ErJfjS4Um0/i);
  assert.doesNotMatch(introHtml, /\[HELLO AUDIO INTRO EPISODE EMBED\]/i);
  assert.ok(html.indexOf('id="episode-intro"') < html.indexOf('id="episode-directory"'));
  assert.ok(html.indexOf('id="episode-directory"') < html.indexOf('id="episode-kimberly-tara"'));
  assert.match(html, /When Work Follows You Everywhere: Kimberly Tara on Rebuilding for Freedom/i);
  const kimberlyHtml = html.split('id="episode-kimberly-tara"')[1]?.split('id="episode-rosemary-dede"')[0] ?? "";
  assert.match(kimberlyHtml, /podcasts\.helloaudio\.fm\/player\?episodeId=3b1f3ab8-5653-4bbb-9320-67f556fb00b5&code=ErJfjS4Um0/i);
  assert.match(kimberlyHtml, /Listen to This Episode/i);
  assert.match(kimberlyHtml, /Take the Series With You/i);
  assert.match(kimberlyHtml, /🎧 LISTEN IN YOUR FAVORITE PODCAST APP →/i);
  assert.doesNotMatch(kimberlyHtml, /Take Beyond the Bottleneck with you|Listen to the Full Series in Your Podcast App/i);
  assert.match(kimberlyHtml, /About This Episode/i);
  assert.match(kimberlyHtml, /fixing the structure of a business and fixing the pattern underneath it/i);
  assert.match(kimberlyHtml, /Meet Kimberly Tara/i);
  assert.match(kimberlyHtml, />Website</i);
  assert.match(kimberlyHtml, />Instagram</i);
  assert.doesNotMatch(kimberlyHtml, /From Kimberly/i);
  assert.match(kimberlyHtml, /Free Tax Savings Calculator/i);
  assert.match(kimberlyHtml, /Grab Kimberly Tara(?:&#x27;|')s Resource/i);
  assert.match(kimberlyHtml, /Grab Kimberly(?:&#x27;|')s Resource →/i);
  assert.match(kimberlyHtml, /Back to all episodes/i);
  assert.doesNotMatch(kimberlyHtml, /Ready to interrupt your own pattern|Explore Pattern Interrupt/i);
  assert.doesNotMatch(kimberlyHtml, /\[AUDIO PLAYER PLACEHOLDER\]|\[CONTRIBUTOR BIO PLACEHOLDER\]|\[RESOURCE PLACEHOLDER\]/i);
  const rosemaryHtml = html.split('id="episode-rosemary-dede"')[1]?.split('id="episode-meg-yelaney"')[0] ?? "";
  assert.match(rosemaryHtml, /Listen to This Episode/i);
  assert.match(rosemaryHtml, /Take the Series With You/i);
  assert.match(rosemaryHtml, /🎧 LISTEN IN YOUR FAVORITE PODCAST APP →/i);
  assert.doesNotMatch(rosemaryHtml, /Take Beyond the Bottleneck with you|Listen to the Full Series in Your Podcast App/i);
  assert.doesNotMatch(html, /Take Beyond the Bottleneck with you|Listen to the Full Series in Your Podcast App →/i);
  const namedResourceCtas = [
    "Kimberly", "Rosemary", "Meg", "Keenya", "Réland", "Linda", "Emily", "Jen", "Renee", "Zhara-Marie",
    "Michelle", "Ashley", "Kari", "Sarah", "Katie", "Christine", "Kristin", "Holly", "Heather", "Beth", "Nata", "Ash",
  ];
  for (const firstName of namedResourceCtas) {
    assert.match(html, new RegExp(`>Grab ${firstName}(?:&#x27;|')s Resource →<\\/a>`, "i"));
  }
  assert.doesNotMatch(html, /data-episode-slug="contributor-placeholder-/i);
  assert.match(html, /Meg Yelaney/i);
  assert.doesNotMatch(html, /Meg Yelany/i);
  assert.match(html, /Réland Logan/i);
  assert.match(html, /Zhara-Marie Henry/i);
  assert.match(html, /src="\/contributors\/carly-clark-zimmer-host-2\.jpg"/i);
  assert.match(html, /Host Episode: The Pattern Behind the Plateau, with Carly Clark Zimmer/i);
  assert.match(html, /src="\/contributors\/heather-sager\.png"/i);
  assert.match(html, /Meet Carly Clark Zimmer/i);
  assert.match(html, /href="https:\/\/www\.instagram\.com\/keenyakelly\/"[^>]*>Instagram<\/a>/i);
  const contributorProfileLinks = [
    "https://www.instagram.com/rosemary.dede/",
    "https://www.instagram.com/meganyelaney/",
    "https://meganyelaney.com/podcast",
    "https://podcasts.apple.com/us/podcast/the-luxe-leap/id1801702536",
    "https://www.instagram.com/emilyreaganpr/",
    "https://emilyreaganpr.com/podcast/",
    "https://www.instagram.com/heyjenliddy/",
    "https://www.instagram.com/reneebowen/",
    "https://reneebowen.com/podcast/",
    "https://www.instagram.com/zhara.marie/",
    "https://www.youtube.com/@zhara.marie97",
    "https://www.instagram.com/karipoppleton/",
    "https://www.instagram.com/itssarahyoung/",
    "https://www.instagram.com/orderlyaccountingbykatie/",
    "https://www.instagram.com/christinewilliamscoaching/",
    "https://www.instagram.com/kristinbrabantcoaching/",
    "https://www.instagram.com/crushtherushpodcast/",
    "https://www.hollymariehaynes.com/podcast",
    "https://www.instagram.com/theheathersager/",
    "https://www.instagram.com/bethnydick/",
    "https://www.instagram.com/accidentalceo.co/",
    "https://accidentalceo.co/podcast",
    "https://ashmcdonaldmentoring.com/podcast",
    "https://www.instagram.com/hollyostrout/",
    "https://carlyclarkzimmer.com/",
    "https://www.instagram.com/carlyclarkzimmer/",
    "https://lindasidhu.com/mixermind-waitlist",
  ];
  for (const href of contributorProfileLinks) assert.match(html, new RegExp(`href="${href.replace(/[.*+?^${}()|[\\]\\]/g, "\\$&")}"`));
  assert.match(html, /href="https:\/\/www\.instagram\.com\/_brandmerry\/"[^>]*>Instagram<\/a>/i);
  assert.doesNotMatch(html, /instagram\.com\/michelleknightco|instagram\.com\/thehollymariehaynes/i);
  assert.match(html, /When Personal Growth Turns into Personal Pressure/i);
  assert.match(html, /Monthly Tax &amp; Bookkeeping Reminders/i);
  assert.match(html, /What(?:&#x27;|')s Working in Business Books in 2026/i);
  assert.doesNotMatch(html, /\[EPISODE DESCRIPTION PLACEHOLDER\]|\[CONTRIBUTOR BIO PLACEHOLDER\]|\[RESOURCE PLACEHOLDER\]/i);
  const patternInterruptHtml = html.split('id="pattern-interrupt"')[1]?.split('<footer')[0] ?? "";
  const patternInterruptMatches = html.match(/aria-labelledby="pattern-interrupt(?:-after-jen)?-title"/g) ?? [];
  assert.equal(patternInterruptMatches.length, 2);
  assert.ok(html.indexOf('id="episode-jen-liddy"') < html.indexOf('id="pattern-interrupt-after-jen"'));
  assert.ok(html.indexOf('id="pattern-interrupt-after-jen"') < html.indexOf('id="episode-renee-bowen"'));
  assert.match(patternInterruptHtml, /Ready to work on your bottleneck\?/i);
  assert.match(patternInterruptHtml, /You(?:&#x27;|')ve heard 24 ways/i);
  assert.match(patternInterruptHtml, /Now interrupt one of yours\./i);
  assert.match(patternInterruptHtml, /One Pattern/i);
  assert.match(patternInterruptHtml, /21 Days/i);
  assert.match(patternInterruptHtml, /One Concrete Change/i);
  assert.match(patternInterruptHtml, /\$97/i);
  assert.match(patternInterruptHtml, /href="https:\/\/carlyclarkzimmer\.thrivecart\.com\/the-pattern-interrupt\/"/i);
  assert.match(patternInterruptHtml, /Explore the Pattern Interrupt →/i);
  assert.match(patternInterruptHtml, /src="\/carly-about-hero\.png"/i);
  assert.match(patternInterruptHtml, /alt="Carly Clark Zimmer seated on stone steps in a magenta velvet jacket"/i);
  assert.doesNotMatch(patternInterruptHtml, /testimonial|countdown|same mindset/i);
  assert.doesNotMatch(html, /Listen to the complete series →/i);
  assert.match(html, /content="noindex, nofollow"/i);
  assert.doesNotMatch(html, /aria-label="Site navigation"/i);
});

test("serves a generic thank-you page without campaign delivery copy", async () => {
  const response = await render("/thank-you");
  const html = await response.text();

  assert.equal(response.status, 200);
  assert.match(html, /<title>Thank You \| Carly Clark Zimmer<\/title>/i);
  assert.match(html, /Your submission has been received/i);
  assert.match(html, /Check your email for a message from me!/i);
  assert.match(html, /href="\/"/i);
  assert.match(html, /Return to the homepage/i);
  assert.doesNotMatch(html, /Beyond the Bottleneck|listening-tour details/i);
});

test("serves the migrated legacy offer and opt-in pages", async () => {
  for (const path of ["/2026-5-minute-laser-coach-delivery", "/trust", "/newsletter", "/newsletter-thank-you"]) {
    const response = await render(path);
    assert.equal(response.status, 200);
    const html = await response.text();
    assert.doesNotMatch(html, /aria-label="Site navigation"/i);
    assert.match(html, /<main\b/i);
  }
  const trust = await render("/trust").then((r) => r.text());
  assert.equal((trust.match(/data-drip-embedded-form="390335848"/gi) ?? []).length, 2);
  assert.match(trust, /id="drip-ef-390335848-hero"/i);
  assert.match(trust, /id="drip-ef-390335848-story"/i);
  assert.match(trust, /https:\/\/www\.getdrip\.com\/forms\/390335848\/submissions/i);
  assert.match(trust, /Trust Issues Podcast/i);
  assert.match(trust, /id="g-recaptcha-response-data-form-submission-hero"/i);
  assert.match(trust, /id="g-recaptcha-response-data-form-submission-story"/i);
  assert.equal((trust.match(/href="\/privacy"[^>]*target="_blank"/gi) ?? []).length, 2);
  assert.doesNotMatch(trust, /api\.leadpages\.io/i);
  const newsletter = await render("/newsletter").then((r) => r.text());
  assert.match(newsletter, /data-drip-embedded-form="186265682"/i);
  assert.match(newsletter, /id="drip-ef-186265682"/i);
  assert.match(newsletter, /https:\/\/www\.getdrip\.com\/forms\/186265682\/submissions/i);
  assert.match(newsletter, /name="fields\[first_name\]"/i);
  assert.match(newsletter, /name="fields\[email\]"/i);
  assert.match(newsletter, /General Email List/i);
  assert.match(newsletter, /data-sitekey="6LdKtHUtAAAAAKOHfTjUMdNYjc0H1vfetOitEMMP"/i);
  assert.match(newsletter, /href="\/privacy"[^>]*target="_blank"/i);
  assert.doesNotMatch(newsletter, /api\.leadpages\.io/i);
  assert.match(await render("/2026-5-minute-laser-coach-delivery").then((r) => r.text()), /player\.vimeo\.com\/video\/1059763588/i);
});

test("serves the Trust Issues podcast delivery page", async () => {
  const response = await render("/trust-issues");
  assert.equal(response.status, 200);
  const html = await response.text();

  assert.match(html, /<title>Trust Issues Private Podcast<\/title>/i);
  assert.match(html, /name="keywords" content="navigating change,identity uplevel,rebuilding after success"/i);
  assert.match(html, /rel="canonical" href="\/trust-issues"/i);
  assert.match(html, /This five-part private podcast is your invitation/i);
  assert.match(html, /podcasts\.apple\.com\/us\/podcast\/trust-issues\/id1846677283/i);
  assert.match(html, /open\.spotify\.com\/show\/1tuGbg3VTegweHUkPiGoLj/i);
  assert.match(html, /podcasts\.helloaudio\.fm\/playlistPlayer/i);
  assert.match(html, /Cross-Cultural Competency, Awareness, and Equity Pledge/i);
  assert.match(html, /alt="Carly Clark Zimmer smiling in a berry-colored jacket"/i);
  assert.doesNotMatch(html, /data-drip-embedded-form/i);
  assert.doesNotMatch(html, /aria-label="Site navigation"/i);
  assert.doesNotMatch(html, /leadpages|connect\.facebook\.net|center\.io/i);
});

test("serves the Walk the House exercise landing page", async () => {
  const response = await render("/house");
  assert.equal(response.status, 200);
  const html = await response.text();

  assert.match(html, /<title>Walk the House<\/title>/i);
  assert.match(html, /rel="canonical" href="\/house"/i);
  assert.match(html, /When Change Is Calling, Start Here:/i);
  assert.match(html, /A guided exercise for seasoned entrepreneurs navigating/i);
  assert.match(html, /data-drip-embedded-form="145041708"/i);
  assert.match(html, /id="drip-ef-145041708"/i);
  assert.match(html, /https:\/\/www\.getdrip\.com\/forms\/145041708\/submissions/i);
  assert.match(html, /name="fields\[first_name\]"/i);
  assert.match(html, /name="fields\[email\]"/i);
  assert.match(html, /Walk the House/i);
  assert.match(html, /data-sitekey="6LdKtHUtAAAAAKOHfTjUMdNYjc0H1vfetOitEMMP"/i);
  assert.match(html, /href="\/privacy"[^>]*target="_blank"/i);
  assert.doesNotMatch(html, /api\.leadpages\.io/i);
  assert.match(
    html,
    /resources\.lindasidhu\.com\/products\/mixermind-in-2026\/categories\/2159052927\/posts\/2194823484/i,
  );
  assert.match(html, /src="\/walk-the-house-cover\.png"/i);
  assert.match(html, /src="\/walk-the-house-rooms\.png"/i);
  assert.match(html, /src="\/carly-supporting\.jpg"/i);
  assert.doesNotMatch(html, /aria-label="Site navigation"/i);
  assert.doesNotMatch(
    html,
    /connect\.facebook\.net|center\.io|leadpages-served-by|page-analytics-property/i,
  );
});

test("serves the Pattern Breaker training as a focused landing page", async () => {
  const response = await render("/pattern-breaker");
  const html = await response.text();

  assert.equal(response.status, 200);
  assert.match(html, /<title>The Pattern Behind the Problem<\/title>/i);
  assert.match(html, /rel="canonical" href="\/pattern-breaker"/i);
  assert.match(html, /You already know what needs to change\./i);
  assert.match(html, /The gap is in the follow-through\./i);
  assert.match(html, /Name the pattern/i);
  assert.match(html, /Interrupt it precisely/i);
  assert.match(html, /Input your text in this area/i);
  assert.match(html, /Ready to stop circling\?/i);
  assert.equal(
    (html.match(/data-drip-embedded-form="300703732"/gi) ?? []).length,
    2,
  );
  assert.equal(
    (html.match(/name="fields\[first_name\]"/gi) ?? []).length,
    2,
  );
  assert.equal(
    (html.match(/name="fields\[email\]"/gi) ?? []).length,
    2,
  );
  assert.equal(
    (html.match(/name="fields\[social_media\]"/gi) ?? []).length,
    2,
  );
  assert.match(
    html,
    /https:\/\/www\.getdrip\.com\/forms\/300703732\/submissions/i,
  );
  assert.equal(
    (
      html.match(
        /value="Pattern Breaker Email Opt-in"/gi,
      ) ?? []
    ).length,
    2,
  );
  assert.equal(
    (
      html.match(
        /data-sitekey="6LdKtHUtAAAAAKOHfTjUMdNYjc0H1vfetOitEMMP"/gi,
      ) ?? []
    ).length,
    2,
  );
  assert.match(
    html,
    /id="g-recaptcha-response-data-form-submission-pattern-breaker-hero"/i,
  );
  assert.match(
    html,
    /id="g-recaptcha-response-data-form-submission-pattern-breaker-invitation"/i,
  );
  assert.equal(
    (html.match(/href="\/privacy"[^>]*target="_blank"/gi) ?? []).length,
    2,
  );
  assert.doesNotMatch(html, /api\.leadpages\.io/i);
  assert.doesNotMatch(html, /general-email/i);
  assert.match(html, /src="\/carly-hero\.jpg"/i);
  assert.match(html, /src="\/carly-supporting\.jpg"/i);
  assert.doesNotMatch(html, /aria-label="Site navigation"/i);
  assert.doesNotMatch(html, /aria-label="Campaign navigation"/i);
  assert.doesNotMatch(
    html,
    /connect\.facebook\.net|center\.io|leadpages-served-by|page-analytics-property/i,
  );
});

test("serves polished local site-navigation pages", async () => {
  const [servicesResponse, aboutResponse, resultsResponse, resourcesResponse, contactResponse] = await Promise.all([
    render("/services"),
    render("/about"),
    render("/client-results"),
    render("/links"),
    render("/contact"),
  ]);

  assert.equal(servicesResponse.status, 200);
  assert.match(await servicesResponse.text(), /Business Restoration Method/i);
  assert.equal(aboutResponse.status, 200);
  const aboutHtml = await aboutResponse.text();
  assert.match(aboutHtml, /That was my oh shit moment\./i);
  assert.match(aboutHtml, /The Business Restoration Method/i);
  assert.doesNotMatch(aboutHtml, /Your photo here/i);
  assert.equal((aboutHtml.match(/role="img"/gi) ?? []).length, 0);
  assert.match(aboutHtml, /Show Me My Options/i);
  assert.equal(resultsResponse.status, 200);
  assert.match(await resultsResponse.text(), /Rochelle Y/i);
  assert.equal(resourcesResponse.status, 200);
  assert.match(await resourcesResponse.text(), /Email signup is being prepared/i);
  assert.equal(contactResponse.status, 200);
  assert.match(await contactResponse.text(), /carly@carlyclarkzimmer.com/i);
});

test("renders the approved equity pledge once on every page type", async () => {
  for (const path of ["/", "/about", "/beyond-the-bottleneck-2026", "/coaching-club", "/breakthrough", "/trust"]) {
    const response = await render(path);
    assert.equal(response.status, 200);
    const html = await response.text();
    assert.equal(
      (html.match(/<h2 id="equity-pledge-heading">/gi) ?? []).length,
      1,
      `${path} should render one equity pledge`,
    );
    assert.match(html, /My communities have a strict vetting process/i);
    assert.ok(
      html.indexOf('id="equity-pledge-heading"') < html.lastIndexOf("Privacy Policy"),
      `${path} should place the pledge above the legal footer`,
    );
  }
});
