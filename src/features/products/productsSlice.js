import {createSlice} from '@reduxjs/toolkit'

let initialState = [{
    "id": "",
    "amount": "",
    "normalAmount": "",
    "stock": "",
    "description": "",
    "endDate": "",
    "suggestedProductName": "",
    "state": "",
    "company": {},
    "product": {}
}];

const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        addProduct(state, action) {
            state.push(action.payload)
        },
        clearProduct(state, action) {
            state = [];
        },
        updateProduct(state, action) {
            const {id, title, content} = action.payload
            const existingPost = state.find(post => post.id === id)
            if (existingPost) {
                existingPost.title = title
                existingPost.content = content
            }
        },
    }
})

export const {addProduct, updateProduct, clearProduct} = productsSlice.actions

export default productsSlice.reducer
