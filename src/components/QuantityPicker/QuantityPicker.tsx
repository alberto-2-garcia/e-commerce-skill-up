import { useState } from "react";
import { IconButton, Stack, Typography } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import DeleteIcon from '@mui/icons-material/Delete';

type QuantityPickerHook = {
    quantity: number;
    decreaseQuantity: () => void;
    increaseQuantity: () => void;
}

type QuantityPickerProps = QuantityPickerHook & {
    disableDecrease?: boolean;
    disableIncrease?: boolean;
    changeDecreaseIcon?: boolean;
}

export function useQuantityPicker({ quantityDefault=1 }): QuantityPickerHook {
    const [quantity, setQuantity] = useState<number>(quantityDefault);
    const increaseQuantity = () => {
        setQuantity(quantity => quantity+1);
    }

    const decreaseQuantity = () => {
        if (quantity > 1) {
            setQuantity(quantity => quantity-1);
        }
    }

    return {
        quantity, decreaseQuantity, increaseQuantity
    }
}

function QuantityPicker({
    decreaseQuantity,
    quantity,
    increaseQuantity,
    disableDecrease=false,
    disableIncrease=false,
    changeDecreaseIcon=false
}: QuantityPickerProps) {
    return (
        <Stack direction="row" spacing={2} alignItems="center">
            <IconButton disabled={disableDecrease} onClick={decreaseQuantity}>
                {changeDecreaseIcon
                    ? <DeleteIcon />
                    : <RemoveIcon />
                }
            </IconButton>
            <Typography>{quantity}</Typography>
            <IconButton disabled={disableIncrease} onClick={increaseQuantity}><AddIcon /></IconButton>
        </Stack>
    );
}

export default QuantityPicker;
