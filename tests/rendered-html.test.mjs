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

test("server-renders the Beyond the Bottleneck campaign", async () => {
  const response = await render();

  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();

  assert.match(html, /<title>Beyond the Bottleneck \| Free Audio Series<\/title>/i);
  assert.match(html, /Beyond (?:<!--.*?-->)?the(?:<!--.*?-->)? Bottleneck/i);
  assert.match(html, /Begins October 5th/i);
  assert.match(html, /Register for free/i);
  assert.match(html, /Contributor name/i);
  assert.match(html, /type="email"/i);
  assert.match(html, /id="email"/i);
  assert.match(html, /fields\[first_name\]/i);
  assert.match(html, /data-drip-embedded-form="318414890"/i);
  assert.match(html, /beyond-the-bottleneck-listening-tour/i);
  assert.match(html, /href="\/privacy"/i);
  assert.match(html, /https:\/\/www\.google\.com\/recaptcha\/api\.js/i);
  assert.doesNotMatch(html, /codex-preview/i);
  assert.doesNotMatch(html, /Your site is taking shape/i);
  assert.doesNotMatch(html, /react-loading-skeleton/i);
});

test("serves an accessible campaign shell", async () => {
  const response = await render();
  const html = await response.text();

  assert.match(html, /<nav\b/i);
  assert.match(html, /<main\b/i);
  assert.match(html, /<footer\b/i);
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
