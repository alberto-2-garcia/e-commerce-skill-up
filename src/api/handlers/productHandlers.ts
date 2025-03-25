import { http, HttpResponse } from 'msw';
import productsFixture from './_fixtures/products.json';
import { PRODUCTS_PATH, PRODUCT_PATH } from '../../constants/apiConstants';

export const productHandlers = [
    http.get(`${PRODUCTS_PATH}`, () => {
        return HttpResponse.json(productsFixture);
    }),

    http.get(`${PRODUCT_PATH}`, ({ params }) => {
        const { productId } = params;
        const product = productsFixture.find(product => product.id.toString() === productId)!;
        console.log(product);
        return HttpResponse.json(product);
    }),
];
