/**************************************************************************
 * IMPORTS
 ***************************************************************************/

import { z } from "zod";
import type { ZodRawShape } from "zod";

/**************************************************************************
 * INPUT
 ***************************************************************************/

const GET_ORDER_INPUT_SHAPE = {
  id : z.string().describe("Order ID (e.g. OID_001)"),
} satisfies ZodRawShape;

/**************************************************************************
 * OUTPUT
 ***************************************************************************/

const ORDER_ITEM_SHAPE = {
  product_id : z.string().describe("Product ID (e.g. PID_001)"),
  name       : z.string().describe("Product name"),
  quantity   : z.number().describe("Quantity purchased"),
  price      : z.number().describe("Unit price at purchase time"),
} satisfies ZodRawShape;

const ORDER_ADDRESS_SHAPE = {
  street  : z.string().describe("Street address"),
  city    : z.string().describe("City"),
  state   : z.string().describe("State / region (can be empty)"),
  zip     : z.string().describe("ZIP / postal code"),
  country : z.string().describe("Country"),
} satisfies ZodRawShape;

const GET_ORDER_OUTPUT_SHAPE = {
  found : z.boolean().describe("Whether an order was found with the provided ID"),
  order : z
    .object({
      id                 : z.string().describe("Order ID (e.g. OID_001)"),
      user_id            : z.string().describe("User ID attached to this order (e.g. UID_001)"),
      date               : z.string().describe("Order date in ISO format (UTC)"),
      total_amount       : z.number().describe("Total order amount"),
      status             : z.string().describe("Order status (e.g. delivered, processing, delivering)"),
      payment_method     : z.string().describe("Payment method (e.g. credit_card, paypal)"),
      tracking_number    : z.string().nullable().describe("Tracking number (nullable if not shipped)"),
      estimated_delivery : z.string().describe("Estimated delivery date in ISO format (UTC)"),
      courier            : z.string().describe("Courier name (e.g. Planet Express, La Poste)"),
      notes              : z.string().describe("Optional delivery notes"),
      gift               : z.boolean().describe("Whether the order is a gift"),
      discount_code      : z.string().nullable().describe("Discount code if applied"),
      tracking_url       : z.string().nullable().describe("Tracking URL (nullable if not available)"),
      items              : z.array(z.object(ORDER_ITEM_SHAPE)).describe("Order items"),
      shipping_address   : z.object(ORDER_ADDRESS_SHAPE).describe("Shipping address"),
    })
    .nullable()
    .describe("Order details"),
} satisfies ZodRawShape;

/**************************************************************************
 * EXPORTS
 ***************************************************************************/

export { GET_ORDER_INPUT_SHAPE, GET_ORDER_OUTPUT_SHAPE };

export type GetOrderInput  = z.infer<z.ZodObject<typeof GET_ORDER_INPUT_SHAPE>>;
export type GetOrderOutput = z.infer<z.ZodObject<typeof GET_ORDER_OUTPUT_SHAPE>>;
