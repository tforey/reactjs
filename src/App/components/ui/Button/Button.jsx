import React from 'react'
import './Button.css';

/**
 * un bouton!!!
 * @returns react component structure
 */
const Button=(props)=>{
    console.log(props);
    return <button className='Button'>
        {
             //accolade pour mettre du javascript la on passe par la props text
            props.text
        }
    </button>;
}

export default Button;