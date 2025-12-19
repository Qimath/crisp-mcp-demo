/**************************************************************************
 * IMPORTS
 ***************************************************************************/

import { getProductHandler } from "@/mcp/tools/get_product/handler.js";
import {
  GET_PRODUCT_INPUT_SHAPE,
  GET_PRODUCT_OUTPUT_SHAPE,
} from "@/mcp/tools/get_product/shapes.js";

import type { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import type { GetProductInput, GetProductOutput } from "@/mcp/tools/get_product/shapes.js";

/**************************************************************************
 * TOOL
 ***************************************************************************/

// Defining and registering our "get_product" tool
function registerGetProductTool(server: McpServer): void {
  server.registerTool(
    "get_product",
    {
      title        : "Get product",
      description  : `
      Use this tool to retrieve the information of a product in the store's database.

      Common use-cases include:
      - Retrieving product details such as name, description, price, and availability
      - Checking warranty duration (to compare with order date)

      This tool can for instance be used after fetching an order's details
      with the "get_order" tool to get more information about a specific product.
      `,
      inputSchema  : GET_PRODUCT_INPUT_SHAPE,
      outputSchema : GET_PRODUCT_OUTPUT_SHAPE,
    },
    async (input: GetProductInput) => {
      const output: GetProductOutput = getProductHandler(input);

      return {
        content: [
          {
            type : "text",
            text : JSON.stringify(output, null, 2),
          },
        ],
        structuredContent : output,
      };
    },
  );
}

/**************************************************************************
 * EXPORTS
 ***************************************************************************/

export { registerGetProductTool };
