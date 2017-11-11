import React from 'react';  
import {connect} from 'react-redux';  
import Comment from '../components/Comment'

import { deleteComment, upvoteComment, downvoteComment } from '../actions'

class CommentContainer extends React.Component {  
  constructor(props) {
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleupVote = this.handleupVote.bind(this);
    this.handledownVote = this.handledownVote.bind(this);
  }

  handleDelete() {
    this.props.deleteComment(this.props.id)
  }

  handleupVote() {
    this.props.upvoteComment(this.props.id)
  }

  handledownVote() {
    this.props.downvoteComment(this.props.id)
  }

  render() {
    const {comment} = this.props
    return (
      <div>
      <Comment comment={comment} handleDelete={this.handleDelete} handleupVote={this.handleupVote} handledownVote={this.handledownVote} />
      </div>
    )
  }
}

function mapStateToProps(state, ownProps) {
  return {
    comment: ownProps.comment,
    id: ownProps.comment.id
  }
}

function mapDispatchToProps(dispatch) { 
  return {
    deleteComment: (id) => dispatch(deleteComment(id)),
    downvoteComment: (id) => dispatch(downvoteComment(id)),
    upvoteComment: (id) => dispatch(upvoteComment(id)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CommentContainer);  