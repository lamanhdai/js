export default function(state = null, action) {
  switch(action.type) {
    case 'SELECTEDBOOK': return action.payload;
  }
  return state
}