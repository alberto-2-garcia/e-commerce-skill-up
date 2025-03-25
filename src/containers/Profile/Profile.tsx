import { useAppSelector, useAppDispatch } from '../../store';
import { useNavigate } from 'react-router-dom';
import { clearUserData } from '../../store/userSlice';
import { Box, Button, Container, Typography } from '@mui/material';
import Navbar from '../../components/Navbar/Navbar';
import { PageTitle } from '../../components/StyledComponents/StyledComponents';

function Profile() {
    const { user, email, name } = useAppSelector(
        (state) => state.user
    );

    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const handleLogout = () => {
        dispatch(clearUserData());
        navigate('/');
    };

    return (
        <Box>
            <Navbar />
            <Container maxWidth='xl'>
                <PageTitle variant='h4'>Perfil</PageTitle>
                <Typography>Usuario: {user}</Typography>
                <Typography>Nombre: {name}</Typography>
                <Typography>Correo: {email}</Typography>
                <Button variant="contained" onClick={handleLogout}>Cerrar sesión</Button>
            </Container>
        </Box>
    )
}

export default Profile;