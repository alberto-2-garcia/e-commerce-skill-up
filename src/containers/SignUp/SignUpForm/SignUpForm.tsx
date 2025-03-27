import { FormEventHandler, ChangeEventHandler } from 'react';
import { Box, TextField, Stack } from '@mui/material';
import { LoadingButton } from '@mui/lab';
import { SignUpFormValues } from '../../../constants/userTypes';

type SignUpFormProps = {
    values: SignUpFormValues,
    errors: SignUpFormValues;
    onChange: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
    onSubmit: FormEventHandler<HTMLFormElement>;
    isLoading: boolean;
}

const SignUpForm = ({
  values,
  errors,
  onChange,
  onSubmit,
  isLoading,
}: SignUpFormProps) => {
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

                <TextField
                    label="Confirmar contraseña"
                    variant="outlined"
                    name="confirmPassword"
                    type="password"
                    value={values.confirmPassword}
                    onChange={onChange}
                    error={Boolean(errors.confirmPassword)}
                    helperText={errors.confirmPassword}
                    fullWidth
                    sx={{
                        '& .MuiOutlinedInput-root': {
                            borderRadius: '12px',
                        },
                    }}
                />

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
                    loadingIndicator="Creando cuenta"
                >
                    Crear cuenta
                </LoadingButton>
            </Stack>
        </Box>
    );
};

export default SignUpForm;
