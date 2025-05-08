const products = [
  {
    id: "1",
    image: "https://cdn.getir.com/product/5ced4830d349d10001e7055f_tr_1584536178243.jpeg",
    images: ["https://cdn.getir.com/product/5ced4830d349d10001e7055f_tr_1584536178243.jpeg"],
    name: "Granny Smith Apple",
    quantity: 1,  // Sayı olarak değiştirdim
    unit: "kg",   // Birimi ayrı bir property olarak ekledim
    price: 13.95,
    discountedPrice: 12.45,
  },
  {
    id: "2",
    image: "https://cdn.getir.com/product/5ce6581ffd9b330001c4a925_tr_1561363752890.jpeg",
    images: ["https://cdn.getir.com/product/5ce6581ffd9b330001c4a925_tr_1561363752890.jpeg"],
    name: "Sliced Coconut",
    quantity: 40,  // Sayı olarak değiştirdim
    unit: "g",     // Birimi ayrı bir property olarak ekledim
    price: 8.95,
    discountedPrice: 7.75,
  },
  {
    id: "3",
    image: "https://cdn.getir.com/product/61e8237ddaafed5cc5f4c9f8_tr_1643885762259.jpeg",
    images: [
      "https://cdn.getir.com/product/61e8237ddaafed5cc5f4c9f8_tr_1643885762259.jpeg",
      "https://cdn.getir.com/product/559fec01f462100c00461d5c_809628d3-2df0-4341-8853-4407bcec97fb.jpeg"
    ],
    name: "Magnum Duet Red Berries",
    quantity: 100,  // Sayı olarak değiştirdim
    unit: "ml",     // Birimi ayrı bir property olarak ekledim
    price: 11.22,
    discountedPrice: 10.45,
  },
  {
    id: "4",
    image: "https://cdn.getir.com/product/559fed86f462100c00461d8b_tr_1618323792467.jpeg",
    images: [
      "https://cdn.getir.com/product/559fed86f462100c00461d8b_tr_1618323792467.jpeg",
      "https://cdn.getir.com/product/559fec01f462100c00461d5c_809628d3-2df0-4341-8853-4407bcec97fb.jpeg"
    ],
    name: "Magnum Classic",
    quantity: 100,  // Sayı olarak değiştirdim
    unit: "ml",     // Birimi ayrı bir property olarak ekledim
    price: 10.75,
    discountedPrice: 9.45,
  },
  {
    id: "5",
    image: "https://cdn.getir.com/product/60ac9f7e8dc3cf6d1a198940_tr_1622029363093.jpeg",
    images: ["https://cdn.getir.com/product/60ac9f7e8dc3cf6d1a198940_tr_1622029363093.jpeg"],
    name: "Pernigotti Caramel & Almond",
    quantity: 100,  // Sayı olarak değiştirdim
    unit: "ml",     // Birimi ayrı bir property olarak ekledim
    price: 11.69,
    discountedPrice: 10.45,
  }
];

export default products;
