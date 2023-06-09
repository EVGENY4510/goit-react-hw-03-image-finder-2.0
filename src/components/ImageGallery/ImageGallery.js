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
    loading: false,
  };

  async componentDidUpdate(prevProps, prevState) {
    const { page } = this.props;
    const { searchValue } = this.props;
    const prevSearchValue = prevProps.searchValue;

    if (prevSearchValue !== searchValue || page !== prevProps.page) {
      this.setState({ loading: true });

      try {
        const data = await getImages(searchValue, page);

        if (data.hits.length !== 0) {
          return this.props.onImagesChange(data.hits);
        }
        this.props.onImageCondition();
      } catch (error) {
        toast.error('Ops something went wrong');
      } finally {
        this.setState({ loading: false });
      }
    }
  }

  render() {
    const { images } = this.props;
    const { loading } = this.state;
    return (
      <div className={css.galleryWrapper}>
        {loading && <Loader />}

        <ul className={css.gallery}>
          {!images > 0 ? (
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
          <Button changePageNumber={this.props.changePageNumber} />
        )}
      </div>
    );
  }
}
