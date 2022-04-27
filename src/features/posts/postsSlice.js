import {createSlice} from "@reduxjs/toolkit";
import {nanoid} from '@reduxjs/toolkit'
import {sub} from 'date-fns'

const initialState = [
    {id: '1', title: 'First Post', content: 'Hello', date: sub(new Date(), {minutes: 10}).toISOString()},
    {id: '2', title: 'Second Post', content: 'More text', date: sub(new Date(), {minutes: 5}).toISOString()},
];

const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        reactionAdded(state, action) {
            const {postId, reaction} = action.payload
            const existingPost = state.find(post => post.id === postId)
            if (existingPost) {
                existingPost.reactions[reaction]++
            }
        },
        postAdded(state, action) {
            state.push(action.payload)
        },
        prepare(title, content, userId) {
            return {
                payload: {
                    id: nanoid(),
                    title,
                    content,
                    user: userId,
                    date: sub(new Date(), {minutes: new Date().getMinutes()}).toISOString()
                }
            }
        },
        postUpdated(state, action) {
            const {id, title, content} = action.payload
            const existingPost = state.find(post => post.id === id)
            if (existingPost) {
                existingPost.title = title
                existingPost.content = content
            }
        },
    },
});

export const {postAdded, postUpdated} = postsSlice.actions

export default postsSlice.reducer;
