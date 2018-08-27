import {FETCH_POSTS, FETCH_POST} from '../actions';

const INITIAL_STATE = { all: [], post: null};

export default function(state=INITIAL_STATE, action) {
  switch(action.type) {
    case FETCH_POST: return { ...state, post: action.payload };
    case FETCH_POSTS: return {...state, all: action.payload };
    default: return state;
  }
}