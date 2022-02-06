import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";

const API_URL = "https://wallet.goit.ua/api";

export const transactionPost = createAsyncThunk(
    "user/transaction",
    async ({ amount, comment }, { rejectWithValue }) => {
        const token = localStorage.getItem("token");
        try {
            const response = await axios({
                method: "post",
                url: `${API_URL}/transactions`,
                data: {
                    amount,
                    comment,
                },
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
