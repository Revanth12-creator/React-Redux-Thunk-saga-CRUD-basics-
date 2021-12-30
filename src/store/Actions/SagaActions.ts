import { UserTypes } from "../../types";

export const SagaTypes ={
  INCRESE_COUNT:"INCRESE_COUNT",
  DECRESE_COUNT:"DECRESE_COUNT"

}

export const increseCount=()=> {
    return {
        type:SagaTypes.INCRESE_COUNT,
    };
}
export const decreseCount=()=> {
    return {
        type:SagaTypes.DECRESE_COUNT,
    };
}
