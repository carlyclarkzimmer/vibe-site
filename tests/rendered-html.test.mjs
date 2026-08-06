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
  assert.match(html, /A Different Way Forward/i);
  assert.equal((html.match(/aria-label="Site navigation"/gi) ?? []).length, 1);
  assert.match(html, /Work With Carly/i);
  assert.match(html, /href="\/services"/i);
  assert.doesNotMatch(html, /carlyclarkzimmer\.com\/services/i);
  assert.doesNotMatch(html, /https:\/\/www\.google\.com\/recaptcha\/api\.js/i);
  assert.doesNotMatch(html, /codex-preview/i);
  assert.doesNotMatch(html, /Your site is taking shape/i);
  assert.doesNotMatch(html, /react-loading-skeleton/i);
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
  const response = await render("/beyond-the-bottleneck");
  const html = await response.text();

  assert.doesNotMatch(html, /aria-label="Campaign navigation"/i);
  assert.match(html, /<main\b/i);
  assert.match(html, /<footer\b/i);
  assert.match(html, /© carlyclarkzimmer\.com/i);
  assert.doesNotMatch(html, /Back to top/i);
  assert.doesNotMatch(html, /aria-label="Site navigation"/i);
  assert.match(html, /<title>Beyond the Bottleneck \| Free Audio Series<\/title>/i);
  assert.doesNotMatch(html, /Real stories about the moment things finally changed\./i);
  assert.match(html, /Bingeable audio interviews—20 minutes or less/i);
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
  assert.equal((html.match(/type="checkbox"/gi) ?? []).length, 6);
  assert.match(html, /Check every box that sounds like you:/i);
  assert.doesNotMatch(html, /Honest conversations\. <i>Actual change\.<\/i>/i);
  assert.doesNotMatch(html, /<span[^>]*>SHORT AUDIO SERIES<\/span>/);
  assert.match(html, /who were once in your shoes/i);
  assert.match(
    html,
    /<strong>short audio series featuring honest conversations with online business owners who were once in your shoes\.<\/strong>/i,
  );
  assert.match(html, /href="#register">Access the series →<\/a>/i);
  assert.match(
    html,
    /alt="Carly Clark Zimmer smiling in a berry-colored jacket"/i,
  );
  assert.match(html, /BEGINS OCTOBER 5TH 2026/i);
  assert.match(
    html,
    /AUDIO INTERVIEWS/i,
  );
  assert.doesNotMatch(html, /BEYOND THE BOTTLENECKS—20 MINUTES OR LESS/i);
  assert.doesNotMatch(html, /Because the current pattern may be exhausting/i);
  assert.doesNotMatch(html, /What if the client is disappointed\?/i);
  assert.match(html, /What if there is also more time for your personal life\?/i);
  assert.doesNotMatch(html, /What if there is also more of you\?/i);
  assert.doesNotMatch(html, /What if the boundary you have spent six months worrying about/i);
  assert.doesNotMatch(html, /More mornings that do not begin inside Slack/i);
  assert.doesNotMatch(html, />Yes, I want to listen<\/a>/i);
  assert.match(html, /Meet the business owners who broke through the bottleneck/i);
  assert.doesNotMatch(html, /Designed for recognition/i);
  assert.doesNotMatch(html, /You will hear about/i);
  assert.match(html, /Begins October 5th 2026/i);
  assert.match(html, /Register for free/i);
  assert.doesNotMatch(html, /Short audio interviews, each 20 minutes or less\./i);
  assert.doesNotMatch(html, /Listen on your own schedule/i);
  assert.doesNotMatch(html, /Listen on your own time/i);
  assert.doesNotMatch(
    html,
    /Because the change you keep putting off may not be nearly as hard as continuing to live inside the pattern\./i,
  );
  assert.match(html, /Contributor name/i);
  assert.equal((html.match(/>Contributor name<\/h3>/gi) ?? []).length, 12);
  assert.doesNotMatch(html, />01<\/span>/i);
  assert.equal(
    (html.match(/aria-label="Contributor portrait placeholder"/gi) ?? [])
      .length,
    12,
  );
  assert.match(
    html,
    /The pattern she interrupted: (?:<!-- -->)?\[specific pattern\]/i,
  );
  assert.match(
    html,
    /What opened up: (?:<!-- -->)?\[specific business and life outcome\]/i,
  );
  assert.match(html, /type="email"/i);
  assert.match(html, /fields\[first_name\]/i);
  assert.match(html, /data-drip-embedded-form="318414890"/i);
  assert.match(html, /id="drip-ef-318414890"/i);
  assert.match(
    html,
    /data-sitekey="6LdKtHUtAAAAAKOHfTjUMdNYjc0H1vfetOitEMMP"/i,
  );
  assert.doesNotMatch(html, /https:\/\/www\.google\.com\/recaptcha\/api\.js/i);
  assert.match(
    html,
    /name="g-recaptcha-response-data\[form_submission\]"/i,
  );
  assert.match(html, /data-drip-attribute="sign-up-button"/i);
  assert.match(html, /beyond-the-bottleneck-listening-tour/i);
  assert.doesNotMatch(html, /I’d also like occasional emails/i);
  assert.doesNotMatch(html, /By registering, you’ll receive listening-tour emails\./i);
  assert.doesNotMatch(html, /id="general-email"/i);
  assert.match(html, /<label[^>]*for="email"/i);
  assert.match(html, /href="#register"/i);
  assert.match(html, /alt="Carly Clark Zimmer smiling outdoors"/i);
  assert.match(html, /alt="Carly Clark Zimmer seated on stone steps"/i);
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
    /https:\/\/carlyclarkzimmer\.com\/serve-leadbox\/YVEqCjmvAubzZv6Tpciov8\//i,
  );
  assert.match(html, /carly-hero\.jpg/i);
  assert.match(html, /carly-supporting\.jpg/i);
  assert.doesNotMatch(html, /aria-label="Site navigation"/i);
  assert.doesNotMatch(html, /api\.leadpages\.io|connect\.facebook\.net|center\.io/i);
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
    /https:\/\/carlyclarkzimmer\.com\/serve-leadbox\/fDiiXkm8GBZSPmyYfH2i3Q\//i,
  );
  assert.match(html, /carly-hero\.jpg/i);
  assert.match(html, /carly-supporting\.jpg/i);
  assert.doesNotMatch(html, /aria-label="Site navigation"/i);
  assert.doesNotMatch(html, /api\.leadpages\.io|connect\.facebook\.net|center\.io/i);
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

  assert.match(html, /Big Breakthroughs in/);
  assert.match(html, /5-Minute Laser Coach/);
  assert.match(html, /player\.vimeo\.com\/video\/1097028350/);
  assert.match(html, /carlyclarkzimmer\.thrivecart\.com\/5-minute-laser-coach-chat-gpt-checkout/);
  assert.match(html, /laser-coach-promo\.png/);
  assert.match(html, /Cross-Cultural Competency, Awareness, and Equity Pledge/);
  assert.doesNotMatch(html, /site-header/);
});

