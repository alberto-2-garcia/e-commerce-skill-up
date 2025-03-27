import { screen } from '@testing-library/react';
import { renderWithProviders, handlerServer } from '../../../utils/testUtils';
import ProductCard from './ProductCard';
import productsFixture from '../../../api/handlers/_fixtures/products.json' ;
import { formatMoney } from '../../../utils/utils';

describe("<ProductCard />", () => {
    // Enable API mocking before tests.
    beforeAll(() => handlerServer.listen());

    // Reset any runtime request handlers we may add during the tests.
    afterEach(() => handlerServer.resetHandlers());

    // Disable API mocking after the tests are done.
    afterAll(() => handlerServer.close());

    it("renders card", () => {
        const product = productsFixture[0];
        renderWithProviders(<ProductCard {...product} />)
        expect(screen.queryByText(product.short_description)).toBeInTheDocument()
        expect(screen.queryByText(product.long_description)).toBeInTheDocument()
        expect(screen.queryByText(formatMoney(product.price))).toBeInTheDocument()
    });
});
