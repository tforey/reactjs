import React from 'react'

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
        {
            //...et là enfant
            props.children
        }  
    </button>;
}

/*
function Button(){
 return <button className='Button'>tom</button>
}*/

export default Button;