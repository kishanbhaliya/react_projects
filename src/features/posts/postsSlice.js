import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';


export const fetchPosts = createAsyncThunk('posts/fetchPosts', async () => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
    return response.data;
});

export const addNewPost = createAsyncThunk('posts/addNewPost', async (newPost) => {
    const response = await axios.post('https://jsonplaceholder.typicode.com/posts', newPost);
    return response.data;
});


const postsSlice = createSlice({
    name: 'posts',
    initialState: { items: [], status: 'idle'},
    reducers: {
        postDeleted(state, action) {
            state.items = state.items.filter(post => post.id !== action.payload);
        },
    },
    extraReducers(builder) {
        builder
            .addCase(fetchPosts.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchPosts.fullfilled, (state, action) => {
                state.status = 'succeeded';
                state.items = action.payload;
            })
            .addCase(addNewPost.fullfilled, (state, action) => {
                state.items.unshift(action.payload);
            });
    }
});

export const { postDeleted } = postsSlice.actions;
export default postsSlice.reducers;