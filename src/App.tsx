import { BrowserRouter, Route, Routes } from 'react-router-dom'
import NotFound from './containers/NotFound/NotFound';
import Products from './containers/Products/Products';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <BrowserRouter>
                <Routes>
                    <Route path='/products' element={<Products />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </BrowserRouter>
        </QueryClientProvider>
    )
}

export default App
