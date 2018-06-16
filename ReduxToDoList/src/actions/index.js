import uuid from 'uuid/v4';
export const ADD_TODO = 'ADD_TODO';
export const DELETE_TODO = 'DELETE_TODO';
export const FETCH_TODO = 'FETCH_TODO';

export function fetchTodo() {
  const request = fetch('https://jsonplaceholder.typicode.com/todos')
  .then(res => res.json())
  .catch(err => console.log(err));


  return (dispatch) => {
    request.then((datas) => {
      dispatch({
        type: FETCH_TODO,
        payload: datas
      })
    })
  }
}

// export function addTodo(title) {
//   return {
//     id: uuid(),
//     type: ADD_TODO,
//     title
//   }
// }

// export function delTodo(id) {
//   return {
//     id,
//     type: DELETE_TODO
//   }
// }