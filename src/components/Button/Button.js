import React, { Component } from 'react';
import css from './Button.module.css';
export default class Button extends Component {
  handleClick = () => {
    this.props.changePageNumber();
  };
  render() {
    return (
      <button
        type="click"
        className={css.loadButton}
        onClick={this.handleClick}
      >
        <span className="button-label">Load more</span>
      </button>
    );
  }
}
