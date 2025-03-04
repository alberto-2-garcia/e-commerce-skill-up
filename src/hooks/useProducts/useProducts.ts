import { HttpStatusCode } from 'axios';
import { useQuery } from '@tanstack/react-query';
import { getProducts } from '../../api/products/products';
import { Product } from '../../constants/types';

interface QueryError extends Error {
    status: HttpStatusCode;
}

export const useProducts = () => {
    const {
        data: products,
        error,
        isFetching,
    } = useQuery<Product[], QueryError>({
        initialData: [],
        queryKey: ['products'],
        queryFn: getProducts,
    });

    return {
        products,
        isError:
            !isFetching && error?.status === HttpStatusCode.InternalServerError,
        isNotFound: !isFetching && error?.status === HttpStatusCode.NotFound,
        isFetching,
    };
};
