/**************************************************************************
 * IMPORTS
 ***************************************************************************/

import { getUserHandler } from "@/mcp/tools/get_user/handler.js";
import { GET_USER_INPUT_SHAPE, GET_USER_OUTPUT_SHAPE } from "@/mcp/tools/get_user/shapes.js";

import type { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import type { GetUserInput, GetUserOutput } from "@/mcp/tools/get_user/shapes.js";

/**************************************************************************
 * TOOL
 ***************************************************************************/

// Defining and registering our "get_user" tool
function registerGetUserTool(server: McpServer): void {
  server.registerTool(
    "get_user",
    {
      title        : "Get user",
      description  : `
        Use this tool to retrieve the account information of a user in the store's database.

        Common use-cases include:
        - Retrieving user profile information, preferences or notification status
        - Accessing user purchase history

        This tool can for instance be used to list orders and assess the most recent ones
        before fetching their details with the "get_order" tool.
      `,
      inputSchema  : GET_USER_INPUT_SHAPE,
      outputSchema : GET_USER_OUTPUT_SHAPE,
    },
    async (input: GetUserInput) => {
      const output: GetUserOutput = getUserHandler(input);

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

export { registerGetUserTool };
