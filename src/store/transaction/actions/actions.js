import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";
const API_URL = "https://wallet.goit.ua/api";

// Получаем категории
export const transactionGetCategories = createAsyncThunk(
    "user/transactionGetCategories",
    async (_, { rejectWithValue }) => {
        try {
            const token = localStorage.getItem("token");
            const response = await axios({
                method: "get",
                url: `${API_URL}/transaction-categories`,
                headers: {
                    Authorization: token,
                },
            });

            return response.data;
        } catch (error) {
            if (error.response.statusCode === 400) {
                return rejectWithValue(toast.error("Validation error"));
            }
            if (error.response.status === 401) {
                return rejectWithValue(
                    toast.error("Bearer authorization failed")
                );
            }

            return rejectWithValue(toast.error("Server error"));
        }
    }
);

export const transactionGet = createAsyncThunk(
    "user/transactionGet",
    async (_, { rejectWithValue }) => {
        try {
            const token = localStorage.getItem("token");
            const response = await axios({
                method: "get",
                url: `${API_URL}/transactions`,
                headers: {
                    Authorization: token,
                },
            });

            return response.data;
        } catch (error) {
            if (error.response.statusCode === 400) {
                return rejectWithValue(toast.error("Validation error"));
            }
            if (error.response.status === 401) {
                return rejectWithValue(
                    toast.error("Bearer authorization failed")
                );
            }

            return rejectWithValue(toast.error("Server error"));
        }
    }
);

export const transactionPost = createAsyncThunk(
    "user/transactionPost",
    async ({ values }, { rejectWithValue }) => {
        try {
            const token = localStorage.getItem("token");
            const response = await axios({
                method: "post",
                url: `${API_URL}/transactions`,
                data: values,

                headers: {
                    Authorization: token,
                },
            });

            return response.data;
        } catch (error) {
            if (error.response.statusCode === 400) {
                return rejectWithValue(toast.error("Validation error"));
            }
            if (error.response.status === 401) {
                return rejectWithValue(
                    toast.error("Bearer authorization failed")
                );
            }
            if (error.response.status === 404) {
                return rejectWithValue(
                    toast.error("Transaction category not found")
                );
            }
            if (error.response.status === 409) {
                return rejectWithValue(
                    toast.error(
                        "Transaction category type does not match transaction type"
                    )
                );
            }
            return rejectWithValue(toast.error("Server error"));
        }
    }
);

export const transactionSummary = createAsyncThunk(
    "user/transactionSummary",
    async (_, { rejectWithValue }) => {
        try {
            const token = localStorage.getItem("token");
            const response = await axios({
                method: "get",
                url: `${API_URL}/transactions-summary`,
                headers: {
                    Authorization: token,
                },
            });

            return response.data;
        } catch (error) {
            if (error.response.statusCode === 400) {
                return rejectWithValue(toast.error("Validation error"));
            }
            if (error.response.status === 401) {
                return rejectWithValue(
                    toast.error("Bearer authorization failed")
                );
            }
            return rejectWithValue(toast.error("Server error"));
        }
    }
);

export const transactionSummaryPeriod = createAsyncThunk(
    "user/transactionSummaryPeriod",
    async ({ month, year }, { rejectWithValue }) => {
        try {
            const token = localStorage.getItem("token");
            const response = await axios({
                method: "get",
                url: `${API_URL}/transactions-summary?month=${month}&year=${year}`,
                headers: {
                    Authorization: token,
                },
            });

            return response.data;
        } catch (error) {
            if (error.response.statusCode === 400) {
                return rejectWithValue(toast.error("Validation error"));
            }
            if (error.response.status === 401) {
                return rejectWithValue(
                    toast.error("Bearer authorization failed")
                );
            }
            return rejectWithValue(toast.error("Server error"));
        }
    }
);
