/**************************************************************************
 * IMPORTS
 ***************************************************************************/

import { PRODUCTS_MOCK } from "@fixtures/products.js";

import type { GetProductInput, GetProductOutput } from "@/mcp/tools/get_product/shapes.js";

/**************************************************************************
 * HANDLER
 ***************************************************************************/

// Business logic for the "get_product" tool
// This is where you would normally query your database or API and handle the data
function getProductHandler(input: GetProductInput): GetProductOutput {
  const product = PRODUCTS_MOCK.find((_product) => _product.id === input.id) ?? null;

  const output: GetProductOutput = {
    found   : product !== null,
    product : product
      ? {
          id           : product.id,
          name         : product.name,
          description  : product.description,
          price        : product.price,
          category     : product.category,
          stock        : product.stock,
          tags         : product.tags,
          ratings      : product.ratings,
          reviews      : product.reviews,
          sku          : product.sku,
          manufacturer : product.manufacturer,
          warranty     : product.warranty,
          release_date : product.release_date,
          dimensions   : product.dimensions,
        }
       :  null,
  };

  return output;
}

/**************************************************************************
 * EXPORTS
 ***************************************************************************/

export { getProductHandler };
