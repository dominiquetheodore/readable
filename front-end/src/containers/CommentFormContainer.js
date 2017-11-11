import React from 'react';  
import { Field, reduxForm } from 'redux-form'
import RaisedButton from 'material-ui/RaisedButton'

import { TextField } from 'redux-form-material-ui';

const required = value => (value == null ? 'Required' : undefined);

let CommentFormContainer = props => {
  const { handleSubmit } = props
  return (
    <div style={{paddingLeft:40}}>
    <form onSubmit={ handleSubmit }>
      <div>
        <Field name="author" hintText="Author" floatingLabelText="Author" component={TextField} type="text" validate={required} />
      </div>
      <div>
        <Field name="body" hintText="Comment" floatingLabelText="Comment" component={TextField} type="text" validate={required} />
      </div>
      <br />
      <RaisedButton secondary={true} type="submit" label="Submit" />
    </form>
    </div>
  )
}

CommentFormContainer = reduxForm({
  form: 'newpost'
})(CommentFormContainer)

export default CommentFormContainer;