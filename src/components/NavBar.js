import React, { Component } from 'react';
import '../styles/NavBar.scss';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      
    }
  }

  render() {
    return (
      <div className="NavBar">
          <h1 className="ideabox-title">
            ideabox<span className="triples">triples</span>
        </h1>
        <form className="search-form">
          <input className="search-input" placeholder="Search"></input>
          <button type="submit" class="search-button" disabled>
          <i class="fas fa-search"></i>
          </button>
        </form>
      </div>
    );
  }
}
