import { Box, Container, CircularProgress, Stack } from '@mui/material';
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
                    <Stack direction="column" spacing={4}>
                        {purchaseOrders.map(po => (
                            <PurchaseOrderCard
                                key={po.purchase_order_id}
                                {...po}
                            />
                        ))}
                    </Stack>
                </>
                }
            </Container>
        </Box>
    )
}

export default PurchaseOrders;
