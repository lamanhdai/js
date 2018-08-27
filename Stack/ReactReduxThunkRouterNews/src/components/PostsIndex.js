import React, {Component} from 'react'
import {connect} from 'react-redux'
import {fetchPosts} from '../actions'
import {Link} from 'react-router-dom'

class PostsIndex extends Component {
  componentDidMount() {
    this.props.fetchPosts();
  }
  renderPosts() {
    return this.props.posts.map(post => {
      return <li className="list-group-item" key={post.id}>
        <label className="label-post" htmlFor={post.id}>
          <span className="pull-xs-right">{post.categories}</span>
          <input type="checkbox" id={post.id} className="checkbox-post" />
          <strong>{post.title}</strong>
        </label>
        <Link to={`/posts/${post.id}`}>Read More</Link>
      </li>
    })
  }
  render() {
    return(
      <div>
        <div className="text-xs-right">
          <Link to="/new" className="btn btn-primary">Add to Post</Link>
        </div>
        <h3>Posts</h3>
        <ul className="list-group">
          {this.renderPosts()}
        </ul>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return { posts: state.posts.all}
}
export default connect(mapStateToProps, {fetchPosts})(PostsIndex);