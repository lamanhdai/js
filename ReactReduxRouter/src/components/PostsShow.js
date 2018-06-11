import React, {Component} from 'react'

class PostsShow extends Component {
  render() {
    return <div>{this.props.match.params.id}</div>
  }
}

// const PostsShow = ({match}) =>  <div>{match.params.id}</div>

export default PostsShow