import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    user: '',
    email: '',
    name: '',
    accessToken: '',
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUserData: (_, action) => {
            return action.payload;
        },
        clearUserData: () => initialState,
    },
});

export const { setUserData, clearUserData } = userSlice.actions;
export default userSlice.reducer;
