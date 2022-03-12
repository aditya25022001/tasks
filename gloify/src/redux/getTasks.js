import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const apiKey = "UrM4YHgb1FcqEf1tuKwmAMMX5MxFZ12a"
const api = "https://devza.com/tests/tasks"

export const getTasksAction = createAsyncThunk(
    "user/getTasks",
    async(id,{rejectWithValue}) => {
        const config = {
            headers:{
                'AuthToken' : apiKey
            }
        }
        try {
            const { data } = await axios.get(`${api}/list`,config)
            return data
        } catch (error) {
            return rejectWithValue(error.response.data)   
        }
    }
)

const getTasks = createSlice({
    name:"userGetTasks",
    initialState:{
        loading:false,
        error:null,
        tasks:[]
    },
    extraReducers:{
        [getTasksAction.pending]:(state) => {
            state.loading = true
        },
        [getTasksAction.fulfilled]:(state, action) => {
            state.loading = false
            state.tasks = action.payload.tasks
        },
        [getTasksAction.rejected]:(state, action) => {
            state.loading = false
            state.error = action.payload.message
        }
    },
})

export default getTasks.reducer