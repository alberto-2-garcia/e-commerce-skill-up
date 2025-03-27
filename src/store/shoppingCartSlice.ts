import { createSlice } from '@reduxjs/toolkit';
import { ShoppingCartSlice, ShoppingCartProductSlice } from '../constants/shoppingCartTypes';

const initialState: ShoppingCartSlice = {
    shopping_cart_id: 12,
    user_id: '',
    products: []
};

function editProductHelperFunction(products: ShoppingCartProductSlice[], payload: ShoppingCartProductSlice) {
    return products.map(product => product.id === payload.id ? payload : product)
}

const shoppingCartSlice = createSlice({
  name: 'shoppingCart',
  initialState,
  reducers: {
    setShoppingCart: (_, action) => {
      return action.payload;
    },
    addProduct: (state, action) => {
        const currProduct = state.products.find(pro => pro.id === action.payload.id);
        return {
            ...state,
            products: currProduct
                ? editProductHelperFunction(state.products, { ...action.payload, quantity: action.payload.quantity + currProduct.quantity})
                : [...state.products, action.payload]
        }
    },
    editProduct: (state, action) => {
        return {...state, products: editProductHelperFunction(state.products, action.payload)};
    },
    eraseProduct: (state, action) => {
        return {...state, products: state.products.filter(product => product.id !== action.payload.id)}
    },
    clearShoppingCart: () => initialState,
  },
});

export const { setShoppingCart, clearShoppingCart, addProduct, editProduct, eraseProduct } = shoppingCartSlice.actions;
export default shoppingCartSlice.reducer;