test("serves branded signup status and privacy pages", async () => {
  const [thankYouResponse, privacyResponse] = await Promise.all([
    render("/beyond-the-bottleneck/thank-you?status=registered"),
    render("/privacy"),
  ]);

  assert.equal(thankYouResponse.status, 200);
  const thankYouHtml = await thankYouResponse.text();
  assert.match(thankYouHtml, /You’re in/i);
  assert.match(thankYouHtml, /href="\/beyond-the-bottleneck"/i);
  assert.match(thankYouHtml, /Return to Beyond the Bottleneck/i);
  assert.equal(privacyResponse.status, 200);
  assert.match(await privacyResponse.text(), /Email signup information is processed through Drip/i);
});

test("serves a generic thank-you page without campaign delivery copy", async () => {
  const response = await render("/thank-you");
  const html = await response.text();

  assert.equal(response.status, 200);
  assert.match(html, /<title>Thank You \| Carly Clark Zimmer<\/title>/i);
  assert.match(html, /Your submission has been received/i);
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
    (
      html.match(
        /name="33ad3425125f513ba1ab5e359ca21551"/gi,
      ) ?? []
    ).length,
    2,
  );
  assert.equal(
    (
      html.match(
        /name="ec3b68ece7915ca83f420c91066c7d52"/gi,
      ) ?? []
    ).length,
    2,
  );
  assert.equal(
    (
      html.match(
        /name="9d9d7b20bab90c16e7e8473b4dffb2bc"/gi,
      ) ?? []
    ).length,
    2,
  );
  assert.match(
    html,
    /api\.leadpages\.io\/integration\/v1\/forms\/MoRK7DvxRXQcsNtkVLaYYo\/submissions/i,
  );
  assert.match(
    html,
    /api\.leadpages\.io\/integration\/v1\/forms\/mELWZfNbNLsaLuvYzHaSZZ\/submissions/i,
  );
  assert.equal(
    (
      html.match(
        /data-thank-you="https:\/\/carlyclarkzimmer\.lpages\.co\/newsletter-thank-you\/"/gi,
      ) ?? []
    ).length,
    2,
  );
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
  assert.match(await servicesResponse.text(), /Decision Map Intensive/i);
  assert.equal(aboutResponse.status, 200);
  assert.match(await aboutResponse.text(), /Where my lens was built/i);
  assert.equal(resultsResponse.status, 200);
  assert.match(await resultsResponse.text(), /Rochelle Y/i);
  assert.equal(resourcesResponse.status, 200);
  assert.match(await resourcesResponse.text(), /Email signup is being prepared/i);
  assert.equal(contactResponse.status, 200);
  assert.match(await contactResponse.text(), /carly@carlyclarkzimmer.com/i);
});
