/**************************************************************************
 * USERS MODULE DECLARATIONS
 ***************************************************************************/

declare module "@mocks/users.js" {
  export const USERS_MOCK: Array<{
    id          : string;
    name        : string;
    email       : string;
    phone       : string;
    status      : string;
    created_at  : string;
    last_login  : string;
    tags        : string[];
    preferences : {
      language      : string;
      timezone      : string;
      notifications : boolean;
    };
    address: {
      street  : string;
      city    : string;
      state   : string;
      zip     : string;
      country : string;
    };
    orders: Array<{
      order_id : string;
      date     : string;
      amount   : number;
      status   : string;
    }>;
  }>;
}

/**************************************************************************
 * PRODUCTS MODULE DECLARATIONS
 ***************************************************************************/

declare module "@mocks/products.js" {
  export const PRODUCTS_MOCK: Array<{
    id           : string;
    name         : string;
    description  : string;
    price        : number;
    category     : string;
    stock        : number;
    tags         : string[];
    ratings      : number;
    reviews      : number;
    sku          : string;
    manufacturer : string;
    warranty     : string;
    release_date : string;
    dimensions   : {
      weight : string;
      width  : string;
      height : string;
      depth  : string;
    };
  }>;
}

/**************************************************************************
 * ORDERS MODULE DECLARATIONS
 ***************************************************************************/

declare module "@mocks/orders.js" {
  export const ORDERS_MOCK: Array<{
    id                 : string;
    user_id            : string;
    date               : string;
    total_amount       : number;
    status             : string;
    payment_method     : string;
    tracking_number    : string | null;
    estimated_delivery : string;
    courier            : string;
    notes              : string;
    gift               : boolean;
    discount_code      : string | null;
    tracking_url       : string | null;
    items              : Array<{
      product_id : string;
      name       : string;
      quantity   : number;
      price      : number;
    }>;
    shipping_address: {
      street  : string;
      city    : string;
      state   : string;
      zip     : string;
      country : string;
    };
  }>;
}
