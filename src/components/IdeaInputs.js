import React, { Component } from 'react';
import '../styles/IdeaInputs.scss';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      
    }
  }

  render() {
    return (
      <div className="IdeaInputs">
        <main className="ideas-field">
          <p className="title-label">Title</p>
          <input className="title-input inputs"></input>
          <p className="body-label">Body</p>
          <input className="body-input inputs"></input>
          <button className="save-button buttons">Save</button>
          <button className="swill-button filter-button buttons">Swill</button>
          <button className="plausible-button filter-button buttons">Plausible</button>
          <button className="genius-button filter-button buttons">Genius</button>
          <button className="reset-button buttons">Reset</button>
        </main>
      </div>
    );
  }
}
