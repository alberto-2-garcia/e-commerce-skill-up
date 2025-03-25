export interface Category {
    id: number;
    name: string;
    description: string;
}

export interface ProductImage {
    id: number;
    url: string
}

export interface Product {
    id: number;
    short_description: string;
    long_description: string;
    available_quantity: number;
    price: number;
    uom: string;
    sku: string;
    barcode: number;
    status: string;
    brand: string;
    rating: number;
    reviews: number;
    product_images: ProductImage[];
    category: Category;
}
