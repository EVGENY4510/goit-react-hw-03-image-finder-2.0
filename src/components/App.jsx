import React, { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Searchbar from 'components/Searchbar/Searchbar';
import css from './App.module.css';

import ImageGallery from './ImageGallery/ImageGallery';

export default class App extends Component {
  state = {
    page: 1,
    images: [],
    searchValue: '',
  };

  onImageCondition = () => {
    this.setState({ images: false });
  };

  onImagesChange = params => {
    this.setState(prevState => ({
      images: [...prevState.images, ...params],
    }));
  };

  changePageNumber = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  onSubmit = inputValue => {
    this.setState({ searchValue: inputValue });
    this.setState({ page: 1 });
    this.setState({ images: [] });
  };

  render() {
    const { searchValue, page, images } = this.state;
    return (
      <div className={css.app}>
        <Searchbar onSubmit={this.onSubmit} />
        <ImageGallery
          onImageCondition={this.onImageCondition}
          changePageNumber={this.changePageNumber}
          onImagesChange={this.onImagesChange}
          searchValue={searchValue}
          page={page}
          images={images}
        />
        <ToastContainer autoClose={2000} position="top-center" />
      </div>
    );
  }
}
