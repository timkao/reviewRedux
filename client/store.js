import axios from 'axios';
import { createStore, applyMiddleware } from 'redux';
import createLogger from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import socket from './socket';

// INITIAL STATE

const initialState = {
  messages: [],
  name: 'Reggie',
  messageContent: ''
};

// ACTION TYPES

const UPDATE_NAME = 'UPDATE_NAME';
const GET_MESSAGE = 'GET_MESSAGE';
const GET_MESSAGES = 'GET_MESSAGES';
const WRITE_MESSAGE = 'WRITE_MESSAGE';

// ACTION CREATORS

export const updateName = name => ({ type: UPDATE_NAME, name });
export const getMessage = message => ({ type: GET_MESSAGE, message });
export const getMessages = messages => ({ type: GET_MESSAGES, messages });
export const writeMessage = content => ({ type: WRITE_MESSAGE, content });

// THUNK CREATORS

export const postMessage = message => dispatch => {
  return axios.post('/api/messages', message)
    .then(res => res.data)
    .then(newMessage => {
      dispatch(getMessage(newMessage));
      socket.emit('new-message', newMessage);
    });
}

// REDUCER

function reducer (state = initialState, action) {

  switch (action.type) {

    case UPDATE_NAME:
      return {
        ...state,
        name: action.name
      };

    case GET_MESSAGES:
      return {
        ...state,
        messages: action.messages
      };

    case GET_MESSAGE:
      return {
        ...state,
        messages: [...state.messages, action.message]
      };

    case WRITE_MESSAGE:
      return {
        ...state,
        messageContent: action.content
      };

    default:
      return state;
  }

}

const store = createStore(
  reducer,
  applyMiddleware(
    thunkMiddleware,
    createLogger()
  )
);

export default store;
