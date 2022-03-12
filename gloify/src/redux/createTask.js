import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const apiKey = "UrM4YHgb1FcqEf1tuKwmAMMX5MxFZ12a"
const api = "https://devza.com/tests/tasks"

export const createTaskAction = createAsyncThunk(
    "user/createTask",
    async({formdata},{rejectWithValue}) => {
        console.log(formdata)
        const config = {
            headers:{
                'Content-Type': 'multipart/form-data',
                'AuthToken' : apiKey
            }
        }
        try {
            const { data } = await axios.post(`${api}/create`,formdata,config)
            return data
        } catch (error) {
            return rejectWithValue(error.response.data)   
        }
    }
)

const createTask = createSlice({
    name:"userCreateTask",
    initialState:{
        loading:false,
        error:null,
        success:null
    },
    extraReducers:{
        [createTaskAction.pending]:(state) => {
            state.loading = true
        },
        [createTaskAction.fulfilled]:(state, action) => {
            state.loading = false
            state.success = true
            setTimeout(() =>{
                state.success = null
            },2500)
        },
        [createTaskAction.rejected]:(state, action) => {
            state.loading = false
            state.error = action.payload.message
        }
    },
})

export default createTask.reducer