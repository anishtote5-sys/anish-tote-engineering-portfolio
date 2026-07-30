import { writeFile } from "node:fs/promises";

const owner = process.env.GITHUB_REPOSITORY_OWNER ?? "anishtote5-sys";
const repository =
  process.env.GITHUB_REPOSITORY?.split("/").at(-1) ??
  "anish-tote-engineering-portfolio";
const origin = `https://${owner}.github.io`;
const basePath = `/${repository}`;

const workerUrl = new URL("../dist/server/index.js", import.meta.url);
workerUrl.searchParams.set("pages-export", `${Date.now()}`);
const { default: worker } = await import(workerUrl.href);

const response = await worker.fetch(
  new Request(`${origin}/`, {
    headers: {
      accept: "text/html",
      host: `${owner}.github.io`,
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

if (!response.ok) {
  throw new Error(`Pages export failed with status ${response.status}`);
}

let html = await response.text();

// GitHub Pages is static. Keep the server-rendered portfolio markup and CSS,
// remove the RSC runtime, and rewrite root assets for the repository subpath.
html = html
  .replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, "")
  .replace(/<link\b[^>]*rel=["']modulepreload["'][^>]*>/gi, "")
  .replace(
    new RegExp(`${origin.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}/og\\.png`, "g"),
    `${origin}${basePath}/og.png`,
  )
  .replace(
    new RegExp(`content="${origin.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}"`, "g"),
    `content="${origin}${basePath}/"`,
  )
  .replace(/\b(href|src)="\/(?!\/)/g, `$1="${basePath}/`);

await Promise.all([
  writeFile("dist/client/index.html", html),
  writeFile("dist/client/404.html", html),
  writeFile("dist/client/.nojekyll", ""),
]);

console.log(`Static GitHub Pages export ready at ${origin}${basePath}/`);
