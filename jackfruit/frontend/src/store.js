import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { userRegisterReducer, userLoginReducer } from './reducers/authReducers' 
import { getTaxableIncReducer } from './reducers/userReducer'

const reducer = combineReducers({ 
    
    userRegister : userRegisterReducer,
    userLogin : userLoginReducer,

    userGetTaxInc : getTaxableIncReducer

})

const userInfoFromStorage = sessionStorage.getItem('userInfo') ? JSON.parse(sessionStorage.getItem('userInfo')) : null

const initialState = {
    userLogin : { userInfo : userInfoFromStorage },
    userRegister : { userInfo : userInfoFromStorage }
}

const middleware = [thunk]

const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware))) 

export default store