import React from 'react'
import {Route} from 'react-router-dom'
import App from './components/app';
import PostsIndex from './components/PostsIndex';
import PostsNew from './components/PostsNew';
import PostsShow from './components/PostsShow';

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
      <Route exact path="/" component={App} />
      <Route exact path="/posts" component={PostsIndex} />
      <Route path="/new" component={PostsNew} />
      <Route path="/greet" component={Greeting} />
      <Route path="/posts/:id" component={PostsShow} />
    </div>
  );
}