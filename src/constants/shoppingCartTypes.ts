import { Product } from './productsTypes';

type BaseShoppingCart = {
    shopping_cart_id: number;
    user_id: string;
}

export type ShoppingCartProductSlice = {
    id: number;
    quantity: number;
}

export interface ProductRow extends Product {
    quantity: number;
}

export interface ShoppingCart extends BaseShoppingCart {
    products: ProductRow[];
}



export type ShoppingCartSlice = BaseShoppingCart & {
    products: ShoppingCartProductSlice[]
}
