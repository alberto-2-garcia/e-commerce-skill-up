import { Container, Typography, styled, Stack, Box } from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';
import { Link, useParams } from "react-router-dom";
import Navbar from '../../components/Navbar/Navbar';
import usePurchaseOrders from '../../hooks/usePurchaseOrders/usePurchaseOrders';

const SuccessfullPurchaseContainer = styled(Box)(({ theme })=> ({
    marginLeft: theme.spacing(16),
    marginRight: theme.spacing(16),
    padding: theme.spacing(4),
    border: '1px solid',
    borderColor: theme.palette.success.main,
    borderRadius: theme.spacing(1),
    marginTop: theme.spacing(4)
}));

const ProductImage = styled('div')<{ src: string; alt: string; loading: string; }>(({ src }) => ({
    background: `url('${src}')`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    width: '4rem',
    height: '4rem',
  }));

function SuccessfulPurchase() {
    const { orderId } = useParams();

    const { purchaseOrder } = usePurchaseOrders();
    const { products } = purchaseOrder;

    return (
        <Box>
            <Navbar />
            <Container maxWidth="md">
                <SuccessfullPurchaseContainer>
                    <Stack direction="row">
                        <CheckIcon color='success' />
                        <Box sx={{ paddingLeft: 1 }}>
                            <Typography color='success'>Gracias por su compra!</Typography>
                            <Typography>Por favor checar su correo para la confirmación de la orden</Typography>
                            <Typography sx={{ fontWeight: 'bold' }}>Número de orden: #{orderId}</Typography>
                            <Link to="/purchase-orders"><Typography>Revisar sus ordenes</Typography></Link>
                            <Typography>Productos:</Typography>
                            <Stack direction="row">
                                {products.map(product => (
                                    <Box key={product.id}>
                                        <ProductImage
                                            src={product.product_images[0].url}
                                            alt={product.short_description}
                                            loading="lazy"
                                        />
                                    </Box>
                                ))}
                            </Stack>
                        </Box>
                    </Stack>
                </SuccessfullPurchaseContainer>
            </Container>
        </Box>
    );
}

export default SuccessfulPurchase;
