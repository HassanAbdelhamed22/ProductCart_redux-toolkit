import headPhone from "../assets/headphone.jpg";
import smartPhone from "../assets/samsung-galaxy-m33-1.jpg";
import shoes from "../assets/running shoes.webp";
import backBag from "../assets/Backpack.jpeg";
import laptop from "../assets/Gaming Laptop.jpeg";
import smartWatch from "../assets/smart watch.webp";
import { Product } from "../interface";

export const products: Product[] = [
  {
    id: 1,
    name: "Wireless Headphones",
    image: headPhone,
    priceBefore: 100,
    priceAfter: 80,
    discountPercentage: calculateDiscount(100, 80),
  },
  {
    id: 2,
    name: "Smartphone",
    image: smartPhone,
    priceBefore: 500,
    priceAfter: 450,
    discountPercentage: calculateDiscount(500, 450),
  },
  {
    id: 3,
    name: "Running Shoes",
    image: shoes,
    priceBefore: 120,
    priceAfter: 90,
    discountPercentage: calculateDiscount(120, 90),
  },
  {
    id: 4,
    name: "Smartwatch",
    image: smartWatch,
    priceBefore: 200,
    priceAfter: 160,
    discountPercentage: calculateDiscount(200, 160),
  },
  {
    id: 5,
    name: "Gaming Laptop",
    image: laptop,
    priceBefore: 1200,
    priceAfter: 1000,
    discountPercentage: calculateDiscount(1200, 1000),
  },
  {
    id: 6,
    name: "Backpack",
    image: backBag,
    priceBefore: 60,
    priceAfter: 50,
    discountPercentage: calculateDiscount(60, 50),
  },
];

// Helper function to calculate discount percentage
function calculateDiscount(priceBefore: number, priceAfter: number): number {
  return Math.round(((priceBefore - priceAfter) / priceBefore) * 100);
}
