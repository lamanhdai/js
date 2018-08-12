import React, { Component } from 'react';
import * as math from 'mathjs'

import Button from './Button';
import './Calculator.scss';

const numbers = ['0','1','2','3','4','5','6','7','8','9']
const operator = ['-','+','/','*','sqrt','^2','sin','cos', '(', ')','Clear','='];

class Calculator extends Component {
  constructor() {
    super();
    this.countTemp = 0;
    this.state = {
      result: 0,
      historyLine: null,
      currentLine: null,
    }
  }
  updateResult = (result,currentLine,historyLine) => {
    this.setState({
      result,
      historyLine: historyLine ? [{id: historyLine.length,data: currentLine}, ...historyLine] : [{id: 0, data: currentLine}],
      currentLine: null,
    });
  }
  updateCurrentLine = (currentLine, value) => {
    if(value === 'sqrt' || value === 'sin' || value === 'cos') {
      this.setState({
        currentLine: currentLine ? `${currentLine}${value}`: value,
        result: null,
      });
    } if(value === '^2') {
      this.setState({
        currentLine: currentLine ? `${currentLine}${value}`: 0,
        result: null,
      });
    } else {
      this.setState({
        currentLine: currentLine ? `${currentLine}${value}`: value,
        result: null,
      });
    }
  }
  resetCalculator = () => {
    this.setState({
      result: 0,
      historyLine: null,
      currentLine: null,
    })
  }
  clickOperator = (value) => {
    let {historyLine, currentLine} = this.state;
    switch(value) {
      case '=':
        const openParenthesis = (currentLine.match(/(\()/g) || []);
        const closeParenthesis = (currentLine.match(/(\))/g) || []);
        const word = (currentLine.match(/sin|cos|sqrt/g) || []);
        if(openParenthesis.length !== closeParenthesis.length ||
        openParenthesis.length !== word.length) return;
        let newResult = math.eval(currentLine);
        currentLine = `${currentLine}=${newResult}`;
        this.updateResult(newResult,currentLine,historyLine);
        break;
      case 'Clear': this.resetCalculator(); break;
      default:
        this.updateCurrentLine(currentLine, value);
    }
  }
  render() {
    const {result, historyLine, currentLine} = this.state;
    return (
      <div className="Calculator">
        <div className="Calculator__result">{currentLine||result}</div>
        {
          numbers.map(name => (
            <div className="Calculator__input" key={name}>
              <Button className="Calculator__button" onClickOperator={this.clickOperator}>{name}</Button>
            </div>
          ))
        }
        {
          operator.map(name => (
            <div className="Calculator__input" key={name}>
              <Button className="Calculator__button" onClickOperator={this.clickOperator}>{name}</Button>
            </div>
          ))
        }
        <div className="history">
          <div>Result List:</div>
          {
            historyLine && historyLine.map(item => (
              <div key={item.id}>
                {item.data}
              </div>
            ))
          }
        </div>
      </div>
    );
  }
}

export default Calculator;
