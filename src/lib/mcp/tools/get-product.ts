import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";
import { PDP_PRODUCTS } from "../../pdpProducts";

export default defineTool({
  name: "get_product",
  title: "Get INSULFILM product details",
  description:
    "Return full public details for one INSULFILM™ product: description, technical properties, category, rating, and page URL.",
  inputSchema: {
    slug: z.string().min(1).describe("Product slug, e.g. 'matrix', 'eclipse', 'raystart'."),
    lang: z.enum(["pt", "en", "es"]).default("pt").describe("Language for text fields."),
  },
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: ({ slug, lang }) => {
    const p = PDP_PRODUCTS[slug];
    if (!p) {
      return {
        content: [{ type: "text", text: `No product found for slug '${slug}'.` }],
        isError: true,
      };
    }
    const data = {
      slug,
      name: p.name,
      description: p.description[lang],
      url: p.url,
      category: p.category?.[lang] ?? null,
      properties: p.properties.map((prop) => ({
        name: prop.name[lang],
        value: prop.value[lang],
      })),
      rating: p.rating ?? null,
    };
    return {
      content: [{ type: "text", text: JSON.stringify(data, null, 2) }],
      structuredContent: { product: data },
    };
  },
});
