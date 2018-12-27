import '../assets/css/App.css';
import React, { Component } from 'react';
import Content from './Content';
//import Header from './Header';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsisV, faSearch } from '@fortawesome/free-solid-svg-icons'

library.add(faEllipsisV)
library.add(faSearch)

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
