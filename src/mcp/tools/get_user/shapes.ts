/**************************************************************************
 * IMPORTS
 ***************************************************************************/

import { z } from "zod";
import type { ZodRawShape } from "zod";

/**************************************************************************
 * INPUT
 ***************************************************************************/

const GET_USER_INPUT_SHAPE = {
  email : z.email().describe("User email address (e.g. chris@acme.com)"),
} satisfies ZodRawShape;

/**************************************************************************
 * OUTPUT
 ***************************************************************************/

const USER_PREFERENCES_SHAPE = {
  language      : z.string().describe("Preferred language (e.g. en, fr)"),
  timezone      : z.string().describe("IANA timezone (e.g. Europe/Paris)"),
  notifications : z.boolean().describe("Whether the user has notifications enabled"),
} satisfies ZodRawShape;

const USER_ADDRESS_SHAPE = {
  street  : z.string().describe("Street address"),
  city    : z.string().describe("City"),
  state   : z.string().describe("State / region (can be empty)"),
  zip     : z.string().describe("ZIP / postal code"),
  country : z.string().describe("Country"),
} satisfies ZodRawShape;

const USER_ORDER_REF_SHAPE = {
  order_id : z.string().describe("Order ID (e.g. OID_001)"),
  date     : z.string().describe("Order date in ISO format (UTC)"),
  amount   : z.number().describe("Order total amount"),
  status   : z.string().describe("Order status (e.g. delivered, processing, delivering)"),
} satisfies ZodRawShape;

const GET_USER_OUTPUT_SHAPE = {
  found : z.boolean().describe("Whether a user was found with the provided email"),
  user  : z
    .object({
      id          : z.string().describe("User ID (e.g. UID_001)"),
      name        : z.string().describe("Full name"),
      email       : z.email().describe("Email address"),
      phone       : z.string().describe("Phone number"),
      status      : z.string().describe("User status (e.g. active)"),
      created_at  : z.string().describe("Account creation date in ISO format (UTC)"),
      last_login  : z.string().describe("Last login date in ISO format (UTC)"),
      tags        : z.array(z.string()).describe("User tags"),
      preferences : z.object(USER_PREFERENCES_SHAPE).describe("User preferences"),
      address     : z.object(USER_ADDRESS_SHAPE).describe("User address"),
      orders      : z
        .array(z.object(USER_ORDER_REF_SHAPE))
        .describe("List of orders attached to this user"),
    })
    .nullable()
    .describe("User details"),
} satisfies ZodRawShape;

/**************************************************************************
 * EXPORTS
 ***************************************************************************/

export { GET_USER_INPUT_SHAPE, GET_USER_OUTPUT_SHAPE };

export type GetUserInput  = z.infer<z.ZodObject<typeof GET_USER_INPUT_SHAPE>>;
export type GetUserOutput = z.infer<z.ZodObject<typeof GET_USER_OUTPUT_SHAPE>>;
