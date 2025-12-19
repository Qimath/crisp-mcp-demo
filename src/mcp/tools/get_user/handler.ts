/**************************************************************************
 * IMPORTS
 ***************************************************************************/

import { USERS_MOCK } from "@fixtures/users.js";

import type { GetUserInput, GetUserOutput } from "@/mcp/tools/get_user/shapes.js";

/**************************************************************************
 * HANDLER
 ***************************************************************************/

// Business logic for the "get_user" tool
// This is where you would normally query your database or API and handle the data
function getUserHandler(input: GetUserInput): GetUserOutput {
  const user = USERS_MOCK.find((_user) => _user.email === input.email) ?? null;

  const output: GetUserOutput = {
    found : user !== null,
    user  : user
      ? {
          id          : user.id,
          name        : user.name,
          email       : user.email,
          phone       : user.phone,
          status      : user.status,
          created_at  : user.created_at,
          last_login  : user.last_login,
          tags        : user.tags,
          preferences : user.preferences,
          address     : user.address,
          orders      : user.orders,
        }
       : null,
  };

  return output;
}

/**************************************************************************
 * EXPORTS
 ***************************************************************************/

export { getUserHandler };
