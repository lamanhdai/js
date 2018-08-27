import {FETCH_WEATHER_REQUEST, FETCH_WEATHER_SUCCESS, FETCH_WEATHER_FAILURE} from '../actions';

const initialState = {
  fetching: false,
  weather: null,
  error: null
};

export default function(state = initialState, action) {
  switch(action.type) {
    case FETCH_WEATHER_REQUEST: return { ...state, ftching: true, error: null };
    case FETCH_WEATHER_SUCCESS: return { ...state, fetching: false, weather: action.weather };
    case FETCH_WEATHER_FAILURE: return { ...state, fetching: false, weather: null, error: action.error };
    default: return state;
  }
}