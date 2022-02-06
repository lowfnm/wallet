import { configureStore } from "@reduxjs/toolkit";
import { userSlice } from "./auth/reducers/reducers";
import { transactionSlice } from "./transaction/reducers/reducers";

export default configureStore({
    reducer: {
        user: userSlice.reducer,
        transaction: transactionSlice.reducer,
    },
});
