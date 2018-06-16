import React, { Component } from 'react';
import BookList from '../container/BookList';
import BookDetail from '../container/BookDetail';

export default class App extends Component {
  render() {
    return (
      <div>
        <BookList />
        <BookDetail />
      </div>
    );
  }
}
