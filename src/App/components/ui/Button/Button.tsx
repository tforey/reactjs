import React, { ReactElement, useEffect, useState } from "react";
import style from "./Button.module.css";
import PropTypes from "prop-types";
interface IButtonProps {
  onButtonClick?: Function;
  backgroundColor?: string; //"?"" pour indiquer pas obligatoire
  style: {}; //primitive d'un objet
  children: string | ReactElement | Array<ReactElement | string>;
  type?: "submit" | "reset" | "button";
}

/**
 * un bouton !!!
 * extension nav "React Developper Tools" pour voir les états des état sur le navigateur
 * @returns react component structure
 */
const Button: React.FC<IButtonProps> = (props) => {
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
      style={{ ...props.style, backgroundColor: props.backgroundColor }}
      className={
        //isClicked?style.Button+' '+style.clicked:style.Button
        `${style.Button}${isClicked ? " " + style.clicked : ""}`
      }
      type={props.type}
      onClick={(arg) => {
        setIsClicked(true);
        console.log(arg);
        if (undefined !== props.onButtonClick) {
          props.onButtonClick();
        }
      }}
    >
      {props.children}
    </button>
  );
};

Button.propTypes = {
  backgroundColor: PropTypes.string,
  onButtonClick: PropTypes.func.isRequired,
  children: PropTypes.any.isRequired,
  type: PropTypes.oneOf(["submit", "reset", "button"]),
};

Button.defaultProps = {
  onButtonClick: () => {},
  type: "button",
};

export default Button;
