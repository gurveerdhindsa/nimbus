import React, { Component } from 'react';
import '../assets/css/Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Header = props => (
    <div>
        <FontAwesomeIcon className="icon-drag" icon="ellipsis-v" />

        <img className="nimbus-image" src={require('../assets/images/nimbus.png')} />
    </div>
);

export default Header