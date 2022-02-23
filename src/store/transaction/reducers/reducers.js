import { createSlice } from "@reduxjs/toolkit";
import {
    transactionGet,
    transactionGetCategories,
    transactionPost,
    transactionSummary,
    transactionSummaryPeriod,
} from "../actions/actions";

const initialState = {
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
    summary: {
        categoriesSummary: [],
        incomeSummary: 0,
        expenseSummary: 0,
        year: 0,
        month: 0,
    },
};

export const transactionSlice = createSlice({
    name: "transaction",
    initialState,

    reducers: {
        clearTransactions: ( ) => initialState
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

        [transactionPost.rejected]: (state, { payload }) => {
            state.isError = true;
            state.errorMessage = payload.message;
        },

        [transactionGet.fulfilled]: (state, { payload }) => {
            state.isSuccess = true;
            state.transactions = [...payload];
        },

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

        [transactionSummary.fulfilled]: (state, { payload }) => {
            state.categoriesSummary = [payload.categoriesSummary];
            state.expenseSummary = payload.expenseSummary;
            state.incomeSummary = payload.incomeSummary;
            state.year = payload.year;
            state.month = payload.month;
        },
        [transactionSummary.rejected]: (state, { payload }) => {
            state.isError = true;
            state.errorMessage = payload.message;
        },

        [transactionSummaryPeriod.fulfilled]: (state, { payload }) => {
            state.categoriesSummary = payload.categoriesSummary;
            state.expenseSummary = payload.expenseSummary;
            state.incomeSummary = payload.incomeSummary;
            state.year = payload.year;
            state.month = payload.month;
        },
        [transactionSummaryPeriod.pending]: (state) => {},
        [transactionSummaryPeriod.rejected]: (state, { payload }) => {
            state.isError = true;
            state.errorMessage = payload.message;
        },
    },
});

export const { clearTransactions } = transactionSlice.actions;
export const transactionSelector = (state) => state.transaction;
