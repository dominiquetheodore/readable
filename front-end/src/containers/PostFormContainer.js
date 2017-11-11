import React from 'react';  
import MenuItem from 'material-ui/MenuItem';
import { Field, reduxForm } from 'redux-form'
import { SelectField, TextField } from 'redux-form-material-ui';

// validation 
const required = value => (value == null ? 'Required' : undefined);

let PostFormContainer = props => {
  const { handleSubmit, categories } = props
  return (
    <form onSubmit={ handleSubmit } style={{paddingLeft:40}}>
      <div>
        <Field
            name="category"
            component={SelectField}
            hintText="Category"
            floatingLabelText="Category" validate={required}
          >
            {categories.map((category)=><MenuItem key={category.path} value={category.name} primaryText={category.name}  />)}
          </Field>
        <br />
        <Field name="author" hintText="Author" floatingLabelText="Author" component={TextField} type="text" validate={required} />
      </div>
        <Field name="title" hintText="Title" floatingLabelText="Title" component={TextField} type="text" validate={required} />
      <div>
        <Field name="body" hintText="Post" multiLine rows={5} floatingLabelText="Post" component={TextField} type="text" validate={required} />
      </div>
    </form>
  )
}

PostFormContainer = reduxForm({
  // a unique name for the form
  form: 'newpost',
})(PostFormContainer)

export default PostFormContainer;