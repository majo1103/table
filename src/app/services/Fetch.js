import React from "react";

export class Fetch extends React.Component {
  //should be service
  render() {
    return (
      <div>
        <label htmlFor="name-input">Name</label>
        <input id="name-input" />
        <button>Load Greeting</button>
        <div data-testid="greeting-text" />
      </div>
    );
  }
}
