import React, {Component} from 'react';
import Header from '../Header/Header.js'
import './App.scss';


class App extends Component {
  constructor() {
    super();
    this.state = {}
  }
  render() {
    return (
      <div className="App">
        <img src={require('../images/chatan.jpg')} alt='American Village in Okinawa' className='chatan-img'/>
        <Header />
        
      </div>
    );
  }
}

export default App;
