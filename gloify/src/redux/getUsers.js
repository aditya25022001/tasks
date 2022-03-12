import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const getUsersAction = createAsyncThunk(
    "user/getUsers",
    async(id,{rejectWithValue}) => {
        const config = {
            headers:{
                'AuthToken' : 'UrM4YHgb1FcqEf1tuKwmAMMX5MxFZ12a'
            }
        }
        try {
            const { data } = await axios.get(`https://devza.com/tests/tasks/listusers`,config)
            return data
        } catch (error) {
            return rejectWithValue(error.response.data)   
        }
    }
)

const getUsers = createSlice({
    name:"userGetUsers",
    initialState:{
        loading:false,
        error:null,
        users:[]
    },
    extraReducers:{
        [getUsersAction.pending]:(state) => {
            state.loading = true
        },
        [getUsersAction.fulfilled]:(state, action) => {
            state.loading = false
            state.users = action.payload.users
        },
        [getUsersAction.rejected]:(state, action) => {
            state.loading = false
            state.error = action.payload.message
        }
    },
})

export default getUsers.reducer