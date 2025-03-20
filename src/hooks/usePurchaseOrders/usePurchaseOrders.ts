import { HttpStatusCode } from 'axios';
import { useQuery } from '@tanstack/react-query';
import { getPurchaseOrder } from '../../api/purchaseOrders/purchaseOrders';
import { PurchaseOrder } from '../../constants/purchaseOrdersTypes'
import { QueryError } from '../../constants/types';

const defaultPurchaseOrder: PurchaseOrder = {
    purchase_order_id: -1,
    products: []
}

const usePurchaseOrders = () => {
    const {
        data: purchaseOrder,
        error,
        isFetching,
    } = useQuery<PurchaseOrder, QueryError>({
        initialData: defaultPurchaseOrder,
        queryKey: ['purchase-order'],
        queryFn: getPurchaseOrder,
    });


    return {
        purchaseOrder,
        isError:
            !isFetching && error?.status === HttpStatusCode.InternalServerError,
        isNotFound: !isFetching && error?.status === HttpStatusCode.NotFound,
        isFetching,
    };
};

export default usePurchaseOrders;
