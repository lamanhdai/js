import {FETCH_WEATHER} from '../actions'
export default function(state = [], action) {
  switch(action.type) {
    case FETCH_WEATHER: return action.payload.data ? [action.payload.data, ...state] : [...state];
  }
  return state;
}