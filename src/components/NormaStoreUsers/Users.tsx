import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { StoreTypes, UserTypes } from "../../types";
import * as UserActions from "../../store/Actions/UserActions";
import "./Users.css";
export default function Users() {
  const dispatch = useDispatch();

  const listUsers: any = useSelector((state: StoreTypes) => {
    console.log("ff", state.allUsers.user);
    return state.allUsers.user;
  });

  return (
    <div>
      <div className="container">
        <table className="table table-bordered ">
          <thead className="bg-success">
            <tr>
              <th>id</th>
              <th>FirstName</th>
              <th>LastName</th>
              <th>Email</th>
              <th>Profile</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {listUsers &&
              listUsers.map((data: UserTypes, index: any) => {
                return (
                  <tr key={data.id}>
                    <td>{data.id}</td>
                    <td>{data.first_name}</td>
                    <td>{data.last_name}</td>
                    <td>{data.email}</td>
                    <td>
                      <img src={data.avatar} alt="" />
                    </td>
                    <td>
                      <button
                        className="btn btn-danger"
                        onClick={() =>
                          dispatch(UserActions.removeUser(data.id))
                        }
                      >
                        Remove
                      </button>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
