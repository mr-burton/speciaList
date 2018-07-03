import React, { Component } from 'react';
import './App.css';

import SearchSpecialist from './components/SearchSpecialist';

class App extends Component {

  render() {
    return (
      <div className="App">
        <h1 className="text-center text-white">SpeciaList</h1>
        <p className="text-center text-white">Search For a Specialist Nearby</p> 
        <div>  
          <SearchSpecialist />
        </div>  
        {/* <div className="specialist-list">
          <ListSpecialist />
        </div>   */}
      </div>
    );
  }
}

export default App;