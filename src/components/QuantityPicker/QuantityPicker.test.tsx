import { screen, render } from '@testing-library/react';
import QuantityPicker from './QuantityPicker';

describe("<QuantityPicker />", () => {
    it("renders quantity picker", async () => {
        const quantityPickerProps = {
            quantity: 1,
            decreaseQuantity: jest.fn(),
            increaseQuantity: jest.fn(),
        }
        render(<QuantityPicker {...quantityPickerProps} />)
        expect(screen.queryByText('1')).toBeInTheDocument();
    });
});
