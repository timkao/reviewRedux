import React, { Component } from 'react';

export default class NewMessageEntry extends Component {

  constructor () {
    super();
    this.state = { content: '' };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange (evt) {
    this.setState({ content: evt.target.value });
  }

  handleSubmit (evt) {
    evt.preventDefault();
    console.log('TODO: send this message: ', this.state.content);
    this.setState({ content: '' });
  }

  render () {
    return (
      <form id="new-message-form" onSubmit={this.handleSubmit}>
        <div className="input-group input-group-lg">
          <input
            className="form-control"
            type="text"
            name="content"
            value={this.state.content}
            onChange={this.handleChange}
            placeholder="Say something nice..."
          />
          <span className="input-group-btn">
            <button className="btn btn-default" type="submit">Chat!</button>
          </span>
        </div>
      </form>
    );
  }
}
