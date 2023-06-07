import React, { Component } from 'react';
import Modal from 'components/Modal/Modal';
export default class ImageGalleryItem extends Component {
  state = {
    showModal: false,
  };

  showModalToggle = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  render() {
    const { showModal } = this.state;
    const { webformatURL, tags, largeImageURL } = this.props;
    return (
      <div>
        {showModal && (
          <Modal
            src={largeImageURL}
            alt={tags}
            onClose={this.showModalToggle}
          />
        )}
        <li className="gallery-item">
          <img
            src={webformatURL}
            alt={tags}
            width={375}
            onClick={this.showModalToggle}
          />
        </li>
      </div>
    );
  }
}
