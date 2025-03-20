import { http, HttpResponse } from 'msw';
import purchaseOrdersFixture from './_fixtures/purchaseOrders.json';
import { DEV_BASE_URL, FETCH_PURCHASE_ORDER_PATH, FETCH_PURCHASE_ORDERS_PATH } from '../../constants/apiConstants';


export const purchaseOrdersHandlers = [
    http.get(`${DEV_BASE_URL}${FETCH_PURCHASE_ORDER_PATH}`, async ({ params }) => {
        const { purchaseOrderId } = params;
        const po = purchaseOrdersFixture.find(po => po.purchase_order_id.toString() === purchaseOrderId);
        return HttpResponse.json(po);
    }),

    http.get(`${DEV_BASE_URL}${FETCH_PURCHASE_ORDERS_PATH}`, async () => {
        return HttpResponse.json(purchaseOrdersFixture);
    }),
];

