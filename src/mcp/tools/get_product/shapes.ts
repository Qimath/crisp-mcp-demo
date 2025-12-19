/**************************************************************************
 * IMPORTS
 ***************************************************************************/

import { z } from "zod";
import type { ZodRawShape } from "zod";

/**************************************************************************
 * INPUT
 ***************************************************************************/

const GET_PRODUCT_INPUT_SHAPE = {
  id : z.string().describe("Product ID (e.g. PID_001)"),
} satisfies ZodRawShape;

/**************************************************************************
 * OUTPUT
 ***************************************************************************/

const PRODUCT_DIMENSIONS_SHAPE = {
  weight : z.string().describe("Product weight"),
  width  : z.string().describe("Product width"),
  height : z.string().describe("Product height"),
  depth  : z.string().describe("Product depth"),
} satisfies ZodRawShape;

const GET_PRODUCT_OUTPUT_SHAPE = {
  found   : z.boolean().describe("Whether a product was found with the provided ID"),
  product : z
    .object({
      id           : z.string().describe("Product ID (e.g. PID_001)"),
      name         : z.string().describe("Product name"),
      description  : z.string().describe("Product description"),
      price        : z.number().describe("Product price"),
      category     : z.string().describe("Product category (e.g. Electronics, Outdoor)"),
      stock        : z.number().describe("Available stock quantity"),
      tags         : z.array(z.string()).describe("Product tags"),
      ratings      : z.number().describe("Average rating (e.g. 4.5)"),
      reviews      : z.number().describe("Number of reviews"),
      sku          : z.string().describe("Product SKU"),
      manufacturer : z.string().describe("Product manufacturer"),
      warranty     : z.string().describe("Warranty duration (e.g. 2 years)"),
      release_date : z.string().describe("Release date in ISO format (UTC)"),
      dimensions   : z.object(PRODUCT_DIMENSIONS_SHAPE).describe("Product dimensions"),
    })
    .nullable()
    .describe("Product details"),
} satisfies ZodRawShape;

/**************************************************************************
 * EXPORTS
 ***************************************************************************/

export { GET_PRODUCT_INPUT_SHAPE, GET_PRODUCT_OUTPUT_SHAPE };

export type GetProductInput  = z.infer<z.ZodObject<typeof GET_PRODUCT_INPUT_SHAPE>>;
export type GetProductOutput = z.infer<z.ZodObject<typeof GET_PRODUCT_OUTPUT_SHAPE>>;
