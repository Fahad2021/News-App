import './App.css';

import React, { Component } from 'react';
import NavBar from './componesnts/NavBar';
import News from './componesnts/News';

class App extends Component {
  render() {
    return (
      <div>
       <NavBar></NavBar>
       <News></News>
      </div>
    );
  }
}

export default App;

