import axios from 'axios';
import { PRODUCTS_PATH } from '../../constants/apiConstants';

export const getProducts = async () => {
    const { data } = await axios.get(PRODUCTS_PATH);

    return data;
};
