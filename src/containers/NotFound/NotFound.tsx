import { Box, Typography } from '@mui/material';

const NotFound = () => {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <Typography variant="h4" color="text.secondary">
        404 - Page Not Found
      </Typography>
    </Box>
  );
};

export default NotFound;
