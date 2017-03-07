// Whoa?!? What is this?
// Thanks to the style-loader, sass-loader and css-loader, webpack allows us import scss,
// compiles it into css, and then auto-magically injects a <style> tag onto the DOM!
// Wowzers! Check out the webpack.config.js to see how to add them!
import './index.scss';

import axios from 'axios';
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory, IndexRedirect } from 'react-router';
import { Main, MessagesList, NewChannelEntry } from './components';
import store, { getMessages } from './store';

const onMainEnter = () => {
  axios.get('api/messages')
    .then(res => res.data)
    .then(messages => store.dispatch(getMessages(messages)))
};

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Main} onEnter={onMainEnter}>
      <Route path="new-channel" component={NewChannelEntry} />
      <Route path="channels/:channelId" component={MessagesList} />
      <IndexRedirect to="channels/1" />
    </Route>
  </Router>,
  document.getElementById('app')
);
