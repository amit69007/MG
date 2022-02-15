import { React, useState } from "react";
import { Link } from "react-router-dom";
import "./SSI.css";
import "./Form.css";
export default function CSI() {
  const [firstErr, setFirstErr] = useState("");
  const [lastErr, setLastErr] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const firstHandler = (event) => {
    let item = event.target.value;
    if (item.length < 6) {
      setFirstErr(true);
    } else {
      setFirstErr(false);
    }
  };
  const LastHandler = (Event) => {
    let item = Event.target.value;
    if (item.length < 6) {
      setLastErr(true);
    } else {
      setLastErr(false);
    }
  };
  const emailValidation = () => {
    const regEx = /[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,8}(.[a-z{2,8}])?/g;
    if (regEx.test(email)) {
      setMessage("Email is Valid");
    } else if (!regEx.test(email) && email !== "") {
      setMessage("Email is Not Valid");
    } else {
      setMessage("");
    }
  };
  const handleOnChange = (event) => {
    setEmail(event.target.value);
  };
  const [Modal, setModal] = useState(0);
  const toggleModal = () => {
    setModal(!Modal);
  };
  return (
    <>
      <div className="block">
        <img src="./MG.svg" alt="Logo" className="Logo" />
        <div className="Button">
          <div className="CSI">
            <Link type="click" className="btn mx-5" id="now" to="/Navbar">
              <b>CSI</b>
            </Link>
            {/* <button type="button" className="btn mx-5" id="now">
<b>CSI</b>
</button> */}
          </div>
          <div className="SSI">
            <button
              type="button"
              id="myBtn"
              onClick={toggleModal}
              className="btn"
            >
              <b>SSI</b>
            </button>
          </div>
        </div>
      </div>
      <button type="button" className="icon">
        <span className="material-icons" id="out">
          person
        </span>
      </button>
      {Modal ? (
        <div className="modal">
          <div className="container" id="for">
            <h5>
              <b>Register New User</b>
            </h5>
            <div className=" Drake form-floating">
              <input
                type="email"
                className="Ikaris form-control"
                id="floatingInput"
                placeholder="First Name"
                onChange={firstHandler}
              />
              {firstErr ? <span>First Name Required</span> : ""}
              <label className="Form" htmlFor="floatingInput">
                First Name
              </label>
            </div>
            <div className="Eminem form-floating">
              <input
                type="email"
                className="Ikaris form-control"
                id="floatingInput"
                placeholder="Email"
                value={email}
                onChange={handleOnChange}
                onClick={emailValidation}
              />
              <span>{message}</span>
              <label className="Form" htmlFor="floatingInput">
                Email
              </label>
            </div>
            <div className="Taylor form-floating">
              <input
                type="email"
                className="Ikaris form-control"
                id="floatingInput"
                placeholder="Last Name"
                onChange={LastHandler}
              />
              {lastErr ? <span>Last Name Required</span> : ""}
              <label className="Form" htmlFor="floatingInput">
                Last Name
              </label>
            </div>

            <div className="Halsey">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Access To Panel (Multiple)
              </label>
              <input
                type="email"
                className=" form-control"
                id="exampleInputEmail1"
              />
            </div>
            <div className="Rana">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Regions (Multiple)
              </label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
              />
            </div>
            <div className="Draco">
              <label htmlFor="exampleInputEmail1" className="form-label">
                States (Multiple)
              </label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
              />
            </div>
            <div className="Leo">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Area (Multiple)
              </label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
              />
            </div>
            <div className="Tom">
              <label htmlFor="exampleInputEmail1" className="form-label">
                CSI Outlets (Multiple)
              </label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
              />
            </div>
            <div className="Hardy">
              <label htmlFor="exampleInputEmail1" className="form-label">
                SSI Outlets (Multiple)
              </label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
              />
            </div>
            <div className="Lord">
              <label htmlFor="floatingInput">Designation</label>
              <select className="form-select">
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
                <option value="4">Four</option>
              </select>
            </div>
            <button type="submit" className="btn" id="zeus">
              <b>Register</b>
            </button>
            <button type="button" className="icon-button">
              <span className="material-icons" onClick={toggleModal}>
                highlight_off
              </span>
            </button>
            <button type="select" id="btn1" className="btn">
              <b>Select All</b>
            </button>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
}
