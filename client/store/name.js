
const UPDATE_NAME = 'UPDATE_NAME';

export function updateName (name) {
  const action = { type: UPDATE_NAME, name };
  return action;
}


const reducer = function(state = '', action) {
  switch(action.type) {
    case UPDATE_NAME:
      return action.name;
    default:
      return state;
  }
}

export default reducer;
