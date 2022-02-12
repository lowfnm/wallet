import { createSlice } from "@reduxjs/toolkit";
import {
    transactionDelete,
    transactionGet,
    transactionGetCategories,
    transactionPost,
} from "../actions/actions";

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
        categoriesArray: [],
        transactions: [],
    },
    reducers: {
        clearState: (state) => {
            state.isError = false;
            state.isSuccess = false;

            return state;
        },
        // removeTransaction: (state, action) => {
        //     state.transactions = state.transactions.filter(
        //         (transaction) => transaction.id !== action.payload
        //     );
        // },
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
            state.balanceAfter = payload.balanceAfter;
        },
        [transactionPost.pending]: (state) => {},
        [transactionPost.rejected]: (state, { payload }) => {
            state.isError = true;
            state.errorMessage = payload.message;
        },

        [transactionGet.fulfilled]: (state, { payload }) => {
            state.isSuccess = true;
            state.transactions = [...payload];
        },
        [transactionGet.pending]: (state) => {},
        [transactionGet.rejected]: (state, { payload }) => {
            state.isError = true;
            state.errorMessage = payload.message;
        },

        [transactionGetCategories.fulfilled]: (state, { payload }) => {
            state.isSuccess = true;
            state.categoriesArray = [...payload];
        },
        [transactionGetCategories.pending]: (state) => {},
        [transactionGetCategories.rejected]: (state, { payload }) => {
            state.isError = true;
            state.errorMessage = payload.message;
        },

        [transactionDelete.fulfilled]: (state, { payload }) => {
            state.isSuccess = true;
            state.transactions = state.transactions.id === "";
        },
        [transactionDelete.pending]: (state) => {},
        [transactionDelete.rejected]: (state, { payload }) => {
            state.isError = true;
            state.errorMessage = payload.message;
        },
    },
});

export const { clearState, removeTransaction } = transactionSlice.actions;
export const transactionSelector = (state) => state.transaction;
