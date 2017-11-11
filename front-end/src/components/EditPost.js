import React, { Component } from 'react';  
import {connect} from 'react-redux';  
import { fetchPosts, fetchPost } from '../actions';
import { Field, reduxForm } from 'redux-form'
import { TextField } from 'redux-form-material-ui';

const required = value => value ? undefined : 'Required'

class EditPost extends Component {

  componentDidMount() {   
      if (this.props.posts.length === 0)
      {
        this.props.fetchPosts()
      }
  }

  submitForm(values) {
      values.id = this.props.initialValues.id;
  }

  render(){
    const { handleSubmit } = this.props;
    
    return (
      <form onSubmit={handleSubmit}>
        <div>
        <Field name="author" hintText="Author" floatingLabelText="Author" component={TextField} type="text" validate={required} />
        </div>
        <div>
        <Field name="title" hintText="Title" floatingLabelText="Title" component={TextField} type="text" validate={required} />
        </div>
        <div>
        <Field name="body" hintText="Post" multiLine rows={3} floatingLabelText="Post" component={TextField} type="text" validate={required} />
        </div>
      </form>
    );
  }

}

const validate = values => {
      const errors = {}
      if (!values.author) {
        errors.username = 'Required'
      }

      if (!values.title) {
        errors.username = 'Required'
      }

      if (!values.body) {
        errors.username = 'Required'
      }
      
      return errors
    }

EditPost = reduxForm({
    form: 'initializeFromStateForm',
    validate,
    enableReinitialize : true
})(EditPost);

function mapStateToProps(state, ownProps) { 
  return {
    initialValues: state.posts.find((post)=>post.id===ownProps.id),
    posts: state.posts
  }
}

function mapDispatchToProps(dispatch) { 
  return {
    fetchPosts: () => dispatch(fetchPosts()),
    fetchPost: (id) => dispatch(fetchPost(id)),
  }
}

EditPost = connect(mapStateToProps,
  mapDispatchToProps
)(EditPost);

export default EditPost;