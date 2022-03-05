import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { getShowsReducer, bookTicketReducer } from './reducers/userReducer'

const reducer = combineReducers({ 
    userShows : getShowsReducer,
    userBook : bookTicketReducer
})

const initialState = {
    userShows: { shows : [] }
}

const middleware = [thunk]

const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware))) 

export default store