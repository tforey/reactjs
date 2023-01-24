import React, { useEffect, useState } from "react";
import style from "./Button.module.css";
import PropTypes from "prop-types";

/**
 * un bouton !!!
 * extension nav "React Developper Tools" pour voir les états des état sur le navigateur
 * @returns react component structure
 */
const Button = (props) => {
  const [isClicked, setIsClicked] = useState(false); //état initial de l'état de l'objet
  //hook d'effet de cycle de vie d'une valeur ou de composant
  useEffect(() => {
    //si on met pas le if on va tourner en boucle !
    if (isClicked) {
      setTimeout(() => {
        setIsClicked(false);
      }, 750);
    }
  }, [isClicked]);
  console.log(props);
  return (
    <button
      style={{...props.style,backgroundColor:props.backgroundColor}}
      className={
        //isClicked?style.Button+' '+style.clicked:style.Button
        `${style.Button}${isClicked ? " " + style.clicked : ""}`
      }
      onClick={(arg) => {
        setIsClicked(true);
        console.log(arg);
        props.onButtonClick();
      }}
    >
      {props.children}
    </button>
  );
};

Button.propTypes = {
  backgroundColor:PropTypes.string,
  onButtonClick: PropTypes.func.isRequired,
  children: PropTypes.any.isRequired,
};

Button.defaultProps = {
  onButtonClick: () => {
  },
};

export default Button;
