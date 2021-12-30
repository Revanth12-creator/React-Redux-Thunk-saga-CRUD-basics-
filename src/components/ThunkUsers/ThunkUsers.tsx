import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { StoreTypes, UserTypes } from "../../types";
import * as UserActions from "../../store/Actions/UserActions";
import "./ThunkUsers.css";
export default function ThunkUsers() {
  const dispatch = useDispatch();

  const thunkUsers: any = useSelector((state: StoreTypes) => {
    console.log("thunkUsers", state.allThunkUsers.user);
    return state.allThunkUsers.user;
    // console.log("ff", state.allUsers.user);
  });
  return (
    <div className="container">
      {thunkUsers &&
        thunkUsers.map((user: any, index:any) => {
          return (
            <div>
              <div className="card" key={user.id} >
                <img src={user.image} alt="" />
                <div className="card-body">
                  <h4>{user.category}</h4>
                  <h4>{user.price}</h4>
                  <p>{user.description}</p>
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
}
