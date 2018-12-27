import React, { Component } from 'react';
import Content from './Content';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsisV, faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import '../assets/css/App.css';

//Add Font Awesome icons to library
library.add(faEllipsisV);
library.add(faArrowLeft);

class App extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Content />
      </div>
    );
  }
}

export default App;
