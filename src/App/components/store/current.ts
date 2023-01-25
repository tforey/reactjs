import {createSlice } from '@reduxjs/toolkit'
import { string } from 'prop-types';
import { MemeInterface, ImageInterface } from "orsys-tjs-meme";
import { DummyMeme } from '../../interfaces/dummyMeme';

const initialState = {
    ...DummyMeme

}

const current = createSlice({
    name: "current",
    initialState,
    reducers:{
        updateCurrent:()=>{state:MemeInterface,action:{type:string, payload:MemeInteface}=>{state=action.payload;},
        clearCurrent:()=>{state:MemeInterface,action:{type:string, payload:any})=> {state={...DummyMeme}
    }
    }
});

export const {} = current.actions

export default current.reducer