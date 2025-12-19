/**************************************************************************
 * IMPORTS
 ***************************************************************************/

import type { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";

import { registerGetUserTool } from "@/mcp/tools/get_user/main.js";
import { registerGetProductTool } from "@/mcp/tools/get_product/main.js";
import { registerGetOrderTool } from "@/mcp/tools/get_order/main.js";

/**************************************************************************
 * MAIN
 ***************************************************************************/

// Helper function to register our tools
function registerTools(server: McpServer): void {
  registerGetUserTool(server);
  registerGetProductTool(server);
  registerGetOrderTool(server);
}

/**************************************************************************
 * EXPORTS
 ***************************************************************************/

export { registerTools };
