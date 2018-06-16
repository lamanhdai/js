import { FETCH_TODO, ADD_TODO, DELETE_TODO } from '../actions';
export default function(state = {all: [], todo: null}, action) {
  switch (action.type) {
    case FETCH_TODO: return { ...state, all: action.payload }
    default: return state;
  }
}