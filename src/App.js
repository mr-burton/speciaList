import React, { Component } from 'react';
import './App.css';

import ListSpecialist from './components/ListSpecialist';
import SearchSpecialist from './components/SearchSpecialist';

class App extends Component {

  render() {
    return (
      <div className="App">
        <h1 className="text-center text-white">SpeciaList</h1>
        <div className="specialist-input">  
          <SearchSpecialist />
        </div>  
        <div className="specialist-list">
          <ListSpecialist />
        </div>  
      </div>
    );
  }
}

export default App;