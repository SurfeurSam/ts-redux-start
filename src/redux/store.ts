import { configureStore } from "@reduxjs/toolkit";
import PostReducer from "./post.reducer";

const store = configureStore({
    reducer: {
        PostReducer,
    },
});

export default store;
