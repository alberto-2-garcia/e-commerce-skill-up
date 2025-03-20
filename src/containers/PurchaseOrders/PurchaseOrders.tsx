import { Box, Container, CircularProgress } from '@mui/material';
import Navbar from '../../components/Navbar/Navbar';
import { PageTitle } from '../../components/StyledComponents/StyledComponents'
import usePurchaseOrders from '../../hooks/usePurchaseOrders/usePurchaseOrders';
import PurchaseOrderCard from './PurchaseOrderCard/PurchaseOrderCard';


function PurchaseOrders() {
    const { purchaseOrders, isFetching } = usePurchaseOrders({ purchase_order_id: null });
    return (
        <Box>
            <Navbar />
            <Container maxWidth='xl'>
                <PageTitle variant='h4'>Pedidos</PageTitle>
                {isFetching
                ? <CircularProgress />
                : 
                <>
                    {purchaseOrders.map(po => (
                        <PurchaseOrderCard
                            key={po.purchase_order_id}
                            {...po}
                        />
                    ))}
                </>
                }
            </Container>
        </Box>
    )
}

export default PurchaseOrders;
