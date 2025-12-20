/**************************************************************************
 * TYPES
 ***************************************************************************/

interface ProductDimensions {
  weight : string;
  width  : string;
  height : string;
  depth  : string;
}

interface Product {
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
  dimensions   : ProductDimensions;
}

/**************************************************************************
 * MOCKS
 ***************************************************************************/

const PRODUCTS_MOCK: Product[] = [
  {
    id           : "PID_001",
    name         : "Wireless Headphones",
    description  : "High-quality wireless headphones with noise cancellation.",
    price        : 199.99,
    category     : "Electronics",
    stock        : 150,
    tags         : ["audio", "wireless", "headphones"],
    ratings      : 4.5,
    reviews      : 1200,
    sku          : "WH-1234",
    manufacturer : "SoundTech",
    warranty     : "2 years",
    release_date : "2023-03-15T00:00:00Z",
    dimensions   : {
      weight : "450g",
      width  : "15cm",
      height : "20cm",
      depth  : "7cm",
    },
  },
  {
    id           : "PID_002",
    name         : "Swiss Army Knife",
    description  : "Multi-functional Swiss Army Knife with various tools.",
    price        : 99.99,
    category     : "Outdoor",
    stock        : 300,
    tags         : ["tools", "outdoor", "knife"],
    ratings      : 4.7,
    reviews      : 850,
    sku          : "SAK-5678",
    manufacturer : "KnifeMaster",
    warranty     : "5 years",
    release_date : "2022-07-10T00:00:00Z",
    dimensions   : {
      weight : "200g",
      width  : "3cm",
      height : "10cm",
      depth  : "2cm",
    },
  },
  {
    id           : "PID_003",
    name         : "Travel Backpack",
    description  : "Durable travel backpack with multiple compartments.",
    price        : 199.99,
    category     : "Travel",
    stock        : 200,
    tags         : ["travel", "backpack", "durable"],
    ratings      : 4.3,
    reviews      : 640,
    sku          : "TB-9101",
    manufacturer : "TravelGear",
    warranty     : "1 year",
    release_date : "2023-11-05T00:00:00Z",
    dimensions   : {
      weight : "1.2kg",
      width  : "30cm",
      height : "50cm",
      depth  : "20cm",
    },
  },
  {
    id           : "PID_004",
    name         : "Spongebob watch",
    description  : "Fun Spongebob themed wristwatch for kids.",
    price        : 49.99,
    category     : "Kids",
    stock        : 500,
    tags         : ["kids", "watch", "spongebob"],
    ratings      : 4.0,
    reviews      : 300,
    sku          : "SBW-1122",
    manufacturer : "FunTime",
    warranty     : "1 year",
    release_date : "2024-02-20T00:00:00Z",
    dimensions   : {
      weight : "100g",
      width  : "4cm",
      height : "4cm",
      depth  : "1cm",
    },
  },
  {
    id           : "PID_005",
    name         : "Electric Kettle",
    description  : "Fast-boiling electric kettle with auto shut-off feature.",
    price        : 89.99,
    category     : "Home Appliances",
    stock        : 250,
    tags         : ["kitchen", "kettle", "electric"],
    ratings      : 4.6,
    reviews      : 720,
    sku          : "EK-3344",
    manufacturer : "HomeEssentials",
    warranty     : "2 years",
    release_date : "2023-08-30T00:00:00Z",
    dimensions   : {
      weight : "800g",
      width  : "20cm",
      height : "25cm",
      depth  : "15cm",
    },
  },
  {
    id           : "PID_006",
    name         : "Yoga Mat",
    description  : "Eco-friendly yoga mat with non-slip surface.",
    price        : 59.99,
    category     : "Fitness",
    stock        : 400,
    tags         : ["yoga", "fitness", "mat"],
    ratings      : 4.4,
    reviews      : 580,
    sku          : "YM-7788",
    manufacturer : "FitLife",
    warranty     : "1 year",
    release_date : "2022-12-01T00:00:00Z",
    dimensions   : {
      weight : "1kg",
      width  : "60cm",
      height : "180cm",
      depth  : "0.5cm",
    },
  },
  {
    id           : "PID_007",
    name         : "Kitten Mittens",
    description  : "Tiny mittens to keep your kitten's paws warm.",
    price        : 14.99,
    category     : "Pet Supplies",
    stock        : 600,
    tags         : ["pets", "kittens", "mittens"],
    ratings      : 4.8,
    reviews      : 150,
    sku          : "KM-9900",
    manufacturer : "PetCare",
    warranty     : "6 months",
    release_date : "2024-04-12T00:00:00Z",
    dimensions   : {
      weight : "50g",
      width  : "3cm",
      height : "4cm",
      depth  : "1cm",
    },
  },
  {
    id           : "PID_008",
    name         : "Sheep Plush Toy",
    description  : "Soft and cuddly sheep plush toy for children.",
    price        : 29.99,
    category     : "Toys",
    stock        : 350,
    tags         : ["toys", "plush", "sheep"],
    ratings      : 4.5,
    reviews      : 400,
    sku          : "SPT-2233",
    manufacturer : "ToyWorld",
    warranty     : "1 year",
    release_date : "2023-09-18T00:00:00Z",
    dimensions   : {
      weight : "300g",
      width  : "15cm",
      height : "20cm",
      depth  : "10cm",
    },
  },
  {
    id           : "PID_009",
    name         : "Lego Starship Set",
    description  : "Build your own starship with this exciting Lego set.",
    price        : 149.99,
    category     : "Toys",
    stock        : 220,
    tags         : ["toys", "lego", "starship"],
    ratings      : 4.9,
    reviews      : 950,
    sku          : "LSS-4455",
    manufacturer : "Lego",
    warranty     : "2 years",
    release_date : "2024-01-25T00:00:00Z",
    dimensions   : {
      weight : "1.5kg",
      width  : "40cm",
      height : "30cm",
      depth  : "10cm",
    },
  },
  {
    id           : "PID_010",
    name         : "Hiking Boots",
    description  : "Durable hiking boots for all terrains.",
    price        : 129.99,
    category     : "Footwear",
    stock        : 180,
    tags         : ["hiking", "boots", "outdoor"],
    ratings      : 4.6,
    reviews      : 670,
    sku          : "HB-6677",
    manufacturer : "OutdoorPro",
    warranty     : "3 years",
    release_date : "2023-06-22T00:00:00Z",
    dimensions   : {
      weight : "1.3kg",
      width  : "30cm",
      height : "20cm",
      depth  : "10cm",
    },
  },
];

/**************************************************************************
 * EXPORTS
 ***************************************************************************/

export { PRODUCTS_MOCK };
