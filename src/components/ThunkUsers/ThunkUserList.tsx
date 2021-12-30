import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchApiData } from "../../store/Actions/ThunkAction";
import * as UserActions from "../../store/Actions/UserActions";
import ThunkUsers from "./ThunkUsers";

export default function ThunkUserList() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchApiData());
  }, []);

  return (
    <div>
      <h1>Thunk Users</h1>
      <ThunkUsers />
    </div>
  );
}
