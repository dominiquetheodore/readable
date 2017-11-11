import React, { Component } from 'react';  
import {connect} from 'react-redux';  
import { fetchPost, fetchComments } from '../actions';
import { Field, reduxForm } from 'redux-form'
import RaisedButton from 'material-ui/RaisedButton'
import { TextField } from 'redux-form-material-ui';

class EditComment extends Component {
  componentDidMount() {   
      const parentid = this.props.parentid
      if (this.props.comments.length === 0)
      {
        this.props.fetchComments(parentid)
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
      	<Field name='author' component={TextField} placeholder='Author' label='Author: ' />
        <br />
        <Field name='body' component={TextField} placeholder='Title' label='Title for Post: ' />
      </div>
      <br />
      <RaisedButton secondary={true} type="submit" label="Submit" />
      </form>
    );
  }

}

EditComment = reduxForm({
    form: 'initializeFromState',
    enableReinitialize : true
})(EditComment);

function mapStateToProps(state, ownProps) { 
  return {
    initialValues: state.comments.find((comment)=>comment.id===ownProps.id),
    posts: state.posts,
    comments: state.comments
  }
}

function mapDispatchToProps(dispatch) { 
  return {
    fetchComments: (id) => dispatch(fetchComments(id)),
    fetchPost: (id) => dispatch(fetchPost(id)),
  }
}

EditComment = connect(mapStateToProps,
  mapDispatchToProps
)(EditComment);

export default EditComment;