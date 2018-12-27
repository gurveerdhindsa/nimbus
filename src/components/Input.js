import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../assets/css/Fonts.css';
import '../assets/css/Input.css';

const Input = ({ handleInput, placeholder }) => (
    <div className="url-input">

        <input className={"input"}
               placeholder={placeholder}
               type="text"
               onChange={(e) => {handleInput(e)}} />
    </div>
);

export default Input