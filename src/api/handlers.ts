import { productHandlers } from './handlers/productHandlers';
import { shoppingCartHandlers } from './handlers/shoppingCartHandlers';
// import { shoppingCartHandlers } from './shoppingCart/shoppingCartHandlers';
// import { loginHandlers } from './login/handlers';
// import { registrationHandlers } from './registration/registrationHandlers';

// export const handlers = [...productHandlers, ...loginHandlers, ...registrationHandlers, ...shoppingCartHandlers];
export const handlers = [...productHandlers, ...shoppingCartHandlers];
