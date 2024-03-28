import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom';

//react function based components.
export default function Navbar(props) {
  return (
    //React, the expression " " (backticks with a space inside) is known as a template literal or template string.
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
  <a className="navbar-brand" href="/">{props.title}</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <Link className="nav-link" to="/">Home</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/about">{props.aboutText}</Link>
      </li>
    </ul>
{/* template literal or template string in javascript ..ternary operator  */}
<div className={`custom-control custom-switch text-${props.mode==='light'?'dark':'light'}` }>
  <input type="checkbox" className="custom-control-input "  onClick={props.toggleMode} id="customSwitch1"/>
  <label className="custom-control-label " htmlFor="customSwitch1">Enable Dark mode</label>
</div>
  </div>
</nav>
  )
}
// we’re using PropTypes.string. When an invalid value is provided for a prop, a warning will be shown in the JavaScript console. if i have not assigned value in app.js and not even default value tht time error.
Navbar.propTypes={title:PropTypes.string.isRequired,
        aboutText: PropTypes.string
}


// Default Prop Values :define default values for your props by assigning to the special defaultProps property:
// Specifies the default values for props. When i did not pass in app.js value for title and about.
Navbar.defaultProps = {
  title: 'Set title here',
  aboutText:'About'
};
