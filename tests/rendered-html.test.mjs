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
  assert.match(html, /https:\/\/www\.google\.com\/recaptcha\/api\.js/i);
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
  assert.doesNotMatch(html, /aria-label="Site navigation"/i);
  assert.match(html, /<title>Beyond the Bottleneck \| Free Audio Series<\/title>/i);
  assert.match(html, /Real stories about the moment things finally changed\./i);
  assert.match(html, /15-minute bingeable interviews/i);
  assert.match(html, /Begins October 5th/i);
  assert.match(html, /Register for free/i);
  assert.match(html, /Contributor name/i);
  assert.match(html, /type="email"/i);
  assert.match(html, /fields\[first_name\]/i);
  assert.match(html, /data-drip-embedded-form="318414890"/i);
  assert.match(html, /beyond-the-bottleneck-listening-tour/i);
  assert.match(html, /<label[^>]*for="email"/i);
  assert.match(html, /href="#register"/i);
  assert.match(html, /alt="Carly Clark Zimmer smiling outdoors"/i);
  assert.match(html, /alt="Carly Clark Zimmer seated on stone steps"/i);
});

test("serves branded signup status and privacy pages", async () => {
  const [thankYouResponse, privacyResponse] = await Promise.all([
    render("/thank-you?status=registered"),
    render("/privacy"),
  ]);

  assert.equal(thankYouResponse.status, 200);
  assert.match(await thankYouResponse.text(), /You’re in/i);
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
