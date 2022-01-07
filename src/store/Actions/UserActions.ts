import { UserTypes } from "../../types";

export const ActionTypes ={
    GET_USER_LIST:'GET_USER_LIST',
    REMOVE_USER:'REMOVE_USER',
    UPDATE_USER:'UPDATE_USER',

}

export const getUsers=(user:any)=> {
    console.log("data",user);
    return {
        type:ActionTypes.GET_USER_LIST,
        user
    };
}
export const removeUser=()=> {
    return {
        type:ActionTypes.REMOVE_USER, 
    };
}
export const UPDATEUser=(id:number)=> {
    console.log(id)
    return {
        type:ActionTypes.UPDATE_USER,
        id
    };
}
