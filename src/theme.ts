import { createTheme } from '@mui/material';

const WHITE = "#FFFFFF";

export const theme = createTheme({
    typography: {
        allVariants: {
            fontFamily: 'arial',
        },
    },
    palette: {
        text: {
            secondary: WHITE
        }
    }
});