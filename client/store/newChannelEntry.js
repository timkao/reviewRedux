const WRITE_CHANNEL = 'WRITE_CHANNEL';

export function writeChannel(channel) {
  const action = { type: WRITE_CHANNEL, channel};
  return action;
}


const reducer = function(state = '', action) {
  switch (action.type) {
    case WRITE_CHANNEL:
      return action.channel
    default:
      return state
  }
}

export default reducer;
