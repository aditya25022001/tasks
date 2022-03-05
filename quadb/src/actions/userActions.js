import { BOOK_TICKET_RESET, BOOK_TICKET_REQUEST, BOOK_TICKET_SUCCESS, BOOK_TICKET_FAIL, GET_SHOWS_REQUEST, GET_SHOWS_SUCCESS, GET_SHOWS_FAIL } from '../constants/userConstants'
import axios from 'axios'

export const getShowsAction = () => async(dispatch) => {
    try {
        dispatch({
            type: GET_SHOWS_REQUEST,
        })
        const { data } = await axios.get(`https://api.tvmaze.com/search/shows?q=all`)
        dispatch({
            type: GET_SHOWS_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type:GET_SHOWS_FAIL,
            payload:error.response && error.response.data.message ? error.response.data.message : error.message
        })
    }
}

export const bookShowAction = (email, mobno, uname, name, date) => async(dispatch) => {
    try {
        dispatch({
            type: BOOK_TICKET_REQUEST,
        })
        setTimeout(() => {
            if(!localStorage.getItem('userInfo')){
                localStorage.setItem('userInfo',JSON.stringify({ email, mobno, uname }))
            }
            dispatch({
                type: BOOK_TICKET_SUCCESS,
                payload:{ name, date }
            })
            setTimeout(() => {
                dispatch({
                    type:BOOK_TICKET_RESET
                })
            },2000)
        },2500)
    } catch (error) {
        dispatch({
            type:BOOK_TICKET_FAIL,
            payload:"Error booking the ticket"
        })
    }
}