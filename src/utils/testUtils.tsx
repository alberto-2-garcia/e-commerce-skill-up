import React, { PropsWithChildren } from 'react'
import { setupServer } from 'msw/node';
import { render } from '@testing-library/react'
import { Provider } from 'react-redux'
import type { RenderOptions } from '@testing-library/react'
import { MemoryRouter, Route, Routes } from "react-router";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { AppStore, RootState, setupStore } from '../store';
import { handlers } from '../api/handlers';

export const handlerServer = setupServer(...handlers);
export const queryClient = new QueryClient();

interface ExtendedRenderOptions extends Omit<RenderOptions, 'queries'> {
    preloadedState?: Partial<RootState>
    store?: AppStore
  }

export function renderWithProviders(
    ui: React.ReactElement,
    {
        preloadedState = {},
        // Automatically create a store instance if no store was passed in
        store = setupStore(preloadedState),
        ...renderOptions
      }: ExtendedRenderOptions = {},
    initialEntries: string[] = ["/"]
) {
    // const {
    //     preloadedState = {},
    //     // Automatically create a store instance if no store was passed in
    //     store = setupStore(preloadedState),
    //     ...renderOptions
    // } = extendedRenderOptions;

    let testHistory, testLocation;
  
    const Wrapper = ({ children }: PropsWithChildren) => (
        <Provider store={store}>
            <QueryClientProvider client={queryClient}>
                <MemoryRouter initialEntries={initialEntries}>
                    <Routes>
                        <Route
                            path="*"
                            element={children}
                        />
                    </Routes>
                </MemoryRouter>
            </QueryClientProvider>
        </Provider>
    )
  
    // Return an object with the store and all of RTL's query functions
    return {
        store,
        testHistory,
        testLocation,
        ...render(ui, { wrapper: Wrapper, ...renderOptions })
    }
}

