import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";
import { PDP_PRODUCTS } from "../../pdpProducts";

export default defineTool({
  name: "list_products",
  title: "List INSULFILM products",
  description:
    "List every INSULFILM™ product available on the site (slug, commercial name, page URL, and category).",
  inputSchema: {
    lang: z
      .enum(["pt", "en", "es"])
      .default("pt")
      .describe("Language for the returned category label (pt, en, or es)."),
  },
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: ({ lang }) => {
    const items = Object.entries(PDP_PRODUCTS).map(([slug, p]) => ({
      slug,
      name: p.name,
      url: p.url,
      category: p.category?.[lang] ?? null,
    }));
    return {
      content: [{ type: "text", text: JSON.stringify(items, null, 2) }],
      structuredContent: { products: items },
    };
  },
});
