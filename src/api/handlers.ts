import { productHandlers } from './handlers/productHandlers';
import { shoppingCartHandlers } from './handlers/shoppingCartHandlers';
import { purchaseOrdersHandlers } from './handlers/purchaseOrderHandler';
import { userHandlers } from './handlers/userHandlers';

export const handlers = [
    ...productHandlers,
    ...shoppingCartHandlers,
    ...purchaseOrdersHandlers,
    ...userHandlers
];
