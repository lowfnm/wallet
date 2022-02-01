import { createSlice } from "@reduxjs/toolkit";
import {
    signInUser,
    signUpUser,
    signOutUser,
    currentUser,
} from "../actions/actions";

export const userSlice = createSlice({
    name: "user",
    initialState: {
        id: "",
        balance: 0,
        username: "",
        email: "",
        isAuth: false,
        isSuccess: false,
        isError: false,
        errorMessage: "",
    },
    reducers: {
        clearState: (state) => {
            state.isError = false;
            state.isSuccess = false;
            state.isAuth = false;

            return state;
        },
    },
    extraReducers: {
        [currentUser.fulfilled]: (state, { payload }) => {
            state.isAuth = true;
            state.isSuccess = true;
            state.email = payload.email;
            state.username = payload.username;
            state.id = payload.id;
            state.balance = payload.balance;
        },
        [currentUser.pending]: (state) => {
            state.isAuth = true;
        },
        [currentUser.rejected]: (state, { payload }) => {
            state.isAuth = false;
            state.isError = true;
            state.errorMessage = payload.message;
        },

        [signInUser.fulfilled]: (state, { payload }) => {
            state.isAuth = true;
            state.isSuccess = true;
            state.email = payload.user.email;
            state.username = payload.user.username;
            state.id = payload.user.id;
            state.balance = payload.user.balance;
        },
        [signInUser.pending]: (state) => {
            state.isAuth = false;
        },
        [signInUser.rejected]: (state, { payload }) => {
            state.isAuth = false;
            state.isError = true;
            state.errorMessage = payload.message;
        },

        [signUpUser.fulfilled]: (state, { payload }) => {
            state.isAuth = true;
            state.isSuccess = true;
            state.email = payload.user.email;
            state.username = payload.user.username;
            state.id = payload.user.id;
            state.balance = payload.user.balance;
        },
        [signUpUser.pending]: (state) => {
            state.isAuth = false;
        },
        [signUpUser.rejected]: (state, { payload }) => {
            state.isAuth = false;
            state.isError = true;
            state.errorMessage = payload.message;
        },

        [signOutUser.fulfilled]: (state) => {
            state.email = "";
            state.username = "";
            state.id = "";
            state.balance = 0;
            state.isAuth = false;
            state.isSuccess = true;
        },
        [signOutUser.pending]: (state) => {
            state.isAuth = false;
        },
        [signOutUser.rejected]: (state, { payload }) => {
            state.isAuth = false;
            state.isError = true;
            state.errorMessage = payload.message;
        },
    },
});

export const { clearState } = userSlice.actions;
export const userSelector = (state) => state.user;
