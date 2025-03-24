import { FormEventHandler, ChangeEventHandler } from 'react';
import { Box, TextField, Stack, Link } from '@mui/material';
import { LoadingButton } from '@mui/lab';
import { LoginFormValues } from '../../../constants/userTypes';

type LoginFormProps = {
    values: LoginFormValues,
    errors: LoginFormValues;
    onChange: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
    onSubmit: FormEventHandler<HTMLFormElement>;
    isLoading: boolean;
}

const LoginForm = ({
  values,
  errors,
  onChange,
  onSubmit,
  isLoading,
}: LoginFormProps) => {
  return (
    <Box component="form" onSubmit={onSubmit} noValidate>
        <Stack spacing={3}>
            <TextField
                label="Correo electronico"
                variant="outlined"
                name="email"
                value={values.email}
                onChange={onChange}
                error={Boolean(errors.email)}
                helperText={errors.email}
                fullWidth
                sx={{
                    '& .MuiOutlinedInput-root': {
                        borderRadius: '12px',
                    },
                }}
            />

            <TextField
                label="Contraseña"
                variant="outlined"
                name="password"
                type="password"
                value={values.password}
                onChange={onChange}
                error={Boolean(errors.password)}
                helperText={errors.password}
                fullWidth
                sx={{
                    '& .MuiOutlinedInput-root': {
                        borderRadius: '12px',
                    },
                }}
            />

            <Box display="flex" justifyContent="flex-end">
                <Link href="#" underline="hover" variant="body2">
                    Se te olvidó tu contraseña?
                </Link>
            </Box>

            <LoadingButton
                variant="contained"
                type="submit"
                size="large"
                fullWidth
                sx={{
                    borderRadius: '12px',
                    py: 1.2,
                    textTransform: 'none',
                    fontWeight: '600',
                }}
                loading={isLoading}
                loadingIndicator="Iniciando sesión"
            >
                Inicia sesión
            </LoadingButton>
        </Stack>
    </Box>
  );
};

export default LoginForm;
