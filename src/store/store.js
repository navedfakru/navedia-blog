import {configureStore} from '@reduxjs/toolkit';
import themeSlice from './themeSlice';
import authSlice from './authSlice';
import postsSlice from './postsSlice'

const store = configureStore({
    reducer: {
        theme : themeSlice,
        auth: authSlice,
        posts: postsSlice
        //TODO: add more slices here for posts
    }
});


export default store;