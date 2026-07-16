import { defineMcp } from "@lovable.dev/mcp-js";
import listProducts from "./tools/list-products";
import getProduct from "./tools/get-product";
import getFaqs from "./tools/get-faqs";

export default defineMcp({
  name: "insulfilm-mcp",
  title: "INSULFILM™ Site MCP",
  version: "0.1.0",
  instructions:
    "Public tools for the INSULFILM™ site. Use `list_products` to discover products, `get_product` for full specs of a product by slug, and `get_faqs` to fetch the public FAQ for a product. All content is public and available in Portuguese (pt), English (en), and Spanish (es).",
  tools: [listProducts, getProduct, getFaqs],
});
