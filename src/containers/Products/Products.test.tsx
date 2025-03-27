import { screen, waitFor } from '@testing-library/react';
import { renderWithProviders, handlerServer } from '../../utils/testUtils';
import Product from './Products';
import productsFixture from '../../api/handlers/_fixtures/products.json' ;
import { formatMoney } from '../../utils/utils';

describe("<Product />", () => {
    // Enable API mocking before tests.
    beforeAll(() => handlerServer.listen());

    // Reset any runtime request handlers we may add during the tests.
    afterEach(() => handlerServer.resetHandlers());

    // Disable API mocking after the tests are done.
    afterAll(() => handlerServer.close());

    it("renders card", async () => {
        renderWithProviders(<Product />)
        await waitFor(() => {
            expect(screen.queryByText(productsFixture[0].short_description)).toBeInTheDocument();
            expect(screen.queryByText(productsFixture[0].long_description)).toBeInTheDocument();
            expect(screen.queryByText(formatMoney(productsFixture[0].price))).toBeInTheDocument();

            expect(screen.queryByText(productsFixture[1].short_description)).toBeInTheDocument();
            expect(screen.queryByText(productsFixture[1].long_description)).toBeInTheDocument();
            expect(screen.queryByText(formatMoney(productsFixture[1].price))).toBeInTheDocument();
        })
    });
});
