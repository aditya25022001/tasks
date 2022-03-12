import { configureStore } from '@reduxjs/toolkit'
import getTasksReducer from './redux/getTasks'
import getUsersReducer from './redux/getUsers'
import createTaskReducer from './redux/createTask'
import updateTaskReducer from './redux/updateTask'
import deleteTaskReducer from './redux/deleteTask'

const store = configureStore({
    reducer:{ 
        userGetUsers : getUsersReducer,
        userGetTasks : getTasksReducer,
        userCreateTask : createTaskReducer,
        userUpdateTask : updateTaskReducer,
        userDeleteTask : deleteTaskReducer
     }
})

export default store