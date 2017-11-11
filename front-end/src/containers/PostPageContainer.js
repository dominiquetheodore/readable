import React from 'react';  
import {connect} from 'react-redux';  
import { fetchPosts, fetchComments, sendComment, upvoteComment, downvoteComment, deleteComment } from '../actions';
import PostContainer from '../containers/PostContainer';
import CommentContainer from '../containers/CommentContainer';
import CommentFormContainer from '../containers/CommentFormContainer';

class PostPageContainer extends React.Component {  
  constructor(props) {
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleupVote = this.handleupVote.bind(this);
    this.handledownVote = this.handledownVote.bind(this);
  }

  componentWillMount() {
    
  }

  componentDidMount() {
    this.props.fetchPosts()
    const {id} = this.props.id
    this.props.fetchComments(id)
  }

  submit = (values) => {
    values.parentId=this.props.id
    this.props.sendComment(values)
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
    const {posts} = this.props

    const {id} = this.props
    const {comments} = this.props

    const post = posts.find((post)=>post.id===id)
    
    return (
      <div>
        <PostContainer key={post.id} post={post} />
        <ul>
          {comments.filter((comment)=>comment.parentId===id).map(comment => (
            <div>
              <CommentContainer comment={comment} />
              <br />
            </div>
          ))}
          </ul>
          <div style={{paddingLeft:40}}>
          <h2>Add a comment</h2>
          </div>
          <CommentFormContainer onSubmit={this.submit} />
      </div>
    )
  }
}

function mapStateToProps(state, ownProps) {
  return {
    posts: state.posts, 
    comments: state.comments,
    id: ownProps.id
  }
}

function mapDispatchToProps(dispatch) { 
  return {
    fetchPosts: () => dispatch(fetchPosts()),
    fetchComments: (id) => dispatch(fetchComments(id)),
    sendComment: (comment) => dispatch(sendComment(comment)),
    deleteComment: (id) => dispatch(deleteComment(id)),
    upvoteComment: (id) => dispatch(upvoteComment(id)),
    downvoteComment: (id) => dispatch(downvoteComment(id)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostPageContainer);  