import {BOOK_TICKET_RESET,  BOOK_TICKET_REQUEST, BOOK_TICKET_SUCCESS, BOOK_TICKET_FAIL, GET_SHOWS_REQUEST, GET_SHOWS_SUCCESS, GET_SHOWS_FAIL } from '../constants/userConstants'

export const getShowsReducer = (state={ shows:[] },action) => {
    switch(action.type) {
        case GET_SHOWS_REQUEST:
            return {
                loading:true
            }
        case GET_SHOWS_SUCCESS:
            return{
                loading:false,
                shows:action.payload
            }
        case GET_SHOWS_FAIL:
            return{
                loading:false,
                error:action.payload
            }
        default:
            return state
    }
}

export const bookTicketReducer = (state ={}, action) => {
    switch(action.type){
        case BOOK_TICKET_REQUEST:
            return {
                loading:true
            }
        case BOOK_TICKET_SUCCESS:
            return{
                loading:false,
                success:true,
                details:action.payload
            }
        case BOOK_TICKET_FAIL:
            return{
                loading:false,
                error:action.payload
            }
        case BOOK_TICKET_RESET:
            return{}
        default:
            return state
    }
}