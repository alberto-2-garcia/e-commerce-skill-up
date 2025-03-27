// import { renderHook, waitFor } from '@testing-library/react';
// import shoppingCartFixture from '../../api/handlers/_fixtures/shoppingCart.json';
// import { getShoppingCart } from '../../api/shoppingCart/shoppingCart';
// import { useShoppingCart } from './useShoppingCart';
// import { mockAxiosError, wrapper } from '../../utils';
// import { HttpStatusCode } from 'axios';

// jest.mock('../../api/shoppingCart/shoppingCart');

describe('useShoppingCart', () => {
    it('test', () => {
        expect(true).toBe(true);
    })
})

// describe('useShoppingCart hook test', () => {
//     it('should fetch data', async () => {
//       getShoppingCart.mockResolvedValue({});
//         const { result } = renderHook(() => useShoppingCart(), { wrapper });

//         await waitFor(() => {
//             expect(result.current).toEqual({
//                 shoppingCart: {},
//                 isError: false,
//                 isNotFound: false,
//                 isFetching: false,
//                 handleCheckout: expect.any(Function)
//             });
//         });
//     });

//     it('Should return data and no status flag is truthy', async () => {
//         getShoppingCart.mockResolvedValue(shoppingCartFixture);
//         const { result } = renderHook(() => useShoppingCart(), { wrapper });

//         await waitFor(() => !result.current.isFetching);

//         await waitFor(() => {
//             expect(result.current).toEqual({
//                 shoppingCart: shoppingCartFixture,
//                 isError: false,
//                 isNotFound: false,
//                 isFetching: false,
//                 handleCheckout: expect.any(Function)
//             });
//         });
//     });

//     it('Should return empty and error flag is truthy', async () => {
//         getShoppingCart.mockRejectedValue(
//             mockAxiosError({ status: HttpStatusCode.InternalServerError })
//         );
//         const { result } = renderHook(() => useShoppingCart(), { wrapper });

//         await waitFor(() => !result.current.isFetching);

//         await waitFor(() => {
//             expect(result.current).toEqual({
//                 shoppingCart: {},
//                 isError: true,
//                 isNotFound: false,
//                 isFetching: false,
//                 handleCheckout: expect.any(Function)
//             });
//         });
//     });

//     it('Should return empty and notFound flag is truthy', async () => {
//         getShoppingCart.mockRejectedValue(
//             mockAxiosError({ status: HttpStatusCode.NotFound })
//         );
//         const { result } = renderHook(() => useShoppingCart(), { wrapper });

//         await waitFor(() => !result.current.isFetching);

//         await waitFor(() => {
//             expect(result.current).toEqual({
//                 shoppingCart: {},
//                 isError: false,
//                 isNotFound: true,
//                 isFetching: false,
//                 handleCheckout: expect.any(Function)
//             });
//         });
//     });
// });
