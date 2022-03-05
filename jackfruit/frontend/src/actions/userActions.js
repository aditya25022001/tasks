import { GET_TAX_INC_SUCCESS, GET_TAX_INC_REQUEST, GET_TAX_INC_FAIL } from '../constants/userConstants'
import axios from 'axios'

const apiBaseURL = "https://internship-tasks.herokuapp.com"

export const getTaxIncAction = (Bas, LTA, HRA, FA, Inv, Rent, CityType, Med) => async(dispatch, getState) => {
    try {
        dispatch({
            type: GET_TAX_INC_REQUEST,
        })
        const { userLogin : { userInfo } } = getState()
        const config = {
            headers:{
                Authorization:`Bearer ${userInfo.token}`
            }
        }
        const { data } = await axios.post(`${apiBaseURL}/api/user/getTaxInc`,{ Bas, LTA, HRA, FA, Inv, Rent, CityType, Med },config)
        dispatch({
            type: GET_TAX_INC_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type:GET_TAX_INC_FAIL,
            payload:error.response && error.response.data.message ? error.response.data.message : error.message
        })
    }
}