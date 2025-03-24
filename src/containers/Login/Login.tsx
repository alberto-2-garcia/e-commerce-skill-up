import { useState, SyntheticEvent } from 'react';
import { Paper, Typography, Link, Stack } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import LoginForm from './LoginForm/LoginForm';

const Login = () => {
    const navigate = useNavigate();

    const [values, setValues] = useState({ email: '', password: '' });
    const [errors, setErrors] = useState({ email: '', password: '' });

    const handleChange = (e: SyntheticEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setValues((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: SyntheticEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log('onSubmit')
    };

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
        </Stack>
    );
};

export default Login;
