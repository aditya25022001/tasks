import { GET_TAX_INC_SUCCESS, GET_TAX_INC_REQUEST, GET_TAX_INC_FAIL } from '../constants/userConstants'

export const getTaxableIncReducer = (state={},action) => {
    switch(action.type) {
        case GET_TAX_INC_REQUEST:
            return{
                loading:true
            }
        case GET_TAX_INC_SUCCESS:
            return{
                loading:false,
                taxInc:action.payload
            }
        case GET_TAX_INC_FAIL:
            return{
                loading:false,
                error:action.payload
            }
        default:
            return state
    }
}