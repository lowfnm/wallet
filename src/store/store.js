import { configureStore } from "@reduxjs/toolkit";
import { userSlice } from "./auth/reducers/reducers";

export default configureStore({
    reducer: {
        user: userSlice.reducer,
    },
});
