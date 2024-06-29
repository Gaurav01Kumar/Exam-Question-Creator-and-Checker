import { TextField } from "@material-ui/core";
import Navbar from "../Components/Navbar";
import useStyles from "../Components/Styles";
import Button from "@material-ui/core/Button";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { login as LoginSlice } from "../store/authSlice";

import authService from "../Service/authService";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    try {
      const data = {
        email: email,
        pwd: password,
      };

      const response = await authService.loginService(data);

      if (response !== null || response !== undefined) {
        dispatch(LoginSlice(response));
        alert("Login Succesfully");

        localStorage.setItem("users", JSON.stringify(response.data));
        navigate("/dashboard/profile");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="main_container">
      <Navbar />
      <div className="form">
        <h1 style={{ color: "#08823F", padding: "20px" }}>Login</h1>
        <TextField
          className={classes.textField}
          id="standard-required"
          label="Username"
          variant="standard"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <TextField
          className={classes.textField}
          id="standard-required"
          label="Password"
          type="password"
          variant="standard"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <br />
        <Button
          onClick={handleSubmit}
          variant="Text"
          className={classes.btnReg}
        >
          Login
        </Button>
      </div>
    </div>
  );
};

export default Login;
