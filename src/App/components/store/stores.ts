import { configureStore } from "@reduxjs/toolkit/"
import { combineReducers } from "redux"
import listeReducer, { addImages } from "./listes";
export const uneValueToDelete="";

export const store=configureStore({
    reducer: combineReducers({listes:listeReducer}),
    devTools:true
});

store.subscribe(()=>{

})

console.log(store.getState());

const tmpAction = addImages({h:1000,w:50,url:'test.jpg',id:132,name:"test"})