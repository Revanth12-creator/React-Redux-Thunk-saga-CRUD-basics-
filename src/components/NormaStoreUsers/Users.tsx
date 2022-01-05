import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { StoreTypes, UserTypes } from "../../types";
import * as UserActions from "../../store/Actions/UserActions";
import "./Users.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
export default function Users() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const listUsers: any = useSelector((state: StoreTypes) => {
    console.log("ff", state.allUsers.user);
    return state.allUsers.user;
  });

  const deleteUser = (id: any) => {
    let res = axios.delete(`http://localhost:5000/crud/${id}`);
    console.log("res", res);
    window.location.reload();
  };

  const addUs = () => {
    navigate("/adduser");
  };
  const editU = (id: any) => {
    navigate(`/edituser/${id}`);
  };
  return (
    <div>
      <div className="container">
        <button className="btn btn-primary add" onClick={addUs}>
          Add
        </button>

        <table className="table table-bordered ">
          <thead className="bg-success">
            <tr>
              <th>id</th>
              <th>Name</th>

              <th>Email</th>
              <th>Phone NO</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {listUsers &&
              listUsers.map((data: any, index: any) => {
                return (
                  <tr key={data.id}>
                    <td>{data.id}</td>
                    <td>{data.name}</td>
                    <td>{data.email}</td>
                    <td>{data.phonenumber}</td>

                    <td className="btn-group">
                      <button
                        className="btn btn-danger"
                        onClick={() => deleteUser(data.id)}
                      >
                        Remove
                      </button>
                      <button
                        className="btn btn-warning"
                        onClick={() => {
                          editU(data.id);
                        }}
                      >
                        Edit
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
