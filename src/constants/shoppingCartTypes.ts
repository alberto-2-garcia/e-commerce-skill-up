import { Product } from './productsTypes';

export interface ProductRow extends Product {
    quantity: number;
}

export interface ShoppingCart {
    shopping_cart_id: number;
    user_id: number;
    products: ProductRow[];
}
