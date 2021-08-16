import { initialState } from "../store/store"
import { ADD_TO_FAVOURITES, REMOVE_FROM_FAVOURITES } from "../actions/actionTypes"


const favouritesReducer = (state = initialState.favourites, action) => {
    
    switch(action.type){
        case ADD_TO_FAVOURITES : 
        let companyInFavourites = state.companies.find((c) => c.id === action.payload.id)
        let newCompanies = [...state.companies]
        if(newCompanies.includes(companyInFavourites)){
            alert("already in favourites")
        }else{
            newCompanies.push(action.payload)
        }
        return {
            ...state,
            companies: newCompanies                
        }
        case REMOVE_FROM_FAVOURITES : return {
            ...state,
            companies: state.companies.filter((company, i) => company.id !== action.payload.id)

        }
        default: {
            return state
        }
    }
}

export default favouritesReducer