import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Button.scss';

class Button extends Component {
  clickButton = () => {
    this.props.onClickOperator(this.props.children);
  }
  render() {
    const {children, className} = this.props;
    return (
      <button onClick={this.clickButton} className={className} type="button">{children}</button>
    );
  }
}

Button.propTypes = {
  onClickOperator: PropTypes.func,
  className: PropTypes.string
}

export default Button;
