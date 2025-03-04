import { Box, Container } from '@mui/material';
import Navbar from '../../components/Navbar/Navbar';
import { PageTitle } from '../../components/StyledComponents/StyledComponents'


function PurchaseOrders() {
    return (
        <Box>
        <Navbar />
            <Container maxWidth='xl'>
                <PageTitle variant='h4'>Pedidos</PageTitle>
            </Container>
        </Box>
    )
}

export default PurchaseOrders;
