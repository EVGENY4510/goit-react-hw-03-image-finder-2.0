import React, { Component } from 'react';
export default class Button extends Component {
  handleClick = () => {
    this.props.changePageNumber();
  };
  render() {
    return (
      <button type="click" className="button" onClick={this.handleClick}>
        <span className="button-label">Load more</span>
      </button>
    );
  }
}
