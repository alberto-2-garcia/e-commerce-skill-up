import { useState, useCallback } from 'react'
import { styled, TextField, InputAdornment, Box } from '@mui/material';
import { useNavigate } from "react-router";
import SearchIcon from '@mui/icons-material/Search';

const StyledSearchBar = styled(TextField)(({ theme }) => ({
    // '& label.Mui-focused': {
    //   color: '#A0AAB4',
    // },
    '& .MuiInput-underline:after': {
      borderBottomColor: '#B2BAC2',
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: '#E0E3E7',
      },
      '&:hover fieldset': {
        borderColor: '#B2BAC2',
      },
      '&.Mui-focused fieldset': {
        borderColor: '#dcddde',
      },
      color: theme.palette.common.white
    },
}));

const StyledSearchIcon = styled(SearchIcon)(({ theme }) => ({
    color: theme.palette.common.white
}))

function NavbarSearchBar() {
    const navigate = useNavigate();

    const [searchTerm, setSearchTerm] = useState('');

    const searchProduct = useCallback(() => {
        navigate('/products');
    }, [navigate]);

    const handleOnChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target.value);
    }, []);

    return (
        <Box component="form" onSubmit={searchProduct}>
            <StyledSearchBar
                id="search-bar"
                placeholder="Buscar productos"
                variant="outlined"
                color="secondary"
                size="small"
                value={searchTerm}
                onChange={handleOnChange}
                slotProps={{
                    input: {
                        endAdornment: (
                        <InputAdornment position="end">
                            <StyledSearchIcon />
                        </InputAdornment>
                      ),
                    },
                }}
            />
        </Box>
    )
}

export default NavbarSearchBar;
