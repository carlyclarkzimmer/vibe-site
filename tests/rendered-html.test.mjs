import assert from "node:assert/strict";
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
  assert.match(html, /aria-label="Site navigation"/i);
  assert.match(html, /Work With Carly/i);
  assert.match(html, /href="\/services"/i);
  assert.doesNotMatch(html, /carlyclarkzimmer\.com\/services/i);
  assert.doesNotMatch(html, /https:\/\/www\.google\.com\/recaptcha\/api\.js/i);
  assert.doesNotMatch(html, /codex-preview/i);
  assert.doesNotMatch(html, /Your site is taking shape/i);
  assert.doesNotMatch(html, /react-loading-skeleton/i);
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
  const response = await render("/behavior-bottleneck-finder");
  const html = await response.text();

  assert.equal(response.status, 200);
  assert.match(html, /<title>Behavior Bottleneck Finder \| Carly Clark Zimmer<\/title>/i);
  assert.match(html, /Try the/i);
  assert.match(html, /Behavior <em>Bottleneck<\/em> Finder/i);
  assert.match(html, /The short-term relief behavior/i);
  assert.match(html, /Get Two Week Access/i);
  assert.match(html, /type="email"/i);
  assert.match(html, /name="confirmation"/i);
  assert.match(html, /api\.leadpages\.io\/integration\/v1\/forms\/KDj2LafsFtiGnZjjupdSYi\/submissions/i);
  assert.match(html, /alt="Carly Clark Zimmer standing in a teal jacket/i);
  assert.doesNotMatch(html, /aria-label="Site navigation"/i);
  assert.doesNotMatch(html, /connect\.facebook\.net|center\.io/i);
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
    render("/thank-you?status=registered"),
    render("/privacy"),
  ]);

  assert.equal(thankYouResponse.status, 200);
  const thankYouHtml = await thankYouResponse.text();
  assert.match(thankYouHtml, /You’re in/i);
  assert.match(thankYouHtml, /href="\/beyond-the-bottleneck"/i);
  assert.equal(privacyResponse.status, 200);
  assert.match(await privacyResponse.text(), /Email signup information is processed through Drip/i);
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
