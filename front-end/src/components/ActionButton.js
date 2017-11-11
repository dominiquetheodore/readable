import React from 'react'
import { connect } from 'react-redux'
import { submit } from 'redux-form'
import FlatButton from 'material-ui/FlatButton'

const ActionButton = ({ dispatch }) =>
    <FlatButton
        label="Submit"
        type="submit"
        primary={true}
        onClick={() => 
          dispatch(submit('newpost'))
        } 
      />

export default connect()(ActionButton)