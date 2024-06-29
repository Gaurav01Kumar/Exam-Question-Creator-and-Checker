import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Service from "./Pages/Service";
import Login from "./Pages/Login";
import Pricing from "./Pages/Pricing";
import "./index.css";
import Register from "./Pages/Register";
import Dashboard from "./Pages/Dashboard/Dashboard";
import CreatePattern from "./Pages/Dashboard/CreatePaper";
import CorrectPage from "./Pages/Dashboard/CorrectPage";
import ResultData from "./Pages/Dashboard/ResultData";
import Subject from "./Pages/Dashboard/Subject";
import Dashboardhome from "./Pages/Dashboard/Dashboardhome";
import Checkout from "./Pages/checkout/Checkout";
import Profile from "./Pages/Dashboard/Profile";
import AuthLayou from "./Components/AuthLayou";
import ClassList from "./Pages/Dashboard/Class";
import Logout from "./Pages/Logout/Logout";
const App = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route
        exact
        path="/login"
        element={
          <AuthLayou path="/dahboard/profile">
            <Login />
          </AuthLayou>
        }
      />
      <Route exact path="/service" element={<Service />} />
      <Route exact path="/pricing" element={<Pricing />} />
      <Route
        exact
        path="/register"
        element={
          <AuthLayou path="/dashboard/profile">
            <Register />
          </AuthLayou>
        }
      />
      <Route
        exact
        path="/pricing/checkout"
        element={
          <AuthLayou>
            <Checkout path="/pricing/checkout" />
          </AuthLayou>
        }
      />
      <Route
        path="/dashboard"
        element={
          
            <Dashboard />
          
        }
      >
        <Route
          path="/dashboard/home"
          element={
            <AuthLayou path="/dashboard/home">
              <Dashboardhome />
            </AuthLayou>
          }
        />
        <Route
          path="/dashboard/profile"
          element={
            <AuthLayou path="/dashboard/profile">
              <Profile />
            </AuthLayou>
          }
        />
        <Route
          path="/dashboard/create-paper"
          element={
            <AuthLayou path="/dashboard/create-paper">
              <CreatePattern />
            </AuthLayou>
          }
        />
        <Route
          path="/dashboard/correction"
          element={
            <AuthLayou path="/dashboard/correction">
              <CorrectPage />
            </AuthLayou>
          }
        />
        <Route
          path="/dashboard/result"
          element={
            <AuthLayou path="/dashboard/result">
              <ResultData />
            </AuthLayou>
          }
        />
        <Route
          path="/dashboard/subject"
          element={
            <AuthLayou path="/dashboard/subject">
              <Subject />
            </AuthLayou>
          }
        />
      </Route>
      <Route
          path="/dashboard/class"
          element={
            <AuthLayou path="/dashboard/class">
              <ClassList />
            </AuthLayou>
          }
        >
      </Route>
      <Route
          path="/dashboard/logout"
          element={
            <AuthLayou path="/dashboard/logout">
              <Logout />
            </AuthLayou>
          }
        >
      </Route>
    </Routes>
  );
};

export default App;
