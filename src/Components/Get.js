import React, { Component } from "react";
import axios from "axios";
class Get extends Component {
constructor(props) {
super(props);
this.state = {
email:"",
password:""
};
}
changeHandler = (e) => {
this.setState({[ e.target.name]: e.target.value });
};
submitHandler = (e) => {
e.preventDefault();
const {email , password } = this.state;
let body = { 
email,
password
}
console.log(this.state);
// this.componentDidMount(){}
axios.post("https://sportsblog-backend.herokuapp.com/user/api/login",body)
.then((response) => {
console.log(response);
})
.catch((error) => {
console.log(error);
});
};
render() {
const { email, password } = this.state;
return (
<div>
<form onSubmit={this.submitHandler}>
<div>
<input
type="text"
name="email"
value={email}
onChange={this.changeHandler}
/>
</div>
<div>
<input
type="text"
name="password"
value={password}
onChange={this.changeHandler}
/>
</div>
<button type="submit">submit</button>
</form>
</div>
);
}
}
export default Get;