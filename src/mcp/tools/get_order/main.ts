/**************************************************************************
 * IMPORTS
 ***************************************************************************/

import { getOrderHandler } from "@/mcp/tools/get_order/handler.js";
import { GET_ORDER_INPUT_SHAPE, GET_ORDER_OUTPUT_SHAPE } from "@/mcp/tools/get_order/shapes.js";

import type { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import type { GetOrderInput, GetOrderOutput } from "@/mcp/tools/get_order/shapes.js";

/**************************************************************************
 * TOOL
 ***************************************************************************/

// Defining and registering our "get_order" tool
function registerGetOrderTool(server: McpServer): void {
  server.registerTool(
    "get_order",
    {
      title        : "Get order",
      description  : `
        Use this tool to retrieve the details of an order in the store's database.

        Common use-cases include:
        - Retrieving order status, delivery information and tracking link
        - Accessing items included in the order

        If the product ID is unknown, this tool can be used after listing a user's orders
        with the "get_user" tool.
      `,
      inputSchema  : GET_ORDER_INPUT_SHAPE,
      outputSchema : GET_ORDER_OUTPUT_SHAPE,
    },
    async (input: GetOrderInput) => {
      const output: GetOrderOutput = getOrderHandler(input);

      return {
        content : [
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

export { registerGetOrderTool };
