import { Box, Container } from '@mui/material';
import Navbar from '../../components/Navbar/Navbar';
import { PageTitle } from '../../components/StyledComponents/StyledComponents'


function Home() {
    return (
        <Box>
        <Navbar />
            <Container maxWidth='xl'>
                <PageTitle variant='h4'>Home</PageTitle>
            </Container>
        </Box>
    )
}

export default Home;
