import { configureStore } from "@reduxjs/toolkit/"
import { combineReducers } from "redux"
import listeReducer from "./listes";
import currentReducer from "./current";
export const uneValueToDelete="";

export const store=configureStore({
    reducer: combineReducers({listes:listeReducer,current:currentReducer}),
    devTools:true
});

store.subscribe(()=>{

})
