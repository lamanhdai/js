import React, {Component} from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import {fetchPost, deletePost} from '../actions'
import {Link} from 'react-router-dom'

class PostsShow extends Component {
  static contextTypes = {
    router: PropTypes.object
  }
  componentDidMount() {
    this.props.fetchPost(this.props.match.params.id)
  }
  onDelete = () => {
    this.props.deletePost(this.props.match.params.id).then(() => {
      this.context.router.history.push('/posts')
    })
  }
  render() {
    const {post} = this.props;
    if(!this.props.post) return <div>Loading...</div>
    return <div>
      <Link to="/posts">Back to Index</Link>
      <button className="btn btn-danger pull-xs-right" onClick={this.onDelete}>Delete Post</button>
      <h3>{post.title}</h3>
      <h6>{post.categories}</h6>
      <p>{post.content}</p>
    </div>
  }
}
function mapStateToProps (state) {
  return { post: state.posts.post }
}
export default connect(mapStateToProps, {fetchPost, deletePost})(PostsShow)