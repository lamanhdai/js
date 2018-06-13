import axios from 'axios';
export const FETCH_POSTS = 'FETCH_POSTS';
export const CREATE_POSTS = 'CREATE_POSTS';
export const FETCH_POST = 'FETCH_POST';
export const DELETE_POST = 'DELETE_POST';

const ROOT_URL = 'http://reduxblog.herokuapp.com/api';
const API_KEY = '?key=lkajdsfapipwietpw'
export function fetchPosts() {
  const request = axios.get(`${ROOT_URL}/posts${API_KEY}`)
  return (dispatch) => {
    request.then(({data}) => {
      dispatch({
        type: FETCH_POSTS,
        payload: data
      })
    })
  }
}

export function createPost(props) {
  const request = axios.post(`${ROOT_URL}/posts${API_KEY}`, props)
  return (dispatch) => {
    request.then(status => {
      dispatch({
        type: CREATE_POSTS,
        payload: request
      })
    })
  }
}

export function fetchPost(id) {
  const request = axios.get(`${ROOT_URL}/posts/${id}${API_KEY}`)
  return (dispatch) => {
    request.then(status => {
      dispatch({
        type: FETCH_POST,
        payload: request
      })
    })
  }
}

export function deletePost(id) {
  const request = axios.delete(`${ROOT_URL}/posts/${id}${API_KEY}`)
  return (dispatch) => {
    request.then(status => {
      dispatch({
        type: DELETE_POST,
        payload: request
      })
    })
  }
}