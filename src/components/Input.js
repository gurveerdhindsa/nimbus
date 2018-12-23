import React, { Component } from 'react';
import '../assets/css/Input.css';

const Header = props => (
    <div>
        <input className="input" placeholder="Enter a youtube URL" type="text"></input>
    </div>
);

export default Header