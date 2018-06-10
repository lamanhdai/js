import React , {Component} from 'react';
import {Field, reduxForm} from 'redux-form';
import {bindActionCreators} from 'redux';
import {createPost} from '../actions';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

class PostsNew extends Component {
  renderField = ({ input, label, type, meta: { touched, error } }) => (
    <div className="form-group">
      <label>{label}</label>
      <div>
        <input {...input} placeholder={label} type={type} className="form-control" />
        {touched && (error && <span className="text-danger">{error}</span>)}
      </div>
    </div>
  )

  render() {
    const {fields: {title, categories, content}, handleSubmit}= this.props;
    return(
      <form onSubmit={handleSubmit(this.props.createPost.bind(this))}>
        <h3>Create new post</h3>
        <Field name="title" type="text" component={this.renderField} label="Title"/>
        <Field name="categories" type="text" component={this.renderField} label="Categories"/>
        <Field name="content" type="text" component={this.renderField} label="Content"/>
        <div className="form-group">
          <button type="submit" className="btn btn-primary">Submit</button>
          <Link to="/" className="btn btn-danger">Back to list</Link>
        </div> 
      </form>
    )
  }
}

// validation in redux
const validate = values => {
  const errors = {};
  if(!values.title) {
    errors.title = 'Enter a username';
  }
  if(!values.categories) {
    errors.categories = 'Enter a categories';
  }
  if(!values.content) {
    errors.content = 'Enter a content';
  }
  return errors;
}
const ReduxForm = reduxForm({
  form: 'postNewForm',
  fields: ['title', 'categories', 'content'],
  validate
})(PostsNew);

// dispatch createpost with redux
function mapDispatchToProps (dispatch) {
  return bindActionCreators({createPost}, dispatch)
}
export default connect(null, mapDispatchToProps)(ReduxForm);


// state === {
//   form: {
//     PostsNewForm: {
//       title: '...',
//       categories: '...',
//       content: '...'
//     }
//   }
// }