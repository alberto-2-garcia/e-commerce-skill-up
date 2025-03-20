import { productHandlers } from './handlers/productHandlers';
import { shoppingCartHandlers } from './handlers/shoppingCartHandlers';
import { purchaseOrdersHandlers } from './handlers/purchaseOrderHandler';

export const handlers = [...productHandlers, ...shoppingCartHandlers, ...purchaseOrdersHandlers];
