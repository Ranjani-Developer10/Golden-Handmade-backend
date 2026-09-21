const mongoose = require("mongoose");
const Product = require("./models/Product");
require("dotenv").config();

const products = [
  {
    name: "Chocolate Fudge Cake",
    description: "Rich chocolate cake with fudge frosting",
    detailedDescription: "Decadent chocolate cake with layers of fudge...",
    price: 450,
    originalPrice: 550,
    weight: "500g",
    image: "/images/fudgec - Copy.jpg",
    images: [
      "/images/fudge - Copy.webp",
      "/images/fudgec - Copy.jpg"
    ],
    category: "cakes",
    sellerId: "kalpana",
    sellerName: "Kalpana Ravikumar",
    sellerLocation: "Chennai",
    sellerVerified: true,
    rating: 4.5,
    reviewCount: 48,
    ingredients: [
      "Premium Chocolate",
      "Fresh Cream",
      "Organic Eggs"
    ],
    dietaryInfo: [
      "Contains: Eggs, Dairy, Gluten"
    ],
    deliveryInfo: "Delivery within 24 hours",
    createdAt: "2024-01-01",
    stock: 5
  },

  {
    name: "Butterscotch Cake",
    description: "Crunchy caramel butterscotch layered cake",
    price: 550,
    originalPrice: 650,
    weight: "1 kg",
    image: "/images/butterscotch - Copy.webp",
    category: "cakes",
    sellerId: "priya",
    sellerName: "Priya S",
    sellerLocation: "Coimbatore",
    sellerVerified: true,
    rating: 4.7,
    reviewCount: 92,
    createdAt: "2024-01-15",
    stock: 10
  },

  {
    name: "Marble Choco Vanilla Cake",
    description: "Twist of chocolate and vanilla flavor",
    price: 350,
    originalPrice: 400,
    weight: "450g",
    image: "/images/marble2 - Copy.jpg",
    category: "cakes",
    sellerId: "madhu",
    sellerName: "Madhumitha",
    sellerLocation: "Madurai",
    sellerVerified: true,
    rating: 4.2,
    reviewCount: 76,
    createdAt: "2024-02-01",
    stock: 8
  },

  {
    name: "Mango Pickle",
    description: "Traditional homemade mango pickle",
    price: 199,
    originalPrice: 250,
    weight: "250g",
    image: "/images/pickle - Copy.jpg",
    category: "pickles",
    sellerId: "sangeetha",
    sellerName: "Sangeetha",
    sellerLocation: "Salem",
    sellerVerified: true,
    rating: 4.4,
    reviewCount: 67,
    createdAt: "2024-01-10",
    stock: 15
  },

  {
    name: "Cold-pressed Coconut Oil",
    description: "Pure wooden ghani pressed coconut oil",
    price: 350,
    originalPrice: 420,
    weight: "1L",
    image: "/images/oil - Copy.jpg",
    category: "oils",
    sellerId: "meena",
    sellerName: "Meenakshi Traders",
    sellerLocation: "Thanjavur",
    sellerVerified: true,
    rating: 4.8,
    reviewCount: 156,
    createdAt: "2024-03-01",
    stock: 20
  },

  {
    name: "Coconut Shell Tea Set",
    description: "Eco-friendly handmade tea cups",
    price: 1100,
    originalPrice: 1400,
    weight: "Set of 6",
    image: "/images/nut - Copy.webp",
    category: "crafts",
    sellerId: "anitha",
    sellerName: "Anitha",
    sellerLocation: "Tanjore",
    sellerVerified: true,
    rating: 4.9,
    reviewCount: 134,
    createdAt: "2024-02-22",
    stock: 6
  }
];

mongoose
  .connect(process.env.MONGO_URI)
  .then(async () => {
    console.log("MongoDB Atlas Connected");

    await Product.deleteMany({});

    await Product.insertMany(products);

    console.log("6 products inserted successfully!");

    process.exit(0);
  })
  .catch((error) => {
    console.log("MongoDB connection error:", error);
    process.exit(1);
  });