import { createSlice } from "@reduxjs/toolkit";
import { ImageInterface, MemeInterface } from "orsys-tjs-meme";
import MemeForm from "../feature/MemeForm/MemeForm";
export interface ISliceListes {
  memes: Array<MemeInterface>;
  images: Array<ImageInterface>;
}
const initialState = {
  memes: [],
  images: [],
};

const listes = createSlice({
  name: 'maListes',
  initialState,
  reducers: {
    addImages:(state:ISliceListes,action:{type:any,payload:ImageInterface})=>{ //surcharge a la volée du type :{type:any,payload:ImageInterface} ou :ISliceListes
        state.images.push(action.payload);
    }
  },
});
//addImage(img); -->addImage(state){type:'maListes/addImages',payload:img})
export const {addImages} = listes.actions;
export default listes.reducer;
