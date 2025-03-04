import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './containers/Home/Home';
import NotFound from './containers/NotFound/NotFound';
import Products from './containers/Products/Products';
import PurchaseOrders from './containers/PurchaseOrders/PurchaseOrders';
import ShoppingCart from './containers/ShoppingCart/ShoppingCart';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ThemeProvider } from '@mui/material';
import { theme } from "./theme";

const queryClient = new QueryClient();

function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <ThemeProvider theme={theme}>
                <BrowserRouter>
                    <Routes>
                        <Route path='/' element={<Home />} />
                        <Route path='/products' element={<Products />} />
                        <Route path='/purchase-orders' element={<PurchaseOrders />} />
                        <Route path='/shopping-cart' element={<ShoppingCart />} />
                        <Route path="*" element={<NotFound />} />
                    </Routes>
                </BrowserRouter>
            </ThemeProvider>
        </QueryClientProvider>
    )
}

export default App
