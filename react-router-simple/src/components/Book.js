import React from 'react';
import {
  Link,
  Route
} from 'react-router-dom';

const Book = ({match}) => {
  return(
    <div>
      <p>Book</p>
      <div><Link to={`${match.url}/harryPorter`}>Harry Porter</Link></div>
      <div><Link to={`${match.url}/doraemon`}>Doraemon</Link></div>

      <Route path={`${match.path}/:id`} component={BookItem}/>
    </div>
  )
}

const BookItem = ({match}) => <div>{match.params.id}</div>

export default Book;