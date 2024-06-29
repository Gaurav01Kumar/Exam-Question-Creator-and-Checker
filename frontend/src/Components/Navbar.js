import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "../Assets/logo.png";
import Button from "@material-ui/core/Button";
import useStyles from "./Styles";

const Navbar = () => {
  const navigate = useNavigate();
  const classes = useStyles();
  const data = JSON.parse(localStorage.getItem("users"));

  return (
    <div className={classes.navbar}>
      <img
        className={classes.logo}
        onClick={() => navigate("/")}
        src={logo}
        style={{marginLeft:"20px"}}
        alt="Logo"
      />
      <div className={classes.navItem}>
        <div className={classes.links}>
          <Button
            variant="Text"
            className={classes.btn}
            onClick={() => navigate("/service")}
          >
            Our Services
          </Button>
          <Button
            variant="Text"
            className={classes.btn}
            onClick={() => navigate("/pricing")}
          >
            Pricing
          </Button>
          {data ? (
            <Button
              variant="Text"
              className={classes.btn}
              onClick={() => navigate("/dashboard/home")}
            >
              Go to Dashboard
            </Button>
          ) : (
            <Button
              variant="Text"
              className={classes.btn}
              onClick={() => navigate("/login")}
            >
              Login
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
