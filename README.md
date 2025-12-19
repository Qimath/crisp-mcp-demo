# Crisp MCP Demo Server

**Demo MCP (Model Context Protocol) server to showcase how to build and use MCP with Crisp.**

This repository serves as a reference implementation and a playground for developers looking to understand and experiment with MCP. It is ready to be deployed, tested, or built upon.

It exposes a MCP endpoint with three tools backed by mock-up data:

- `get_user` → get a user by `email`
- `get_order` → get an order by `id`
- `get_product` → get a product by `id`

_This demo is built using the [@modelcontextprotocol Typescript SDK](https://github.com/modelcontextprotocol/typescript-sdk). Visit their repo for more details and documentation on MCP._

## Installing & Running

There's a couple of ways for you to play with this MCP server:

- Use the already hosted version
- Spin it up yourself (locally or in the cloud)

### A. Hosted version

_This MCP server comes already hosted at and ready to be connected to your Crisp workspace if you wish to test it out quickly._
You can access it at: https://crisp-mcp-demo.fly.dev/mcp

### B. Self-hosted (locally or cloud)

Pre-requisites:

- Node.js `24.x` installed
- npm (comes with Node.js)
- a keyboard (optional, but recommended)

#### Step 1. Cloning the repo

Open a terminal in your desired folder and run:

```sh
git clone https://github.com/Qimath/crisp-mcp-demo.git
cd crisp-mcp-demo
```

#### Step 2. Running the server

You can either run it directly in dev mode, or build it first and then start it.

To build and run the server, use:

```sh
npm ci
npm run build
npm run start
```

Or to run it in dev mode with auto-reloading:

```sh
npm ci
npm run dev
```

#### Step 3. Exposing the server (if running locally)

_If you wish to run the server locally, you will need to expose it through a tunnel
so that Crisp can reach it.
This package is pre-configured to use Cloudflared, though you can use any tunneling solution you prefer._

If Cloudflared is not yet installed on your machine, follow this link to find the installation instructions for your OS:
https://developers.cloudflare.com/cloudflare-one/networks/connectors/cloudflare-tunnel/downloads/

Once installed, open a new terminal and run:

```sh
npm run tunnel
```

You can visit your tunnel's url to confirm it's working. You should see a greeting message.

#### Available scripts

- `npm run dev` → dev server (watch)
- `npm run build` → compile TypeScript
- `npm run start` → run compiled server
- `npm run tunnel` → expose localhost via Cloudflare Tunnel
- `npm run inspect` → runs the @modelcontextprotocol Inspector

## Connecting to Crisp

_This section is a quickstart guide to connect this MCP server to your Crisp workspace.
We recommend also checking out [our official documentation](https://docs.crisp.chat/) for more detailed instructions._

Pre-requisites:

- a Crisp account
- a Crisp workspace on Essentials or Plus plan

1. Navigate to [app.crisp.chat](https://app.crisp.chat/)
2. In the **Automations** menu, head over to **Integrations & MCP** → **External MCP servers**
   and click on **Add MCP server**
   ![Add MCP server](assets/add-mcp-server.png)
3. Enter your MCP server's URL (either your hosted/tunneled URL our
   [hosted version](https://crisp-mcp-demo.fly.dev/mcp)) and hit **Add MCP Server Now**.
   ![Add MCP Now](assets/add-mcp-now.png)
4. Configure the MCP server:
   1. Name it
   2. Hit **Refresh tools from server** to perform an initial fetch
   3. Enable the MCP server
   4. Hit the **Save MCP Server Options** button

![MCP Configuration](assets/mcp-configuration.png) 5. Your MCP server should now be registered and ready to use!
![Activated MCP](assets/activated-mcp.png)

## Testing the MCP server

Still in the **Automations** menu, you can go to **Playground** to test your MCP server and different AI models. Ask it a question!

### Prompt examples

> Hey there, what is the status of my order `POD_002`?

## MCP good practices

### MCP Design

- **Server description:** Describe the general purpose of the MCP server
- **Tool naming:** use clear and explicit names (e.g. `get_order`, not `orderLookup`)
- **Tool descriptions:** Concisely describe what the tool does, when to call it,
  and optionally provide use-case examples
- **Schemas:** Provide precise schemas for tool inputs to ensure correct usage

### User Verification

In your MCP server configuration, you can also optionally require users to authenticate themselves
before the AI can call a MCP tool. This reinforces security over sensitive operations.
If the user is not alredy authenticated, Crisp will send them an OTP code via email or SMS
before allowing the AI to call your MCP tool.

### Server Authentication

In production, you may want to restrict the access to your MCP server and prevent unauthorized usage.
Two authentication methods are available:

- **Bearer Token:** a static token sent in the `Authorization` header of each request
- **Basic Auth:** a username and password sent in the `Authorization` header of each request
