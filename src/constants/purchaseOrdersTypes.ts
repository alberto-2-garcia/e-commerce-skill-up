import { ProductImage } from './productsTypes'

type PurchaseOrderProduct = {
    id: number;
    short_description: string;
    price: number;
    product_images: ProductImage[];
}

export type PurchaseOrder = {
    purchase_order_id: number;
    createdDttm: string;
    total: number;
    products: PurchaseOrderProduct[];
}
