import { DefaultRequestMultipartBody, http, HttpResponse } from 'msw';
import shoppingCartFixture from './_fixtures/shoppingCart.json';
import { DEV_BASE_URL, FETCH_SHOPPING_CART_PATH, CHECKOUT_PATH } from '../../constants/apiConstants';

type CheckoutRequesBodyType = DefaultRequestMultipartBody & {
    shopping_cart_id: number;
};

export const shoppingCartHandlers = [
    http.get(`${DEV_BASE_URL}${FETCH_SHOPPING_CART_PATH}`, async () => {
        return HttpResponse.json(shoppingCartFixture);
    }),
    http.post<{}, CheckoutRequesBodyType>(`${DEV_BASE_URL}${CHECKOUT_PATH}`, async ({ request }) => {
        const data = await request.json();
        const { shopping_cart_id } = data;
        if (shopping_cart_id) {
          return HttpResponse.json(
            { orderId: 123456789 },
            { status: 200 }
          )
        }
        //await delay(10000)
        return HttpResponse.json(
          { message: 'Missing shopping cart id' },
          { status: 500 }
        )
      })
];
