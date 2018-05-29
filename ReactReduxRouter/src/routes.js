import React from 'react'
import {Route} from 'react-router-dom'
import App from './components/app';
import PostsIndex from './components/PostsIndex';

// nested route
const Greeting = ({match}) => {
  return (
    <div>
      <Route path={`${match.url}/hello`} render={() => 'Greeting 1'} />
      <Route path={`${match.url}/hi`} render={() => 'Greeting 2'} />
    </div>
  );
}
export default function routes(props) {
  return (
    <div>
      <Route path="/" component={App} />
      <Route path="/" component={PostsIndex} />
      <Route path="/greet" component={Greeting} />
    </div>
  );
}