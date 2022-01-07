import { type } from "os";
import { Action } from "redux";
import { UserSessionTypes, UserTypes } from "../../types";
import * as UserActionns from '../Actions/UserActions'

type IAction={
   user?:any,
   id:number
} & Action

// const initialState : UserSessionTypes={ user:null};

export const getUSerReducer=(state=[], action:IAction):any=> { 
    console.log("state",action.user);
  
    switch(action.type){
        case UserActionns.ActionTypes.GET_USER_LIST:
            return {...state, user:action.user};
        case UserActionns.ActionTypes.REMOVE_USER:
            return {...state}
        default :
        return state
    }
}
