import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";

const API_URL = "https://wallet.goit.ua/api";

export const currentUser = createAsyncThunk(
    "user/currentUser",
    async (_, { rejectWithValue }) => {
        const token = localStorage.getItem("token");

        if (token === null) {
            return rejectWithValue(toast());
        }
        try {
            const response = await axios({
                method: "get",
                url: `${API_URL}/users/current`,
                headers: {
                    Authorization: token,
                },
            });

            return response.data;
        } catch (error) {
            if (error.response.statusCode === 401) {
                return rejectWithValue(toast.error("Bearer auth failed"));
            }
            return rejectWithValue(toast.error("Server error"));
        }
    }
);

export const signInUser = createAsyncThunk(
    "user/signInUser",
    async ({ email, password }, { rejectWithValue }) => {
        try {
            const response = await axios({
                method: "post",
                url: `${API_URL}/auth/sign-in`,
                data: {
                    email,
                    password,
                },

            });
            localStorage.setItem("token", response.data.token);

            return response.data;
        } catch (error) {
            if (error.response.statusCode === 400) {
                return rejectWithValue(toast.error("Validation error"));
            }
            if (error.response.status === 403) {
                return rejectWithValue(
                    toast.error("Provided password is incorrect")
                );
            }
            if (error.response.status === 404) {
                return rejectWithValue(
                    toast.error("User with such email not found")
                );
            }
            return rejectWithValue(toast.error("Server error"));
        }
    }
);

export const signUpUser = createAsyncThunk(
    "user/signUpUser",
    async ({ username, email, password }, { rejectWithValue }) => {
        try {
            const response = await axios({
                method: "post",
                url: `${API_URL}/auth/sign-up`,
                data: {
                    username,
                    email,
                    password,
                },
            });

            localStorage.setItem("token", response.data.token);

            return response.data;
        } catch (error) {
            if (error.response.statusCode === 400) {
                return rejectWithValue(toast.error("Validation error"));
            }
            if (error.response.status === 409) {
                return rejectWithValue(
                    toast.error("User with such email already exists")
                );
            }
            return rejectWithValue(toast.error("Server error"));
        }
    }
);

export const signOutUser = createAsyncThunk(
    "user/singOutUser",
    async (_, { rejectWithValue }) => {
        try {
            const token = localStorage.getItem("token");
            await axios({
                method: "delete",
                url: `${API_URL}/auth/sign-out`,
                headers: {
                    Authorization: token,
                },
            });

            localStorage.removeItem("token");
        } catch (error) {
            return rejectWithValue(error);
        }
    }
);
