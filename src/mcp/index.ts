/**************************************************************************
 * IMPORTS
 ***************************************************************************/

import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";

import { registerTools } from "@/mcp/tools/index.js";

/**************************************************************************
 * MAIN
 ***************************************************************************/

// Configuring the MCP server with a name, version, and clear global description
function createMcpServer(): McpServer {
  const server = new McpServer(
    {
      name    : "crisp-mcp-demo",
      version : "1.0.0",
    },
    {
      instructions: `
        This server exposes tools to access the store's database information. Use it to:
        - Get user data (by ID or email address)
        - Get product information (by ID)
        - Get order details (by ID)

        Tools can be used succesively to list a user's orders, then get an order details, and then get a product's information.
      `,
    },
  );

  registerTools(server);

  return server;
}

/**************************************************************************
 * EXPORTS
 ***************************************************************************/

export { createMcpServer };
