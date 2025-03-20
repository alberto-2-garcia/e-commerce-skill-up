import { useState } from 'react'
import { styled, TextField, InputAdornment, Box } from '@mui/material';
import { useNavigate } from "react-router-dom";
import SearchIcon from '@mui/icons-material/Search';

const StyledSearchBar = styled(TextField)({
    '& label.Mui-focused': {
      color: '#A0AAB4',
    },
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
        borderColor: '#6F7E8C',
      },
    },
  });

function NavbarSearchBar() {
    const navigate = useNavigate();

    const [searchTerm, setSearchTerm] = useState('');

    const searchProduct = () => {
        navigate('/products');
    }

    const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target.value);
    }

    return (
        <Box component="form" onSubmit={searchProduct}>
            <StyledSearchBar
                id="search-bar"
                placeholder="Busca un product"
                variant="outlined"
                size="small"
                value={searchTerm}
                onChange={handleOnChange}
                slotProps={{
                    input: {
                        endAdornment: (
                        <InputAdornment position="end">
                          <SearchIcon />
                        </InputAdornment>
                      ),
                    },
                }}
            />
        </Box>
    )
}

export default NavbarSearchBar;
