import { type } from "os"

export type UserTypes={
    id:number,
    first_name:string,
    last_name:string,
    email:string,
    avatar:any
}
export type StoreTypes={
    allUsers:any,
    allThunkUsers:any,
    countData:any
}
export type UserSessionTypes={
    user:UserTypes | null
}