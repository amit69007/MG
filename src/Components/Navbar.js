import React from 'react';
import "./Navbar.css"
export default function Navbar() {
return (
<>
<nav className=" navbar bg-light">
<button type='submit' className="btn" id='lol'><b>Dashboard</b></button>
</nav>
<button type="button" className="void">
<span className="material-icons-outlined">
format_list_bulleted
</span>
</button>
<button type="button" className="spark">
<span className="material-icons" id='adam'>
person
</span>
</button>
<div className="go">
<img src="./MG-non.svg" alt='list' id="low"/>
<button type="button" className="zoro"><ion-icon name="reader-outline"></ion-icon>
<span className="doll"><b>DASHBOARD</b></span>
</button>
</div>
</>
)
}