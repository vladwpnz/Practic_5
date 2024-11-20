"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const productUtils_1 = require("./productUtils");
const cartUtils_1 = require("./cartUtils");
// Тестові дані
const electronics = [
    { id: 1, name: "Телефон", price: 10000, category: 'electronics', warranty: "1 рік" },
    { id: 2, name: "Ноутбук", price: 20000, category: 'electronics', warranty: "2 роки" },
];
const clothing = [
    { id: 3, name: "Футболка", price: 500, category: 'clothing', size: "L", material: "Cotton" },
    { id: 4, name: "Джинси", price: 1500, category: 'clothing', size: "M", material: "Denim" },
];
const books = [
    { id: 5, name: "JavaScript for Beginners", price: 800, category: 'book', author: "John Doe", pages: 300 },
    { id: 6, name: "TypeScript Advanced", price: 1200, category: 'book', author: "Jane Smith", pages: 500 },
];
// Демонстрація роботи функцій
console.log("Пошук товару:");
const foundProduct = (0, productUtils_1.findProduct)(electronics, 1);
console.log(foundProduct);
console.log("\nДодавання товару в кошик:");
let cart = [];
if (foundProduct) {
    cart = (0, cartUtils_1.addToCart)(cart, foundProduct, 2);
}
console.log(cart);
console.log("\nОбчислення загальної вартості:");
const total = (0, cartUtils_1.calculateTotal)(cart);
console.log("Загальна вартість:", total);
