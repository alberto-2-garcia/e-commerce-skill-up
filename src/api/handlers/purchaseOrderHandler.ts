import { DefaultRequestMultipartBody, http, HttpResponse } from 'msw';
import purchaseOrdersFixture from './_fixtures/purchaseOrders.json';
import { DEV_BASE_URL, FETCH_PURCHASE_ORDER_PATH } from '../../constants/apiConstants';

type PurchaseOrderRequesBodyType = DefaultRequestMultipartBody & {
    purchaseOrderId: number;
};

export const purchaseOrdersHandlers = [
    http.get<{}, PurchaseOrderRequesBodyType>(`${DEV_BASE_URL}${FETCH_PURCHASE_ORDER_PATH}`, async ({ request }) => {
        // const data = await request.json();
        // const { purchaseOrderId } = data;
        return HttpResponse.json(purchaseOrdersFixture);
    }),
];

