import { Action } from "redux";
import { SagaTypes } from "../Actions/SagaActions";

type IAction={
    count:any
} & Action
export const countReducer=(state=0,action:IAction)=> {
    switch(action.type){
        case 'INCRESE_COUNT_SUCCESS' :
            return state + 1;
        case 'DECRESE_COUNT_SUCCESS' :
            return state - 1;
        default :
        return state;
    }
}