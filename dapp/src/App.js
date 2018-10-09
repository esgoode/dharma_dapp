import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Dharma, Web3 } from "@dharmaprotocol/dharma.js";

class App extends React.Component {
  constructor(
  props) {
    super(props);
    this.state = { address: [], text: '' };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  render() {
    return (
      <div>
        <h3>Add Underwriters</h3>
        <Underwriter address={this.state.address} />
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="new-underwriter">
            Guid:
          </label>
          <input
            id="new-underwriter"
            onChange={this.handleChange}
            value={this.state.text}
          />
          <button>
            Add #{this.state.address.length + 1}
          </button>
        </form>
      </div>
    );
  }

  handleChange(e) {
    this.setState({ text: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    if (!this.state.text.length) {
      return;
    }
    const newItem = {
      text: this.state.text,
      id: Date.now()
    };
    this.setState(state => ({
      address: state.address.concat(newItem),
      text: ''
    }));
  }
}

class Underwriter extends React.Component {
  render() {
    return (
      <ul>
        {this.props.address.map(item => (
          <li key={item.id}>{item.text}</li>
        ))}
      </ul>
    );
  }
}

export default App;
