import { useQuery } from '@tanstack/react-query';
import { getPurchaseOrder, getAllPurchaseOrders } from '../../api/purchaseOrders/purchaseOrders';
import { PurchaseOrder } from '../../constants/purchaseOrdersTypes'
import { QueryError } from '../../constants/types';

const defaultPurchaseOrder: PurchaseOrder = {
    purchase_order_id: -1,
    total: 0,
    createdDttm: "",
    products: []
}

const usePurchaseOrders = ({ purchase_order_id }: { purchase_order_id: string | null; }) => {
    const fetchPurchaseOrder = () => {
        if (purchase_order_id) {
            return getPurchaseOrder({ purchase_order_id });
        } else {
            return defaultPurchaseOrder;
        }
    }
    const {
        data: purchaseOrder
    } = useQuery<PurchaseOrder, QueryError>({
        initialData: defaultPurchaseOrder,
        queryKey: ['purchase-order'],
        queryFn: fetchPurchaseOrder,
    });

    const {
        data: purchaseOrders,
        isFetching,
    } = useQuery<PurchaseOrder[], QueryError>({
        initialData: [],
        queryKey: ['all-purchase-order'],
        queryFn: getAllPurchaseOrders,
    });


    return {
        purchaseOrder,
        purchaseOrders,
        isFetching
    };
};

export default usePurchaseOrders;
