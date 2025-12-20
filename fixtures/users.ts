/**************************************************************************
 * TYPES
 ***************************************************************************/

interface UserPreferences {
  language      : string;
  timezone      : string;
  notifications : boolean;
}

interface UserAddress {
  street  : string;
  city    : string;
  state   : string;
  zip     : string;
  country : string;
}

interface User {
  id          : string;
  name        : string;
  email       : string;
  phone       : string;
  status      : string;
  created_at  : string;
  tags        : string[];
  orders      : string[];
  preferences : UserPreferences;
  address     : UserAddress;
}

/**************************************************************************
 * MOCKS
 ***************************************************************************/

const USERS_MOCK: User[] = [
  {
    id          : "UID_001",
    name        : "Chris",
    email       : "chris@acme.com",
    phone       : "+1234567890",
    status      : "active",
    created_at  : "2023-01-15T10:00:00Z",
    tags        : ["customer", "referral"],
    orders      : ["OID_003", "OID_006"],
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
  },
  {
    id          : "UID_002",
    name        : "Baptiste",
    email       : "baptiste@acme.com",
    phone       : "+1987654321",
    status      : "active",
    created_at  : "2022-11-20T09:30:00Z",
    tags        : ["customer", "ambassador", "vip"],
    orders      : ["OID_001", "OID_004"],
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
  },
  {
    id          : "UID_003",
    name        : "Dinis",
    email       : "dinis@acme.com",
    phone       : "+447700900123",
    status      : "active",
    created_at  : "2024-03-05T13:15:00Z",
    tags        : ["customer"],
    orders      : ["OID_002", "OID_005", "OID_007"],
    preferences : {
      language      : "en",
      timezone      : "Europe/London",
      notifications : true,
    },
    address: {
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

export { USERS_MOCK };
