import { initialState } from "../store/store"
import { ADD_PASSWORD, ADD_USERNAME } from "../actions/actionTypes"


const userDetailsReducer = (state = initialState.userDetails, action) => {
    
    switch(action.type){
        case ADD_USERNAME: return {
            ...state,
                userName: action.payload
        }
        case ADD_PASSWORD: return {
            ...state,
            password: action.payload
        }
        default: {
            return state
        }
    }
}

export default userDetailsReducer