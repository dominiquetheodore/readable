import React, { Component } from 'react'
import EditComment from './EditComment'
import { editComment, fetchComments } from '../actions'
import {connect} from 'react-redux';  
import PropTypes from "prop-types";

class EditCommentPage extends Component {
  static contextTypes = {
    router: PropTypes.object
  }

  submit = (values) => {
    const parentid = this.props.match.params.parentid
    this.props.editComment(values)
    this.context.router.history.push("/posts/"+parentid);
  }

  render() {
    const parentid = this.props.match.params.parentid
    const id = this.props.match.params.id
    const {comments} = this.props
    const comment = comments.filter((comment)=>comment.id===id)
    return (
      <div style={{paddingLeft:40}}>
        <h2>Edit Comment</h2>
        <EditComment parentid={parentid} id={id} onSubmit={this.submit} comment={comment} />
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    comments: state.comments
  }
}

function mapDispatchToProps(dispatch) { 
  return {
    editComment: (comment) => dispatch(editComment(comment)),
    fetchComments: () => dispatch(fetchComments()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditCommentPage);