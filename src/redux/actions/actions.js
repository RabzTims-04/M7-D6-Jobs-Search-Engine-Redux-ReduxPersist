import * as actionTypes from "./actionTypes"

export const addToFavouritesAction = (company) => ({
    type: actionTypes.ADD_TO_FAVOURITES,
    payload: company
})

export const removeFromFavouritesAction = (company) => ({
    type: actionTypes.REMOVE_FROM_FAVOURITES,
    payload: company
})

export const addJobDetails = (job) => ({
    type: actionTypes.JOB_DETAILS_ADDED,
    payload: job
})

export const addUserNameAction = (name) => ({
    type: actionTypes.ADD_USERNAME,
    payload: name
})

export const addPasswordAction = (pass) => ({
    type: actionTypes.ADD_PASSWORD,
    payload: pass
})

export const fetchCompaniesAction = (event, companySearch, companyLocation) => {
    return async (dispatch, getState) => {
        if(event.key === "Enter"){
            event.preventDefault()
            try {
            dispatch({
                type: actionTypes.FETCH_COMPANIES_LOADING,
                payload: true
            })
            const response = await fetch(`${process.env.REACT_APP_URL}?company_name=${companySearch}`) 
            const data = await response.json()
            console.log(data.jobs);
            console.log(companyLocation);
            if(response.ok){
                const location = data.jobs.filter(job => job.candidate_required_location.toLowerCase().includes(companyLocation.toLowerCase()))
                dispatch({
                    type: actionTypes.FETCH_COMPANIES_LOADING,
                    payload: false
                })
                dispatch({
                    type: actionTypes.FETCH_COMPANIES,
                    payload: companyLocation?location:data.jobs
                })
                dispatch({
                    type: actionTypes.FETCH_COMPANIES_ERROR,
                    payload: false
                })
                console.log(getState());
            }else{
                console.log("error fetching companies");
                dispatch({
                    type: actionTypes.FETCH_COMPANIES_ERROR,
                    payload: true
                })
            }
        } catch (error) {
            console.log(error);
            dispatch({
                type: actionTypes.FETCH_COMPANIES_ERROR,
                payload: true
            })
        }
    }
    }
}

export const fetchJobsAction = (event, jobSearch, jobLocation) => {
    return async (dispatch, getState) => {
        if(event.key === "Enter"){
            event.preventDefault()
            try {
            dispatch({
                type: actionTypes.FETCH_JOBS_LOADING,
                payload: true
            })
            const response = await fetch(`${process.env.REACT_APP_URL}?search=${jobSearch}`) 
            const data = await response.json()
            console.log(data);
            if(response.ok){
                const location = data.jobs.filter(job => job.candidate_required_location.toLowerCase().includes(jobLocation.toLowerCase()))
                dispatch({
                    type: actionTypes.FETCH_JOBS_LOADING,
                    payload: false
                })
                dispatch({
                    type: actionTypes.FETCH_JOBS,
                    payload: jobLocation?location:data.jobs
                })
                dispatch({
                    type: actionTypes.FETCH_JOBS_ERROR,
                    payload: false
                })
                console.log(getState());
            }else{
                console.log("error fetching jobs");
                dispatch({
                    type: actionTypes.FETCH_JOBS_ERROR,
                    payload: true
                })
            }
        } catch (error) {
            console.log(error);
            dispatch({
                type: actionTypes.FETCH_JOBS_ERROR,
                payload: true
            })
        }
    }
    }
}

export const fetchCategoriesAction = () => {
    return async (dispatch, getState) => {
        try {
            dispatch({
                type: actionTypes.FETCH_CATEGORIES_LOADING,
                payload: true
            })
            const response = await fetch(`${process.env.REACT_APP_URL}/categories`) 
            const data = await response.json()
            console.log(data.jobs);
            if(response.ok){
                dispatch({
                    type: actionTypes.FETCH_CATEGORIES_LOADING,
                    payload: false
                })
                dispatch({
                    type: actionTypes.FETCH_CATEGORIES,
                    payload: data.jobs
                })
                dispatch({
                    type: actionTypes.FETCH_CATEGORIES_ERROR,
                    payload: false
                })
                console.log(getState());
            }
            else{
                console.log("error fetching categories");
                dispatch({
                    type: actionTypes.FETCH_CATEGORIES_ERROR,
                    payload: true
                })
            }
        } catch (error) {
            console.log(error);
            dispatch({
                type: actionTypes.FETCH_CATEGORIES_ERROR,
                payload: true
            })
        }
    }
}

export const fetchCategoryJobsAction = (categorySearch, jobLocation) => {
    return async (dispatch, getState) => {
        try {
            dispatch({
                type: actionTypes.FETCH_CATEGORY_JOBS_LOADING,
                payload: true
            })
            const response = await fetch(`${process.env.REACT_APP_URL}?category=${categorySearch}`)
            const data = await response.json()
            console.log(data.jobs);
            if(response.ok){
                
                
                   const location = jobLocation?data.jobs.filter(job => job.candidate_required_location.toLowerCase().includes(jobLocation.toLowerCase())):data.jobs
                
                dispatch({
                    type: actionTypes.FETCH_CATEGORY_JOBS_LOADING,
                    payload: false
                })
                dispatch({
                    type: actionTypes.FETCH_CATEGORY_JOBS,
                    payload: location
                })
                dispatch({
                    type: actionTypes.FETCH_CATEGORY_JOBS_ERROR,
                    payload: false
                })
                console.log(getState());
            }else{
                console.log("error fetching category jobs");
                dispatch({
                    type: actionTypes.FETCH_CATEGORY_JOBS_ERROR,
                    payload: true
                })
            }
        }catch (error){
            console.log(error);
            dispatch({
                type: actionTypes.FETCH_CATEGORY_JOBS_ERROR,
                payload: true
            })
        }
    }
}