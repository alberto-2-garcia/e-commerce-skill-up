import { useState, SyntheticEvent, ChangeEvent, useEffect } from 'react';
import { Paper, Typography, Link, Stack, Snackbar, Alert } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import LoginForm from './LoginForm/LoginForm';
import { LoginFormValues } from '../../constants/userTypes';
import useUser from '../../hooks/useUser/useUser';

const initialLoginValues: LoginFormValues = {
    email: '',
    password: ''
}

const Login = () => {
    const navigate = useNavigate();

    const { login, loginState } = useUser();
    const { isSuccess, isError } = loginState;

    const [values, setValues] = useState<LoginFormValues>(initialLoginValues);
    const [errors, setErrors] = useState<LoginFormValues>(initialLoginValues);
    const [openSnackbar, setOpenSnackbar] = useState<boolean>(false);

    const handleCloseSnackbar = () => {
        setOpenSnackbar(false);
    }

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setValues((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: SyntheticEvent<HTMLFormElement>) => {
        e.preventDefault();
        login({ email: values.email, password: values.password });
    };

    useEffect(() => {
        if (isSuccess) {
            navigate('/');
        }
        if (isError) {
            setOpenSnackbar(true);
        }
      }, [isSuccess, isError, navigate]);   

    return (
        <Stack direction="column" alignItems="center" justifyContent="center" sx={{ height: '90vh' }}>
            <Typography variant="body2" mb={3} color="text.primary">
                <Link href="/" underline="hover">
                    Regresa a la página principal
                </Link>
            </Typography>
            <Paper
                elevation={3}
                sx={{
                    p: 4,
                    minWidth: 360,
                    maxWidth: 420,
                    width: '100%',
                    borderRadius: 4,
                    textAlign: 'center',
                }}
            >
                <Typography variant="h5" mb={1} fontWeight={600}>
                    Entra a tu cuenta
                </Typography>
                <Typography variant="body2" mb={3} color="text.primary">
                    No tienes una cuenta?{' '}
                    <Link href="/sign-up" underline="hover">
                        Crea una
                    </Link>
                </Typography>

                <LoginForm
                    values={values}
                    errors={errors}
                    onChange={handleChange}
                    onSubmit={handleSubmit}
                    isLoading={false}
                />
            </Paper>
            <Snackbar
                anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
                open={openSnackbar}
                onClose={handleCloseSnackbar}
            >
                <Alert severity='error'>Hubo un error al iniciar sesión</Alert>
            </Snackbar>
        </Stack>
    );
};

export default Login;
