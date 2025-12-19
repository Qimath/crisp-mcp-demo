/**************************************************************************
 * IMPORTS
 ***************************************************************************/

import { ORDERS_MOCK } from "@fixtures/orders.js";

import type { GetOrderInput, GetOrderOutput } from "@/mcp/tools/get_order/shapes.js";

/**************************************************************************
 * HANDLER
 ***************************************************************************/

// Business logic for the "get_order" tool
// This is where you would normally query your database or API and handle the data
function getOrderHandler(input: GetOrderInput): GetOrderOutput {
  const order = ORDERS_MOCK.find((_order) => _order.id === input.id) ?? null;

  const output: GetOrderOutput = {
  found : order !== null,
  order : order
    ? {
        id                 : order.id,
        user_id            : order.user_id,
        date               : order.date,
        total_amount       : order.total_amount,
        status             : order.status,
        payment_method     : order.payment_method,
        tracking_number    : order.tracking_number,
        estimated_delivery : order.estimated_delivery,
        courier            : order.courier,
        notes              : order.notes,
        gift               : order.gift,
        discount_code      : order.discount_code,
        tracking_url       : order.tracking_url,
        items              : order.items,
        shipping_address   : order.shipping_address,
      }
    : null,
};


  return output;
}

/**************************************************************************
 * EXPORTS
 ***************************************************************************/

export { getOrderHandler };
