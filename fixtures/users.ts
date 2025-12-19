export const USERS_MOCK = [
  {
    id          : "UID_001",
    name        : "Chris",
    email       : "chris@acme.com",
    phone       : "+1234567890",
    status      : "active",
    created_at  : "2023-01-15T10:00:00Z",
    last_login  : "2024-06-01T12:00:00Z",
    tags        : ["customer", "referral"],
    preferences : {
      language      : "en",
      timezone      : "America/New_York",
      notifications : true,
    },
    address: {
      street  : "123 Main St",
      city    : "Metropolis",
      state   : "NY",
      zip     : "10001",
      country : "USA",
    },
    orders: [
      {
        order_id : "OID_001",
        date     : "2024-05-20T14:30:00Z",
        amount   : 199.99,
        status   : "delivered",
      },
      {
        order_id : "OID_003",
        date     : "2024-06-05T11:10:00Z",
        amount   : 49.99,
        status   : "delivering",
      },
    ],
  },
  {
    id          : "UID_002",
    name        : "Baptiste",
    email       : "baptiste@acme.com",
    phone       : "+1987654321",
    status      : "active",
    created_at  : "2022-11-20T09:30:00Z",
    last_login  : "2023-12-15T08:45:00Z",
    tags        : ["customer", "ambassador", "vip"],
    preferences : {
      language      : "fr",
      timezone      : "Europe/Paris",
      notifications : false,
    },
    address: {
      street  : "456 Rue de Paris",
      city    : "Paris",
      state   : "",
      zip     : "75001",
      country : "France",
    },
    orders: [
      {
        order_id : "OID_002",
        date     : "2023-10-10T16:00:00Z",
        amount   : 299.98,
        status   : "processing",
      },
      {
        order_id : "OID_004",
        date     : "2024-01-15T10:20:00Z",
        amount   : 89.99,
        status   : "delivered",
      },
    ],
  },
];
