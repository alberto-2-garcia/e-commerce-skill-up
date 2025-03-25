import axios from 'axios';
import { PRODUCTS_PATH, PRODUCT_PATH } from '../../constants/apiConstants';

export const getProducts = async () => {
    const { data } = await axios.get(PRODUCTS_PATH);

    return data;
};

export const getProductById = async ({ productId }: { productId: string }) => {
    const { data } = await axios.get(PRODUCT_PATH.replace(':productId', productId));
    return data;
};
