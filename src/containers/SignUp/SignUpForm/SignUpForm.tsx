import { FormEventHandler, ChangeEventHandler } from 'react';
import { Box, TextField, Stack, Link } from '@mui/material';
import { LoadingButton } from '@mui/lab';

type SignUpValues = {
    email: string; password: string
}

type SignUpFormProps = {
    values: SignUpValues,
    errors: SignUpValues;
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
