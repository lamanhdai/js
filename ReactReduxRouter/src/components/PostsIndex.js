import React, {Component} from 'react'
import {connect} from 'react-redux'
import {fetchPosts} from '../actions'
import {Link} from 'react-router-dom'

class PostsIndex extends Component {
  componentDidMount() {
    this.props.fetchPosts();
  }
  render() {
    return(
      <div>
        <div className="text-xs-right">
          <Link to="/new" className="btn btn-primary">Add to Post</Link>
        </div>
      </div>
    )
  }
}

// function mapDispatchToProps(dispatch) {
//   return bindActionCreators({fetchPosts}, dispatch);
// }
export default connect(null, {fetchPosts})(PostsIndex);