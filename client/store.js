import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';
import axios from 'axios';
import socket from './socket';

// initial state
const initialState = {
  messages: [],
  newMessageEntry: '',
  newNameEntry: ''
}

// action type
const GOT_MESSAGES_FROM_SERVER = 'GOT_MESSAGES_FROM_SERVER';
const WRITE_MESSAGE = 'WRITE_MESSAGE';
const GOT_NEW_MESSAGE_FROM_SERVER = 'GOT_NEW_MESSAGE_FROM_SERVER';
const CHANGE_NAME = 'CHANGE_NAME';

// action creator
export const changeName = function(name) {
  return {
    type: CHANGE_NAME,
    newNameEntry: name
  }
}


export const gotMessagesFromServer = function(messages) {
  return {
    type: GOT_MESSAGES_FROM_SERVER,
    messages: messages
  }
};

export const writeMessage = function(messageEntry) {
  return {
    type: WRITE_MESSAGE,
    newMessageEntry: messageEntry
  }
}

export const gotNewMessageFromServer = function(message) {
  return {
    type: GOT_NEW_MESSAGE_FROM_SERVER,
    message: message
  };
}

export const fetchMessages = function() {
  return (dispatch) => {
    axios.get('/api/messages')
    .then(res => res.data)
    .then(messages => {
      const action = gotMessagesFromServer(messages)
      dispatch(action);
    });
  }
}

export const postMessage = function(newMessage) {
  return (dispatch) => {
    axios.post('/api/messages', newMessage)
    .then(res => res.data)
    .then(message => {
      const action = gotNewMessageFromServer(message)
      dispatch(action)
      socket.emit('new-message', message);
    })
  }
}

function reducer(state = initialState, action) {
  switch (action.type) {
    case GOT_MESSAGES_FROM_SERVER:
      return Object.assign({}, state, {messages: action.messages});
    case WRITE_MESSAGE:
      return Object.assign({}, state, {newMessageEntry: action.newMessageEntry});
    case GOT_NEW_MESSAGE_FROM_SERVER:
      return Object.assign({}, state, {messages: [...state.messages, action.message]})
    case CHANGE_NAME:
      return Object.assign({}, state, {newNameEntry: action.newNameEntry});
    default:
      return state;
  }
}

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(createLogger(), thunkMiddleware))
);
export default store;
