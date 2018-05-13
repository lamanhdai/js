import 'bootstrap/dist/css/bootstrap.css';
import * as React from 'react';
import './App.scss';
import { Question } from './component/Question';

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <Question />
        <Question />
        <Question />
        <Question />
        <Question />
      </div>
    );
  }
}

export default App;
