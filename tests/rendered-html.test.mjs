import assert from "node:assert/strict";
import test from "node:test";

async function render() {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request("https://anish-tote-engineering.example/", {
      headers: {
        accept: "text/html",
        host: "anish-tote-engineering.example",
        "x-forwarded-proto": "https",
      },
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

test("server-renders Anish Tote's engineering portfolio", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(
    html,
    /<title>Anish Tote \| Engineering Systems &amp; Enterprise Applications<\/title>/i,
  );
  assert.match(html, /I engineer systems/);
  assert.match(html, /Impetus Shortlist System/);
  assert.match(html, /Impetus SO Notes System/);
  assert.match(html, /PO Approval &amp; Workflow System/);
  assert.match(html, /Golden Batch CP6ML Dashboard/);
  assert.match(html, /Automatic Bottle Filling Machine/);
  assert.match(html, /Logicon Technosolutions Pvt Ltd/);
  assert.match(html, /mailto:anishtote5@gmail\.com/);
  assert.match(html, /\/Anish-Tote-Resume\.pdf/);
  assert.match(
    html,
    /https:\/\/anish-tote-engineering\.example\/og\.jpg/,
  );
  assert.doesNotMatch(html, /codex-preview|Your site is taking shape/i);
});
