// Whoa?!? What is this?
// Thanks to the style-loader, sass-loader and css-loader, webpack allows us import scss,
// compiles it into css, and then auto-magically injects a <style> tag onto the DOM!
// Wowzers! Check out the webpack.config.js to see how to add them!
import './index.scss';

// import store, { fetchMessages } from './store';
// function onMainEnter () {
//   const thunk = fetchMessages();
//   store.dispatch(thunk);
// };
import axios from 'axios';
import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router } from 'react-router-dom';
import { Main } from './components';

ReactDOM.render(
  <Router>
    <Main />
  </Router>,
  document.getElementById('app')
);
