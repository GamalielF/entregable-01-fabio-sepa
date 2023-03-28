import React from 'react'
import "./styles/button.css"

export const Button = ({handleNewQuote}) => {
  return <button className='button' onClick={handleNewQuote}>Probar mi suerte</button>;
};

export default Button;
