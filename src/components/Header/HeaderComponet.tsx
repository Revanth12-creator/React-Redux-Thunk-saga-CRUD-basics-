import React from "react";
import "./HeaderComp.css";
export default function Header() {
  return (
    <div className="bg-primary  mainHeader">
      <div className="container">
        <div className="row">
          <div className="col-md-4 p-3">NavBar</div>
          <div className="col-md-8 p-3">
            <ul className="d-flex">
              <li>
                {" "}
                <a href="/" className="text-light m-3">
                  Home
                </a>
              </li>
              <li>
                {" "}
                <a href="/users" className="text-light m-3">
                  Noraml-Store-Users
                </a>
              </li>
              <li>
                {" "}
                <a href="/thunkusers" className="text-light m-3">
                  Thunk-Users
                </a>
              </li>
              <li>
                {" "}
                <a href="/sagaexample" className="text-light m-3">
                  Saga-Example
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
