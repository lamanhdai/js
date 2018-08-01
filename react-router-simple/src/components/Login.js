import React, {Component} from 'react';

class Login extends Component {
  state = {
    redirectToReferrer: false
  }
  onClick = () => {
    fakeAuth.authenticate(() => {
      this.setState({redirectToReferrer: true});
    })
  }
  render() {
    const { from } = this.props.location.state || { from: { pathname: '/' } }
    const { redirectToReferrer } = this.state;

    if (redirectToReferrer) {
      return (
        <Redirect to={from} />
      )
    }
    return(
      <div>
        <button type="button" onClick={() => this.onClick()}>Login</button>
      </div>
    )
  }
}

export const fakeAuth = {

  isAuthenticated: false,
  authenticate(cb) {
    this.isAuthenticated = true
    setTimeout(cb, 100)
  },
}

export default Login;