import axios from "axios"

export const ThunkActionType={
    FETCH_API_DATA:"FETCH_API_DATA"
}

export const fetchApiData=()=> {
    return async (dispatch:any)=> {
    var url = "https://fakestoreapi.com/products";

        const reponse=await axios.get(url);
        console.log("response",reponse.data);
        dispatch({type:ThunkActionType.FETCH_API_DATA, thunkUsers:reponse.data})
    }
   }

