import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";
import { getPDPFaqs } from "../../pdpFAQs";

export default defineTool({
  name: "get_faqs",
  title: "Get product FAQs",
  description:
    "Return the public FAQ list (question/answer pairs) for one INSULFILM™ product page.",
  inputSchema: {
    slug: z.string().min(1).describe("Product slug, e.g. 'matrix', 'eclipse'."),
    lang: z.enum(["pt", "en", "es"]).default("pt").describe("Language for the FAQs."),
  },
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: ({ slug, lang }) => {
    const faqs = getPDPFaqs(slug, lang);
    if (!faqs) {
      return {
        content: [{ type: "text", text: `No FAQs found for slug '${slug}'.` }],
        isError: true,
      };
    }
    return {
      content: [{ type: "text", text: JSON.stringify(faqs, null, 2) }],
      structuredContent: { faqs },
    };
  },
});
