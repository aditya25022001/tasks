import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const apiKey = "UrM4YHgb1FcqEf1tuKwmAMMX5MxFZ12a"
const api = "https://devza.com/tests/tasks"

export const deleteTaskAction = createAsyncThunk(
    "user/deleteTask",
    async({formdata},{rejectWithValue}) => {
        const config = {
            headers:{
                'AuthToken' : apiKey,
                'Content-Type': 'multipart/form-data'
            }
        }
        try {
            const { data } = await axios.post(`${api}/delete`,formdata,config)
            return data
        } catch (error) {
            return rejectWithValue(error.response.data)   
        }
    }
)

export const resetDelete = createAsyncThunk(
    'user/resetDelete',
    async() => {
        console.log('reset')
    }
)

const deleteTask = createSlice({
    name:"userDeleteTask",
    initialState:{
        loading:false,
        error:null,
        success:null
    },
    extraReducers:{
        [deleteTaskAction.pending]:(state) => {
            state.loading = true
        },
        [deleteTaskAction.fulfilled]:(state) => {
            state.loading = false
            state.success = true
            setTimeout(() =>{
                state.success = null
            },2500)
        },
        [deleteTaskAction.rejected]:(state, action) => {
            state.loading = false
            state.error = action.payload
        },
        [resetDelete.fulfilled]:(state)=>{
            state.success=null
        }
    },
})

export default deleteTask.reducer