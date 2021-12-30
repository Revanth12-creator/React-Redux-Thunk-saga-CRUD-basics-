import React, { useState } from "react";

export default function Test() {
  const [firstValue, setFirstValue] = useState<any>();
  const [secondValue, setSecondValue] = useState<any>([1, 2, 3]);
  const [err, setErr] = useState<any>("");

  var a = ["revanth", "mohan", "sudharshan"];

  var data1: any = [1, 2];
  const check = () => {
    for (var i = Number(firstValue); i <= Number(secondValue); i++) {
      array.push(i);
    }
  };

  const array = [1, 2, 3];
  const value = Number(firstValue);
  const submitData = (e: any) => {
    e.preventDefault();
    console.log(firstValue);

    // if (data1.includes(firstValue)) {
    //   //   setErr("duplicates");
    //   console.log("includes");
    // } else {
    //   //   a.push(firstValue);
    //   console.log("not includes");
    // }
    // console.log("arryData", a);
    // setErr("");

    array.includes(Number(firstValue)) || array.includes(Number(secondValue))
      ? setErr("duplicates")
      : check();

    // if (!array.includes(value)) {
    // } else {
    console.log("array", array);
    // }
  };

  return (
    <div>
      <input
        type="number"
        name="firstValue"
        onChange={(e) => {
          setFirstValue(e.target.value);
        }}
      />
      <input
        type="text"
        name="lastValue"
        onChange={(e) => {
          setSecondValue(e.target.value);
        }}
      />
      <div className="text-danger">{err}</div>
      <button onClick={submitData}>ok</button>
      {/* {array.map((val) => {
        console.log("val", val);
        return <div>{val}</div>;
      })} */}
    </div>
  );
}
