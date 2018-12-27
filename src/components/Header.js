import React, { Component } from 'react';
import '../assets/css/Header.css';
import '../assets/css/App.css';

const Header = props => (
    <div className="header">
        <img className="nimbus-image" src={require('../assets/images/nimbus.png')} />
        <h1 className="title">Nimbus</h1>
        <h2 className="prompt">Enter a YouTube URL to begin watching!</h2>
    </div>
);

export default Header