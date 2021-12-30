import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchApiData } from "../../store/Actions/ThunkAction";
import * as UserActions from "../../store/Actions/UserActions";
import Users from "./Users";

export default function UserList() {
  const [usersData, setUserData] = useState<any>();
  const dispatch = useDispatch();

  useEffect(() => {
    var url = "https://reqres.in/api/users?page=1";
    axios
      .get(url)
      .then((res) => {
        setUserData(res.data.data);
      })
      .catch((e) => console.log(e));
  }, []);

  dispatch(UserActions.getUsers(usersData));

  return (
    <div>
      <h1>Noraml Store Users</h1>
      <Users />
    </div>
  );
}
