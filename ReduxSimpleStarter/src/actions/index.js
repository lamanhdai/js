export function selectBook(book) {
  return {
    type: 'SELECTEDBOOK',
    payload: book
  }
}