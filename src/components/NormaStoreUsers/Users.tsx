import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { StoreTypes, UserTypes } from "../../types";
import * as UserActions from "../../store/Actions/UserActions";
import ReactPaginate from "react-paginate";
import "./Users.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { off } from "process";
export default function Users() {
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState(true);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const listUsers: any = useSelector((state: StoreTypes) => {
    console.log("ff", state.allUsers.user);
    return state.allUsers.user;
  });

  const deleteUser = (id: any) => {
    dispatch(UserActions.removeUser());
    let res = axios.delete(`http://localhost:5000/crud/${id}`);
    console.log("res", res);
    window.location.reload();
  };
  const asd = (a: any, b: any) => {
    return a.name.localeCompare(b.name);
  };
  const dsc = (a: any, b: any) => {
    return b.name.localeCompare(a.name);
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
        <input
          type="text"
          className="m-2"
          placeholder="Search"
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />
        <button
          className="btn btn-primary"
          onClick={() => {
            setSort(true);
          }}
        >
          ASC
        </button>
        <button
          className="btn btn-primary"
          onClick={() => {
            setSort(false);
          }}
        >
          DSC
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
              listUsers
                .filter((val: any) => {
                  if (search == "") {
                    return val;
                  } else if (
                    val.name
                      .toLocaleLowerCase()
                      .includes(search.toLocaleLowerCase())
                  ) {
                    return val;
                  }
                })
                .sort(sort ? asd : dsc)
                .map((data: any, index: any) => {
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
