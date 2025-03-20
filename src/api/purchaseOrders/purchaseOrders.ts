import axios from 'axios';
import { FETCH_PURCHASE_ORDER_PATH, FETCH_PURCHASE_ORDERS_PATH } from '../../constants/apiConstants';

export async function getPurchaseOrder({ purchase_order_id }: { purchase_order_id: string; }) {
    const { data } = await axios.get(FETCH_PURCHASE_ORDER_PATH.replace(':purchaseOrderId', purchase_order_id));
    return data;
};

export async function getAllPurchaseOrders() {
    const { data } = await axios.get(FETCH_PURCHASE_ORDERS_PATH);
    return data;
};

