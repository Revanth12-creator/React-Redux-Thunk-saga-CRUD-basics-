import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decreseCount, increseCount } from "../../store/Actions/SagaActions";
import { StoreTypes } from "../../types";

export default function SagaCompo() {
  const dispatch = useDispatch();
  const countData = useSelector((state: StoreTypes) => {
    return state.countData;
  });
  return (
    <div className="btn-group my-5 ">
      <button
        className="btn btn-outline-success m-3 p-3"
        onClick={() => {
          dispatch(increseCount());
        }}
      >
        +
      </button>
      <h1 className="my-2">{countData}</h1>
      <button
        className="btn btn-outline-danger m-3 p-3"
        onClick={() => {
          dispatch(decreseCount());
        }}
      >
        -
      </button>
    </div>
  );
}
