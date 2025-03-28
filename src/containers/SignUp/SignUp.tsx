import { useState, SyntheticEvent, ChangeEvent } from 'react';
import { Paper, Typography, Link, Stack } from '@mui/material';
import SignUpForm from './SignUpForm/SignUpForm';
import { SignUpFormValues } from '../../constants/userTypes';

const initialSignUpValues: SignUpFormValues = {
    email: '',
    password: '',
    confirmPassword: '',
    name: ''
}

const SignUp = () => {
    const [values, setValues] = useState<SignUpFormValues>(initialSignUpValues);
    const [errors] = useState<SignUpFormValues>(initialSignUpValues);

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
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
                    Crea tu cuenta
                </Typography>
                <Typography variant="body2" mb={3} color="text.primary">
                    Ya tienes una cuenta?{' '}
                    <Link href="/login" underline="hover">
                        Inicia sesión
                    </Link>
                </Typography>

                <SignUpForm
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

export default SignUp;
