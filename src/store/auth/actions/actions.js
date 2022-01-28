import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";

const API_URL = "https://wallet.goit.ua/api";

export const signUpUser = createAsyncThunk(
    "users/signUp",
    async ({ username, email, password }, thunkAPI) => {
        try {
            const response = await axios({
                method: "POST",
                url: `${API_URL}/auth/sign-up`,
                data: {
                    username,
                    email,
                    password,
                },
            });

            let data = await response.data;

            console.log("data", data);

            if (response.status === 200) {
                localStorage.setItem("token", data.token);
                return { ...data, username: name, email: email };
            } else {
                return thunkAPI.rejectWithValue(data);
            }
        } catch (err) {
            if (err.response.status === 409) {
                return rejectWithValue(
                    toast.error("User with such email already exists")
                );
            }
            if (err.response.status === 400) {
                return rejectWithValue(toast.error("Validation error"));
            }
            return rejectWithValue(
                toast.error("Something went wrong. Please try again later")
            );
        }
    }
);
