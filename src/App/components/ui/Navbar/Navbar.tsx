import React, { useState } from "react";
import PropTypes from "prop-Types";
import style from "./Navbar.module.css";
interface INavbarProps {
    style?:{}
}
const initialState={}
const Navbar: React.FC<INavbarProps> = (props) => {
  const[state,setstate] = useState(initialState)

  return (
    <div className={style.Navbar} 
        data-testid="Navbar"
        style={props.style}>
      navbar
    </div>
  );
};

Navbar.propTypes = {
  style: PropTypes.object,
};
Navbar.defaultProps = {};
export default Navbar;
