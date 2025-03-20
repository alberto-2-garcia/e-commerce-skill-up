import { ProductImage } from './productsTypes'

type PurchaseOrderProduct = {
    id: number;
    short_description: string;
    product_images: ProductImage[];
}

export type PurchaseOrder = {
    purchase_order_id: number;
    products: PurchaseOrderProduct[];
}
