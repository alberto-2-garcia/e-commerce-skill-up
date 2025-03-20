import axios from 'axios';
import { FETCH_PURCHASE_ORDER_PATH } from '../../constants/apiConstants';

export async function getPurchaseOrder() {
    const { data } = await axios.get(FETCH_PURCHASE_ORDER_PATH);
    
    return data;
};

