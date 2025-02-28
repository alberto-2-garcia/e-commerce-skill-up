import { http, HttpResponse } from 'msw';
import productsFixture from './_fixtures/products.json';
import { PRODUCTS_PATH } from '../../constants/apiConstants';

export const productHandlers = [
    http.get(`${PRODUCTS_PATH}`, () => {
        return HttpResponse.json(productsFixture);
    }),
];
