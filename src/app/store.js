import {configureStore} from '@reduxjs/toolkit'

import postsReducer from '../features/posts/postsSlice'
import usersReducer from '../features/login/usersSlice'
import productReducer from '../features/products/productsSlice'

export default configureStore({
    reducer: {
        posts: postsReducer,
        users: usersReducer,
        products: productReducer
    },
})
