import { createStore, applyMiddleware, combineReducers } from 'redux';
import loggingMiddleware from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import messages from './messages';
import channels from './channels';
import name from './name';
import newMessageEntry from './newMessageEntry';
import newChannelEntry from './newChannelEntry';

const newReducer = combineReducers({
  messages: messages,
  channels: channels,
  name: name,
  newMessageEntry: newMessageEntry,
  newChannelEntry: newChannelEntry
})


const store = createStore(
  newReducer,
  composeWithDevTools(applyMiddleware(
    thunkMiddleware,
    loggingMiddleware
  ))
);

export default store;
export * from './messages';
export * from './channels';
export * from './name';
export * from './newMessageEntry';
export * from './newChannelEntry';
