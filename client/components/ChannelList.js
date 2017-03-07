import React, { Component } from 'react';
import { Link } from 'react-router';
import store from '../store';

// hardcoded...for now!
const RANDOM_CHANNEL = '/channels/1';
const GENERAL_CHANNEL = '/channels/2';

export default class ChannelList extends Component {

  constructor () {
    super();
    this.state = store.getState();
  }

  componentDidMount () {
    this.unsubscribe = store.subscribe(() => this.setState(store.getState()));
  }

  componentWillUnmount () {
    this.unsubscribe();
  }

  render () {

    const { messages } = this.state;

    return (
      <ul>
        <li>
          <Link to={RANDOM_CHANNEL}>
            <span># really random</span>
            <span className="badge">{ messages.filter(message => message.channelId === 1).length }</span>
          </Link>
        </li>
        <li>
          <Link to={GENERAL_CHANNEL}>
            <span># generally speaking</span>
            <span className="badge">{ messages.filter(message => message.channelId === 2).length }</span>
          </Link>
        </li>
        <li>
          <Link to="/new-channel">Create a channel...</Link>
        </li>
      </ul>
    );
  }
}
