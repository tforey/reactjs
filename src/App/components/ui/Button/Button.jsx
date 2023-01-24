import React,{useState} from 'react'
import style from './Button.module.css'

/**
 * un bouton !!!
 * extension nav "React Developper Tools" pour voir les états des état sur le navigateur
 * @returns react component structure
 */
const Button=(props)=>{
    const[isClicked, setIsClicked]  = useState(false);//état initial de l'état de l'objet
    console.log(props);
    return (
      <button className={
                 //isClicked?style.Button+' '+style.clicked:style.Button
                 `${style.Button}${isClicked?' '+style.clicked:''}`} 
              onClick={(arg)=>{console.log(arg);
              props.onButtonClick();
         }}>
        {props.children}
    </button>);
}

export default Button;