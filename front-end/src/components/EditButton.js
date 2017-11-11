import React from 'react'
import { connect } from 'react-redux'
import { submit } from 'redux-form'
import FlatButton from 'material-ui/FlatButton'

// uses remote submit
const EditButton = ({ dispatch }) =>
    <FlatButton
        label="Submit"
        type="submit"
        primary={true}
        onClick={() => 
          dispatch(submit('initializeFromStateForm'))
        } 
      />

export default connect()(EditButton)