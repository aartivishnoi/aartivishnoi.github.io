import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {value : ''};

    this.handlechange = this.handlechange.bind(this);
    this.handlesubmit = this.handlesubmit.bind(this);
  }

  handlechange(event) {
    this.setState({value : event.target.value});
  }

  handlesubmit(event) {
    console.log("A name was submitted :" +this.state.value);
  }

  render() {
    return (
    /*    <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React app</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>*/
          <form onSubmit = {this.submit}>
            <label>
                Name:
                   <input type="text" value = {this.state.value} onChange = {this.handlechange} />
           </label>
                   <input type="submit" value="Submit" />
          </form>

    );
  }
}

export default App;
