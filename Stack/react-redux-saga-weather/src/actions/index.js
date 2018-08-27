import { takeLatest, call, put } from 'redux-saga/effects';
import axios from 'axios';

const API_KEY = '0276a175d1359220f695083e2c54b897';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER_REQUEST = 'FETCH_WEATHER_REQUEST';
export const FETCH_WEATHER_SUCCESS = 'FETCH_WEATHER_SUCCESS';
export const FETCH_WEATHER_FAILURE = 'FETCH_WEATHER_FAILURE';
export function* watcherSaga() {
  yield takeLatest(FETCH_WEATHER_REQUEST, workerSaga);
}

// function that makes the api request and returns a Promise for response
function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city}`;
  const request = axios.get(url);
  return request;
}


// worker saga: makes the api call when watcher saga sees the action
function* workerSaga(action) {
  try {
    const response = yield call(fetchWeather, action.payload.city);
    const weather = response.data;

    // dispatch a success action to the store with the new dog
    yield put({ type: FETCH_WEATHER_SUCCESS, weather });
  } catch(error) {
    yield put({ type: FETCH_WEATHER_FAILURE, error});
  }
}
