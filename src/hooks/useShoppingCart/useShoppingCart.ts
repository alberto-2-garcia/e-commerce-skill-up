import { HttpStatusCode } from 'axios';
import { useQuery, useMutation } from '@tanstack/react-query';
import { getShoppingCart, checkout } from '../../api/shoppingCart/shoppingCart';
import { useNavigate } from "react-router-dom";
import { ShoppingCart } from '../../constants/shoppingCartTypes'
import { QueryError } from '../../constants/types';

const defaultShoppingCart = {
    shopping_cart_id: -1,
    user_id: -1,
    products: []
}

export const useShoppingCart = () => {
    const navigate = useNavigate();
    const {
        data: shoppingCart,
        error,
        isFetching,
    } = useQuery<ShoppingCart, QueryError>({
        initialData: defaultShoppingCart,
        queryKey: ['shopping-cart'],
        queryFn: getShoppingCart,
    });

    const {
        mutate: handleCheckout,
    } = useMutation({
        mutationFn: checkout,
        onSuccess: (data) => {
            navigate(`/successful-purchase/${data.orderId}`);
        },
        onError: (err) => {
            console.error('checkout error:', err);
        },
    });


    return {
        shoppingCart,
        isError:
            !isFetching && error?.status === HttpStatusCode.InternalServerError,
        isNotFound: !isFetching && error?.status === HttpStatusCode.NotFound,
        isFetching,
        handleCheckout
    };
};