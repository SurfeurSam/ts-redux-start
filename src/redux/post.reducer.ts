import { AnyAction, Reducer } from "@reduxjs/toolkit";
import { ADD_TO_FAVOR, DEL_FROM_FAVOR } from "./type.redux";

const initialState = {
    post_Ids: [],
}

const PostReducer: Reducer<{
    post_Ids: any[];
}, AnyAction> = (state = initialState, action: AnyAction) => {
const { type, payload } = action; 

  switch (type) {
    case ADD_TO_FAVOR:
        return { ...state, post_Ids: [...state.post_Ids, payload] };
    case DEL_FROM_FAVOR:
        return { ...state, post_Ids: state.post_Ids.filter((el) => el !== payload) } ;
    default:
        return state;   
  }
}

export default PostReducer;
