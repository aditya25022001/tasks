import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const apiKey = "UrM4YHgb1FcqEf1tuKwmAMMX5MxFZ12a"
const api = "https://devza.com/tests/tasks"

export const updateTaskAction = createAsyncThunk(
    "user/updateTask",
    async({formdata},{rejectWithValue}) => {
        const config = {
            headers:{
                'Content-Type': 'multipart/form-data',
                'AuthToken' : apiKey
            }
        }
        try {
            const { data } = await axios.post(`${api}/update`,formdata,config)
            return data
        } catch (error) {
            return rejectWithValue(error.response.data)   
        }
    }
)

const updateTask = createSlice({
    name:"userUpdateTask",
    initialState:{
        loading:false,
        error:null,
        success:null
    },
    extraReducers:{
        [updateTaskAction.pending]:(state) => {
            state.loading = true
        },
        [updateTaskAction.fulfilled]:(state, action) => {
            state.loading = false
            state.success = true
            setTimeout(() =>{
                state.success = null
            },2500)
        },
        [updateTaskAction.rejected]:(state, action) => {
            state.loading = false
            state.error = action.payload.message
        }
    },
})

export default updateTask.reducer