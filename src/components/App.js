import React, { Component } from 'react';
import NavBar from './NavBar';
import IdeaInputs from './IdeaInputs';
import CardContainer from './CardContainer';
import Card from './Card';
import '../styles/App.scss';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      
    }
  }

  render() {
    return (
      <div className="App">
        <NavBar />
        <IdeaInputs />
      </div>
    );
  }
}
