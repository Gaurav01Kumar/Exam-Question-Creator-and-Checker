import Navbar from "../Components/Navbar";

import { useNavigate } from "react-router-dom";

import "./Pricing.css";
const Pricing = () => {
  const navigate = useNavigate();

  return (
    <div className="main_container">
      <Navbar />
      <div className="price-container group">
        <div className="grid-1-5">
          <h2>Basic</h2>
          <h3>&#x20b9; 35 per page</h3>
          <p>0-50 Paper pattern </p>
          <ul>
            <li>Lifitime access </li>
            <li>Download Result </li>
          </ul>
          <button
            className="button"
            onClick={() =>
              navigate("/pricing/checkout", {
                data: { plan: "basic", price: 35, quantiy: 50 },
              })
            }
          >
            Buy Now
          </button>
        </div>
        <div className="grid-1-5">
          <h2>Startup</h2>
          <h3>&#x20b9;30 per page</h3>
          <p>0-100 Paper pattern </p>
          <ul>
            <li>Lifitime access </li>
            <li>Download Result </li>
          </ul>
          <button
            className="button"
            onClick={() =>
              navigate("/pricing/checkout", {
                data: { plan: "startup", price: 30, quantiy: 100 },
              })
            }
          >
            Buy Now
          </button>
        </div>
        <div className="grid-1-5">
          <h2>Premimum</h2>
          <h3>&#x20b9;20 per page</h3>
          <p>0-300 Paper pattern </p>
          <ul>
            <li>Lifitime access </li>
            <li>Download Result </li>
          </ul>
          <button
            className="button"
            onClick={() =>
              navigate("/pricing/checkout", {
                data: { plan: "Premimum", price: 20, quantiy: 300 },
              })
            }
          >
            Buy Now
          </button>
        </div>
        <div className="grid-1-5">
          <h2>Enterprise</h2>
          <h3>&#x20b9;15 per page</h3>
          <p>0-600 Paper pattern </p>
          <ul>
            <li>Lifitime access </li>
            <li>Download Result </li>
          </ul>
          <button
            className="button"
            onClick={() =>
              navigate("/pricing/checkout", {
                data: { plan: "basic", price: 15, quantiy: 600 },
              })
            }
          >
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
