import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Login.css";
export default function Login() {
const [PassErr, setPassErr] = useState("");
const [email, setEmail] = useState("");
const [message, setMessage] = useState("");
function passwordHandler(event) {
const item = event.target.value;
if (item.length < 6) {
setPassErr(true);
} else {
setPassErr(false);
}
}
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
return (
<div className="login_container">
<div className="login-form">
<img src="./MG logo.svg" alt="Logo" className="Logo1 mb-3" />
<form style={{ width: "80%" }}>
<div className="form-floating mb-5">
<input type="email" className="form-control" id="floatingInput" placeholder="Email" value={email}
onChange={handleOnChange}
onClick={emailValidation}
style={{ width: "100%" }}
/>
<p>{message}</p>
<label htmlFor="floatingInput" className="Form1">
Email
</label>
</div>
<div className="form-floating mb-3">
<input
type="password"
className="form-control"
id="floatingPassword"
onChange={passwordHandler}
placeholder="Password"
style={{ width: "100%" }}
/>
{PassErr ? <span>Password is Not Valid</span> : ""}
<label htmlFor="floatingPassword" className="Form2">
Password
</label>
</div>
<Link type="click" className="btn btn-dark" id="link" to="/CSI">
<b>Login</b>
</Link>
<div style={{ float: "left", padding: "5px" }}>Forgot Password?</div>
</form>
</div>
</div>
);
}