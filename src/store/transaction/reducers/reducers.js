import { createSlice } from "@reduxjs/toolkit";
import { transactionPost } from "../actions/actions";

export const transactionSlice = createSlice({
    name: "transaction",
    initialState: {
        id: "",
        transactionDate: "",
        type: "",
        categoryId: "",
        userId: "",
        comment: "",
        amount: 0,
        balanceAfter: 0,
        isSuccess: false,
        isError: false,
        errorMessage: "",
    },
    reducers: {
        clearState: (state) => {
            state.isError = false;
            state.isSuccess = false;

            return state;
        },
    },
    extraReducers: {
        [transactionPost.fulfilled]: (state, { payload }) => {
            state.isSuccess = true;
            state.transactionDate = payload.transactionDate;
            state.type = payload.type;
            state.userId = payload.userId;
            state.categoryId = payload.categoryId;
            state.comment = payload.comment;
            state.amount = payload.amount;
            state.id = payload.id;
            state.balance = payload.balance;
        },
        [transactionPost.pending]: (state) => {},
        [transactionPost.rejected]: (state, { payload }) => {
            state.isError = true;
            state.errorMessage = payload.message;
        },
    },
});

export const { clearState } = transactionSlice.actions;
export const userSelector = (state) => state.user;
