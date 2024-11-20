import { BaseProduct } from "./products";

export const findProduct = <T extends BaseProduct>(products: T[], id: number): T | undefined => {
  return products.find(product => product.id === id);
};

export const filterByPrice = <T extends BaseProduct>(products: T[], maxPrice: number): T[] => {
  return products.filter(product => product.price <= maxPrice);
};
