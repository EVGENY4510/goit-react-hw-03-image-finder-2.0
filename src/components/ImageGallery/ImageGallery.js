import React, { Component } from 'react';
import css from './ImageGallery.module.css';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import Loader from 'components/Loader/Loader';
import Button from 'components/Button/Button';
import { toast } from 'react-toastify';
import { getImages } from 'api/PixabayApi';
import { ImWink } from 'react-icons/im';

export default class ImageGallery extends Component {
  state = {
    page: 1,
    images: [],
    loading: false,
  };

  async componentDidUpdate(prevProps, prevState) {
    const KEY_API = '35544273-b6528e3c4aa6f18d7727a7eb2';
    const { page } = this.state;
    const { searchValue } = this.props;
    const prevSearchValue = prevProps.searchValue;
    if (prevSearchValue !== searchValue) {
      this.setState({ page: 1 });
      this.setState({ images: [] });
    }
    if (prevSearchValue !== searchValue || page !== prevState.page) {
      this.setState({ loading: true });

      try {
        const data = await getImages(searchValue, page, KEY_API);

        if (data.hits.length !== 0) {
          return this.setState(prevState => ({
            images: [...prevState.images, ...data.hits],
          }));
        }
        this.setState({ images: false });
      } catch (error) {
        toast.error('Ops something went wrong');
      } finally {
        this.setState({ loading: false });
      }
    }
  }

  changePageNumber = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  render() {
    const { images, loading } = this.state;
    return (
      <div className={css.galleryWrapper}>
        {loading && <Loader />}

        <ul className={css.gallery}>
          {!images ? (
            <p className={css.noImageTitle}>
              Sorry, no such image, please try another one <ImWink />
            </p>
          ) : (
            images.map(({ id, webformatURL, largeImageURL, tags }) => {
              return (
                <ImageGalleryItem
                  key={id}
                  webformatURL={webformatURL}
                  largeImageURL={largeImageURL}
                  tags={tags}
                />
              );
            })
          )}
        </ul>
        {images.length > 0 && (
          <Button changePageNumber={this.changePageNumber} />
        )}
      </div>
    );
  }
}
