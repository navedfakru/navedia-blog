import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    allPosts: []
}
 
const postsSlice = createSlice({
    name: "posts",
    initialState,
    reducers: {
        setPosts: (state, action) => {
            state.allPosts = action.payload;
        }
     }
})

export const {setPosts} = postsSlice.actions;

export default postsSlice.reducer;