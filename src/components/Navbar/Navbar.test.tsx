import { screen } from '@testing-library/react';
import { renderWithProviders, handlerServer } from '../../utils/testUtils';
import userFixture from '../../api/handlers/_fixtures/user.json' ;
import Navbar from './Navbar';

describe("<Navbar />", () => {
    // Enable API mocking before tests.
    beforeAll(() => handlerServer.listen());

    // Reset any runtime request handlers we may add during the tests.
    afterEach(() => handlerServer.resetHandlers());

    // Disable API mocking after the tests are done.
    afterAll(() => handlerServer.close());

    it("renders Nabvar", async () => {
        const initialUser = userFixture;
        renderWithProviders(<Navbar />, {
            preloadedState: {
                user: initialUser
            }
        }, ["/"])
        expect(screen.queryByText(/Ecommerce/i)).toBeInTheDocument();
        expect(screen.queryByText(/Ordenes/i)).toBeInTheDocument();
        // expect(screen.queryByText(/Iniciar sesion/i)).toBeInTheDocument();
    });
});
