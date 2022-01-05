import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AddUser() {
  //   const [name, setName] = useState("");
  //   const [email, setEmail] = useState("");
  //   const [phonenumber, setPhonenumber] = useState("");
  const [userData, setUserData] = useState<any>({
    name: "",
    email: "",
    phonenumber: "",
  });

  const navigate = useNavigate();

  const pathName = window.location.href.split("/")[3];
  const id = window.location.href.split("/")[4];

  console.log(id);
  useEffect(() => {
    let url = `http://localhost:5000/crud/${id}`;
    axios
      .get(url)
      .then((res) => {
        let response = res.data;
        setUserData(response);
        console.log("response", response);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  const submitFormToAdd = async (e: any) => {
    const { name, email, phonenumber } = userData;
    console.log("ddd", userData);

    e.preventDefault();
    let url = "http://localhost:5000/crud";
    await axios
      .post(url, { name, email, phonenumber })
      .then(() => {
        navigate(`/users`);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const submitFormToEdit = (e: any) => {
    e.preventDefault();
    let url = `http://localhost:5000/crud/${id}`;
    let res = axios.patch(url, userData);
    console.log(res);
    navigate(`/users`);
  };
  console.log("userData", userData);

  return (
    <div className=" col-md-4 my-5 mx-auto">
      <div className=" card container">
        <h1>{pathName == "adduser" ? "Add" : "Edit"}</h1>
        <form
          onSubmit={pathName == "adduser" ? submitFormToAdd : submitFormToEdit}
        >
          <div className="form-group p-2">
            <input
              type="text"
              className="form-control"
              placeholder="Name"
              name="name"
              onChange={(e: any) => {
                setUserData((preveState: any) => ({
                  ...preveState,
                  name: e.target.value,
                }));
              }}
              value={userData.name}
            />
          </div>
          <div className="form-group p-2">
            <input
              type="text"
              className="form-control"
              placeholder="Email"
              name="email"
              onChange={(e: any) => {
                setUserData((preveState: any) => ({
                  ...preveState,
                  email: e.target.value,
                }));
              }}
              value={userData.email}
            />
          </div>
          <div className="form-group p-2">
            <input
              type="text"
              className="form-control"
              placeholder="Phono_No"
              name="phone"
              onChange={(e: any) => {
                setUserData((preveState: any) => ({
                  ...preveState,
                  phonenumber: e.target.value,
                }));
              }}
              value={userData.phonenumber}
            />
          </div>
          <div className="form-group">
            <button className="btn btn-success" type="submit">
              {pathName == "adduser" ? "AddUser" : "EditUser"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
