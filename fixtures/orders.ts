/**************************************************************************
 * TYPES
 ***************************************************************************/

interface OrderItem {
  product_id : string;
  name       : string;
  quantity   : number;
  price      : number;
}

interface ShippingAddress {
  street  : string;
  city    : string;
  state   : string;
  zip     : string;
  country : string;
}

interface Order {
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
  items              : OrderItem[];
  shipping_address   : ShippingAddress;
}

/**************************************************************************
 * DATE HELPER
 ***************************************************************************/

const MS_DAY = 24 * 60 * 60 * 1000;

function daysFromNow(days: number): string {
  return new Date(Date.now() + days * MS_DAY).toISOString();
}

/**************************************************************************
 * MOCKS
 ***************************************************************************/

const ORDERS_MOCK: Order[] = [
  {
    id                 : "OID_001",
    user_id            : "UID_002",
    date               : daysFromNow(-170),
    total_amount       : 299.98,
    status             : "delivered",
    payment_method     : "paypal",
    tracking_number    : "TRACK-0001",
    estimated_delivery : daysFromNow(-165),
    courier            : "La Poste",
    notes              : "",
    gift               : true,
    discount_code      : "SUMMER23",
    tracking_url       : "https://courier.example.com/track/TRACK-0001",
    items              : [
      { product_id: "PID_002", name: "Swiss Army Knife", quantity: 1, price: 99.99 },
      { product_id: "PID_003", name: "Travel Backpack", quantity: 1, price: 199.99 },
    ],
    shipping_address: {
      street  : "456 Rue de Paris",
      city    : "Paris",
      state   : "",
      zip     : "75001",
      country : "France",
    },
  },
  {
    id                 : "OID_002",
    user_id            : "UID_003",
    date               : daysFromNow(-60),
    total_amount       : 129.99,
    status             : "refunded",
    payment_method     : "credit_card",
    tracking_number    : "TRACK-0002",
    estimated_delivery : daysFromNow(-52),
    courier            : "Royal Mail",
    notes              : "",
    gift               : false,
    discount_code      : null,
    tracking_url       : "https://courier.example.com/track/TRACK-0002",
    items              : [{ product_id: "PID_010", name: "Hiking Boots", quantity: 1, price: 129.99 }],
    shipping_address   : {
      street  : "789 King St",
      city    : "London",
      state   : "",
      zip     : "SW1A 1AA",
      country : "UK",
    },
  },
  {
    id                 : "OID_003",
    user_id            : "UID_001",
    date               : daysFromNow(-14),
    total_amount       : 199.99,
    status             : "delivered",
    payment_method     : "credit_card",
    tracking_number    : "TRACK-0003",
    estimated_delivery : daysFromNow(-7),
    courier            : "Planet Express",
    notes              : "Leave at front door if not home.",
    gift               : false,
    discount_code      : null,
    tracking_url       : "https://courier.example.com/track/TRACK-0003",
    items              : [{ product_id: "PID_001", name: "Wireless Headphones", quantity: 1, price: 199.99 }],
    shipping_address   : {
      street  : "123 Main St",
      city    : "Metropolis",
      state   : "NY",
      zip     : "10001",
      country : "USA",
    },
  },
  {
    id                 : "OID_004",
    user_id            : "UID_002",
    date               : daysFromNow(-6),
    total_amount       : 89.99,
    status             : "delivered",
    payment_method     : "credit_card",
    tracking_number    : "TRACK-0004",
    estimated_delivery : daysFromNow(-1),
    courier            : "La Poste",
    notes              : "Call upon arrival.",
    gift               : false,
    discount_code      : null,
    tracking_url       : "https://courier.example.com/track/TRACK-0004",
    items              : [{ product_id: "PID_005", name: "Electric Kettle", quantity: 1, price: 89.99 }],
    shipping_address   : {
      street  : "456 Rue de Paris",
      city    : "Paris",
      state   : "",
      zip     : "75001",
      country : "France",
    },
  },

  {
    id                 : "OID_005",
    user_id            : "UID_003",
    date               : daysFromNow(-4),
    total_amount       : 149.99,
    status             : "delivering",
    payment_method     : "paypal",
    tracking_number    : "TRACK-0005",
    estimated_delivery : daysFromNow(0),
    courier            : "DPD",
    notes              : "",
    gift               : true,
    discount_code      : null,
    tracking_url       : "https://courier.example.com/track/TRACK-0005",
    items              : [{ product_id: "PID_009", name: "Lego Starship Set", quantity: 1, price: 149.99 }],
    shipping_address   : {
      street  : "789 King St",
      city    : "London",
      state   : "",
      zip     : "SW1A 1AA",
      country : "UK",
    },
  },
  {
    id                 : "OID_006",
    user_id            : "UID_001",
    date               : daysFromNow(-2),
    total_amount       : 49.99,
    status             : "shipped",
    payment_method     : "credit_card",
    tracking_number    : "TRACK-0006",
    estimated_delivery : daysFromNow(1),
    courier            : "Planet Express",
    notes              : "",
    gift               : false,
    discount_code      : null,
    tracking_url       : "https://courier.example.com/track/TRACK-0006",
    items              : [{ product_id: "PID_004", name: "Spongebob watch", quantity: 1, price: 49.99 }],
    shipping_address   : {
      street  : "123 Main St",
      city    : "Metropolis",
      state   : "NY",
      zip     : "10001",
      country : "USA",
    },
  },
  {
    id                 : "OID_007",
    user_id            : "UID_003",
    date               : daysFromNow(-1),
    total_amount       : 129.97,
    status             : "processing",
    payment_method     : "credit_card",
    tracking_number    : null,
    estimated_delivery : daysFromNow(3),
    courier            : "Royal Mail",
    notes              : "If nobody answers, leave with neighbor.",
    gift               : false,
    discount_code      : null,
    tracking_url       : null,
    items              : [
      { product_id: "PID_002", name: "Swiss Army Knife", quantity: 1, price: 99.99 },
      { product_id: "PID_007", name: "Kitten Mittens", quantity: 2, price: 14.99 },
    ],
    shipping_address: {
      street  : "789 King St",
      city    : "London",
      state   : "",
      zip     : "SW1A 1AA",
      country : "UK",
    },
  },
];

/**************************************************************************
 * EXPORTS
 ***************************************************************************/

export { ORDERS_MOCK };
