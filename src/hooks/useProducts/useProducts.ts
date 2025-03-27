import { useQuery } from '@tanstack/react-query';
import { getProducts, getProductById } from '../../api/products/products';
import { Product } from '../../constants/productsTypes';
import { QueryError } from '../../constants/types';

const useProducts = ({ productId }: { productId: string } = { productId : '' }) => {
    const fetchProduct = () => {
        if (productId) {
            return getProductById({ productId });
        } else {
            return null;
        }
    }

    const {
        data: products,
        ...productsState
    } = useQuery<Product[], QueryError>({
        initialData: [],
        queryKey: ['products'],
        queryFn: getProducts,
    });

    const {
        data: product,
        ...productState
    } = useQuery<Product | null, QueryError>({
        initialData: null,
        queryKey: ['product-by-id'],
        queryFn: fetchProduct,
    });

    return {
        products,
        productsState,
        product,
        productState
    };
};

export default useProducts;
