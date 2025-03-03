import { HttpStatusCode } from 'axios';
import { useQuery } from '@tanstack/react-query';
import { getProducts } from '../../api/products/products';

export const useProducts = () => {
    const {
        data: products,
        error,
        isFetching,
    } = useQuery({
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
