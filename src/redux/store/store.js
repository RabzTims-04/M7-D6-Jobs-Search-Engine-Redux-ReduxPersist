import { createStore, combineReducers, compose, applyMiddleware } from "redux"
import thunk from "redux-thunk"
import categoriesReducer from "../reducers/categoriesReducer"
import categoryJobsReducer from "../reducers/categoryJobsReducer"
import companiesReducer from "../reducers/companiesReducer"
import favouritesReducer from "../reducers/favouritesReducer"
import jobDetailsReducer from "../reducers/jobDetailsReducer"
import jobsReducer from "../reducers/jobsReducer"
import storage from "redux-persist/lib/storage"
/* import sessionStorage from 'redux-persist/lib/storage/session' */
import { persistStore, persistReducer } from "redux-persist";
import { encryptTransform } from "redux-persist-transform-encrypt";
import userDetailsReducer from "../reducers/userDetailsReducer"

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

 export const initialState = {
     favourites:{
         companies:[]
     },
     jobDetails:{
         details:{}
     },
     companies:{
         companiesArray:[],
         error: false,
         isLoading: false
     },
     jobs:{
         jobsArray:[],
         error: false,
         isLoading: false
     },
     categories:{
         categoriesArray:[],
         error: false,
         isLoading: false
     },
     categoryJobs:{
        categoryJobsArray:[],
        error: false,
        isLoading: false
     },
     userDetails:{
         username:"",
         password:""
     }
 }

 
 const mainReducer = combineReducers({
     favourites: favouritesReducer,
     jobDetails: jobDetailsReducer,
     companies: companiesReducer,
     jobs: jobsReducer,
     categories: categoriesReducer,
     categoryJobs: categoryJobsReducer,
     userDetails: userDetailsReducer
    })
    
    const persistConfig = {
       key: "root",
       storage:storage,
       blacklist:['companies', 'jobs', 'categoryJobs'],
       transforms: [
           encryptTransform({
               secretKey: process.env.REACT_APP_SUPER_SECRET
           })
       ]
   }
const persistedReducer = persistReducer(persistConfig, mainReducer)

const configureStore = createStore(
    persistedReducer,
     initialState,
     composeEnhancers(applyMiddleware(thunk))
 )

 const persistor = persistStore(configureStore)

 export { configureStore, persistor }