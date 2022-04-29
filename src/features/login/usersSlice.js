import {createSlice} from '@reduxjs/toolkit'

let initialState = [{
    id: '',
    name: '',
    email: '',
    first_name: '',
    last_name: '',
    username: '',
    phone: '',
    company: {},
}];

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        loggedInUser(state, action) {
            state[0] = (action.payload);
        },
    }
})

export const {loggedInUser} = usersSlice.actions

export default usersSlice.reducer
