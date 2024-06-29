import React from 'react'
import "./Logout.css"
import { useNavigate } from 'react-router-dom'
const Logout = () => {
  const navigate = useNavigate();
  const logout = () => {
    localStorage.removeItem('users');
    navigate("/")
  }
  return (
    <div className="background-photo">
      <div className="jumbotron">
        <div className="containers">
          <h1 style={{ color: "white" }}>See you soon!</h1>
        </div>
      </div>
      <div className="middle-block">
        <div ng-if="!!loadingShowed">
          For Logout Click below
        </div>
        <div ng-if="!loadingShowed" style={{ fontSize: "22px" }}>Please, click below.</div>
        <div className="round-class" style={{ color: "white" }} onClick={logout}>
          <p>Click Here</p>

        </div>
      </div>
      <div className="second">
        <div className="container">
          <div className="col-xs-12 col-sm-6">
            <div className="row">
              <div className="round-class ball">
                <i className="fa fa-thumbs-o-up fa-lg" aria-hidden="true" />
              </div>
              <div className="right-text">
                Thanks to use our web-client, We hope you liked it.
              </div>
            </div>
            <div className="row">
              <div className="round-class ball">
                <i className="fa fa-mobile fa-2x" aria-hidden="true" />
              </div>
              <div className="right-text">
                You could still in contact in your phone client
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Logout