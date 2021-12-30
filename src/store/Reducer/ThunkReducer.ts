import { type } from "os";
import { Action } from "redux";
import { UserSessionTypes, UserTypes } from "../../types";
import { ThunkActionType } from "../Actions/ThunkAction";
import * as UserActionns from '../Actions/UserActions'

type IAction={
    thunkUsers?:any,
} & Action

// const initialState : UserSessionTypes={ user:null};

export const getThunkReducer=(state=[], action:IAction):any=> { 
    console.log("Thunkaction",action.thunkUsers);
  
    switch(action.type){
        case ThunkActionType.FETCH_API_DATA:
            return {...state, user:action.thunkUsers};
        default :
        return state
    }
}
