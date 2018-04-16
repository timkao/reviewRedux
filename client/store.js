import { createStore } from 'redux';

// initial state
const initialState = {
  messages: [],
  newMessageEntry: ''
}

// action type
const GOT_MESSAGES_FROM_SERVER = 'GOT_MESSAGES_FROM_SERVER';
const WRITE_MESSAGE = 'WRITE_MESSAGE';
const GOT_NEW_MESSAGE_FROM_SERVER = 'GOT_NEW_MESSAGE_FROM_SERVER';

// action creator
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

export function gotNewMessageFromServer(message) {
  return {
    type: GOT_NEW_MESSAGE_FROM_SERVER,
    message: message
  };
}

function reducer(state = initialState, action) {
  switch (action.type) {
    case GOT_MESSAGES_FROM_SERVER:
      return Object.assign({}, state, {messages: action.messages});
    case WRITE_MESSAGE:
      return Object.assign({}, state, {newMessageEntry: action.newMessageEntry});
    case GOT_NEW_MESSAGE_FROM_SERVER:
      return Object.assign({}, state, {messages: [...state.messages, action.message]})
    default:
      return state;
  }
}

const store = createStore(reducer);
export default store;
