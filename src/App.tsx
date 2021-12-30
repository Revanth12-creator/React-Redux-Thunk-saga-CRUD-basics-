import React from "react";
import logo from "./logo.svg";
import "./App.css";
import UserList from "./components/NormaStoreUsers/UserList";
import Test from "./components/Test";
import Header from "./components/Header/HeaderComponet";
import { Route, BrowserRouter, Router, Routes } from "react-router-dom";
import Users from "./components/NormaStoreUsers/Users";
import ThunkUserList from "./components/ThunkUsers/ThunkUserList";
import SagaCompo from "./components/SagaBasics/SagaCompo";
function App() {
  return (
    <div className="App">
      <Header />
      {/* <UserList /> */}
      <BrowserRouter>
        <Routes>
          <Route path="users" element={<UserList />} />
          <Route path="thunkusers" element={<ThunkUserList />} />
          <Route path="sagaexample" element={<SagaCompo />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
