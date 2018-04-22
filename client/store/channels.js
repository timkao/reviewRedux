import axios from 'axios';
import socket from '../socket';
import { writeChannel } from './index';

const GET_CHANNELS = 'GET_CHANNELS';
const GET_CHANNEL = 'GET_CHANNEL';

export function getChannels(channels) {
  const action = { type: GET_CHANNELS, channels};
  return action;
}

export function getChannel(channel) {
  return {
    type: GET_CHANNEL,
    channel: channel
  }
}

export function fetchChannels() {

  return dispatch => {
    return axios.get('/api/channels')
    .then(res => res.data)
    .then(channels => {
      const action = getChannels(channels);
      dispatch(action);
    })

  }
}

export function addChannel(channelName, history) {
  return dispatch => {
    return axios.post('/api/channels', {name: channelName})
    .then(res => res.data)
    .then(newChannel => {
      const action = getChannel(newChannel);
      dispatch(action);
      const action2 = writeChannel('');
      dispatch(action2);
      socket.emit('new-channel', newChannel);
      history.push(`/channels/${newChannel.id}`)
    })
  }
}

const reducer = function(state = [], action) {
  switch (action.type) {
    case GET_CHANNELS:
      return action.channels;

    case GET_CHANNEL:
      return [...state, action.channel];

    default:
      return state;
  }
}

export default reducer;
