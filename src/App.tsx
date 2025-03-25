import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ThemeProvider } from '@mui/material';
import { theme } from "./theme";
import { Provider as StoreProvider } from 'react-redux';
import { store } from './store';
import Home from './containers/Home/Home';
import NotFound from './containers/NotFound/NotFound';
import Products from './containers/Products/Products';
import PurchaseOrders from './containers/PurchaseOrders/PurchaseOrders';
import ShoppingCart from './containers/ShoppingCart/ShoppingCart';
import SuccessfulPurchase from './containers/SuccessfulPurchase/SuccessfulPurchase';
import Login from './containers/Login/Login';
import SignUp from './containers/SignUp/SignUp';
import Profile from './containers/Profile/Profile';

const queryClient = new QueryClient();

function App() {
    return (
        <StoreProvider store={store}>
            <QueryClientProvider client={queryClient}>
                <ThemeProvider theme={theme}>
                    <BrowserRouter>
                        <Routes>
                            <Route path='/' element={<Home />} />
                            <Route path='/products' element={<Products />} />
                            <Route path='/purchase-orders' element={<PurchaseOrders />} />
                            <Route path='/shopping-cart' element={<ShoppingCart />} />
                            <Route path='/successful-purchase/:orderId' element={<SuccessfulPurchase />} />
                            <Route path='/login' element={<Login />} />
                            <Route path='/sign-up' element={<SignUp />} />
                            <Route path='/profile' element={<Profile />} />
                            <Route path="*" element={<NotFound />} />
                        </Routes>
                    </BrowserRouter>
                </ThemeProvider>
            </QueryClientProvider>
        </StoreProvider>
    )
}

export default App
