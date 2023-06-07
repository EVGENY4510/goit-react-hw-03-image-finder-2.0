import React, { Component } from 'react';
import { toast } from 'react-toastify';
import { AiOutlineSearch } from 'react-icons/ai';
import css from './Searchbar.module.css';

export default class Searchbar extends Component {
  state = {
    name: '',
  };

  handleChange = e => {
    const { value } = e.target;
    this.setState({ name: value.toLowerCase() });
  };

  onSubmitForm = e => {
    e.preventDefault();
    const { name } = this.state;
    if (name.trim() === '') {
      toast.error('Please enter a request!');

      return;
    }

    this.props.onSubmit(name);

    this.reset();
  };

  reset = () => {
    this.setState({ name: '' });
  };

  render() {
    const { name } = this.state;
    return (
      <header className={css.searchbar}>
        <form className={css.form} onSubmit={this.onSubmitForm}>
          <button type="submit" className={css.button}>
            <AiOutlineSearch size={25} />
          </button>

          <input
            className={css.input}
            onChange={this.handleChange}
            value={name}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}
