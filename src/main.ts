import { findProduct, filterByPrice } from "./productUtils";
import { addToCart, calculateTotal, CartItem } from "./cartUtils";
import { Electronics, Clothing, Book, BaseProduct } from "./products";

// Тестові дані
const electronics: Electronics[] = [
  { id: 1, name: "Телефон", price: 10000, category: 'electronics', warranty: "1 рік" },
  { id: 2, name: "Ноутбук", price: 20000, category: 'electronics', warranty: "2 роки" },
];

const clothing: Clothing[] = [
  { id: 3, name: "Футболка", price: 500, category: 'clothing', size: "L", material: "Cotton" },
  { id: 4, name: "Джинси", price: 1500, category: 'clothing', size: "M", material: "Denim" },
];

const books: Book[] = [
  { id: 5, name: "JavaScript for Beginners", price: 800, category: 'book', author: "John Doe", pages: 300 },
  { id: 6, name: "TypeScript Advanced", price: 1200, category: 'book', author: "Jane Smith", pages: 500 },
];

// Демонстрація роботи функцій
console.log("Пошук товару:");
const foundProduct = findProduct(electronics, 1);
console.log(foundProduct);

console.log("\nДодавання товару в кошик:");
let cart: CartItem<BaseProduct>[] = [];
if (foundProduct) {
  cart = addToCart(cart, foundProduct, 2);
}
console.log(cart);

console.log("\nОбчислення загальної вартості:");
const total = calculateTotal(cart);
console.log("Загальна вартість:", total);
