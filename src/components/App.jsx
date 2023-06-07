import React, { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Searchbar from 'components/Searchbar/Searchbar';
import css from './App.module.css';

import ImageGallery from './ImageGallery/ImageGallery';

export default class App extends Component {
  state = {
    searchValue: '',
  };

  onSubmit = inputValue => {
    this.setState({ searchValue: inputValue });
  };

  render() {
    const { searchValue } = this.state;
    return (
      <div className={css.app}>
        <Searchbar onSubmit={this.onSubmit} />
        <ImageGallery searchValue={searchValue} />
        <ToastContainer autoClose={2000} position="top-center" />
      </div>
    );
  }
}
