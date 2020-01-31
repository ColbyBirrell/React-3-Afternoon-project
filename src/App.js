import React, { Component } from 'react';
import './App.css';
import Child from './components/Child'
// import UpdateState from './components/UpdateState'
// import data from './data'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {

    }
  }

  render() {
    return (
      <div className="App">
        <header>Home</header>
        <div>
          {/* <div>whitebox</div> */}
          <Child />
          <div>

          </div>
        </div>

      </div>
    );
  }
}

export default App;
