import React, { Component } from 'react';
import store, { changeName } from '../store';

class NameEntry extends Component {

  constructor(props) {
    super(props);
    this.state = store.getState();
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.unsubscribe = store.subscribe(() => this.setState(store.getState()));
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  handleChange(ev) {
    const action = changeName(ev.target.value);
    store.dispatch(action);
  }

  handleSubmit(ev) {
    ev.preventDefault();
  }

  render() {

    const { handleChange, handleSubmit } = this;
    const { newNameEntry }  = this.state;

    return (
      <form className="form-inline" onSubmit={handleSubmit}>
        <label htmlFor="name">Your name:</label>
        <input
          type="text"
          name="name"
          placeholder="Enter your name"
          className="form-control"
          value={newNameEntry}
          onChange={handleChange}
        />
      </form>
    )
  }

}

export default NameEntry;
