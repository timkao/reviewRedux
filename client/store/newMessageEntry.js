const WRITE_MESSAGE = 'WRITE_MESSAGE';

export function writeMessage (content) {
  const action = { type: WRITE_MESSAGE, content };
  return action;
}

const reducer = function(state = '', action) {
  switch (action.type) {
    case WRITE_MESSAGE:
      return action.content;
    default:
      return state;
  }
}

export default reducer;
