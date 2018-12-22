import React, { Component } from 'react';
import '../assets/css/Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Header = props => (
    <div>
        <FontAwesomeIcon icon="ellipsis-v" className="drag" />
    </div>
);

export default Header