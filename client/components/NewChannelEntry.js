import React, { Component } from 'react';

export default class NewChannelEntry extends Component {

  render () {
    return (
      <form>
        <div className="form-group">
          <label htmlFor="name">Create a Channel</label>
          <input className="form-control" type="text" name="name" placeholder="Enter channel name" />
        </div>
        <div className="form-group">
          <button type="submit" className="btn btn-default">Create Channel</button>
        </div>
      </form>
    );
  }
}
