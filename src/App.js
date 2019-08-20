import React, {Component} from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {}
  }
  render() {
    return (
      <div className="App">
        <img src={require('./images/chatan.jpg')} alt='American Village in Okinawa' className='chatan-img'/>
        <header className="App-header">
        </header>
      </div>
    );
  }
}

export default App;
