// import api from '../../services/api';
import axios from 'axios';
import { FETCH_SHOPPING_CART_PATH, CHECKOUT_PATH } from '../../constants/apiConstants';

export async function getShoppingCart() {
    // const response = await api.get(FETCH_SHOPPING_CART_PATH);
    // return response.data;
    const { data } = await axios.get(FETCH_SHOPPING_CART_PATH);
    
    return data;
};

export async function checkout({ shopping_cart_id }: { shopping_cart_id: number; }) {
    // const response = await api.post(CHECKOUT_PATH, { shopping_cart_id });
    // return response.data;
    const { data } = await axios.post(CHECKOUT_PATH, { shopping_cart_id });
    return data;
};
