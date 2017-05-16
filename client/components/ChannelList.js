import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
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
          <NavLink to={RANDOM_CHANNEL} activeClassName="active">
            <span># really random</span>
            <span className="badge">{ messages.filter(message => message.channelId === 1).length }</span>
          </NavLink>
        </li>
        <li>
          <NavLink to={GENERAL_CHANNEL} activeClassName="active">
            <span># generally speaking</span>
            <span className="badge">{ messages.filter(message => message.channelId === 2).length }</span>
          </NavLink>
        </li>
      </ul>
    );
  }
}
