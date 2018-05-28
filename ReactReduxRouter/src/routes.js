import React from 'react'
import {Route, IndexRoute} from 'react-router-dom'
import App from './components/app';

export default function routes(props) {
  return (
    <Route path="/" component={App}/>
  );
}