import React from 'react';  
import {connect} from 'react-redux';  
import { fetchComments, deletePost, upvotePost, downvotePost, editPost } from '../actions'
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import {Card, CardActions, CardHeader, CardTitle, CardText} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import FontIcon from 'material-ui/FontIcon';
import { Link } from 'react-router-dom'
import dateFormat from '../utils/helper'
import EditPost from '../components/EditPost'

import EditButton from '../components/EditButton'

class PostContainer extends React.Component {  
  state = {
    open: false,
  };

  submit = (values) => {
    // print the form values to the console
    this.props.editPost(values)
    this.handleClose()
  }

  constructor(props) {
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleupVote = this.handleupVote.bind(this);
    this.handledownVote = this.handledownVote.bind(this);
  }

  componentWillMount() {
    
  }

  componentDidMount() {
    if (this.props.comments.length === 0){
      this.props.fetchComments(this.props.post.id)
    }
  }

  handleDelete() {
    const {post} = this.props
    this.props.deletePost(post.id)
  }

  handleupVote() {
    const {post} = this.props
    this.props.upvotePost(post.id)
  }

  handledownVote() {
    const {post} = this.props
    this.props.downvotePost(post.id)
  }

  handleOpen = () => {
    this.setState({open: true});
  };

  handleClose = () => {
    this.setState({open: false});
  };

  render() {
    const {post} = this.props
    const {comments} = this.props
    const postComments = comments.filter((comment)=>comment.parentId===post.id)
    const count = postComments.length
    const actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onClick={this.handleClose}
      />,
      <EditButton />
    ];

    return (
      <div>
      <ul>
        <Card>  
          <CardHeader
            title={post.author}
            subtitle={'#'+post.category + ' ' + dateFormat(post.timestamp) }
            avatar=""
          />
          <CardTitle><h2>{post.title}</h2></CardTitle>
          <CardText>{post.body}</CardText>
          <CardActions>
            <Link to={'/' + post.category + '/' + post.id}><RaisedButton default={true} label="View" /></Link>
            <RaisedButton primary={true} onClick={this.handleOpen} label="Edit" />
              <RaisedButton secondary={true} onClick={this.handleDelete} label="Delete" />
              <span>{post.voteScore}</span>
              <FontIcon onClick={this.handledownVote} className="material-icons">thumb_down</FontIcon>
              <FontIcon onClick={this.handleupVote} className="material-icons">thumb_up</FontIcon>
              <span>{count} <FontIcon className="material-icons">comment</FontIcon></span>
            </CardActions>
        </Card>

      </ul>

      <Dialog
          title="Edit Post"
          actions={actions}
          modal={true}
          open={this.state.open}
        >
          <EditPost id={post.id} onSubmit={this.submit} />
      </Dialog>
      </div>
    )
  }
}

function mapStateToProps(state, ownProps) {
  return {
    post: ownProps.post,
    comments: state.comments
  }
}

function mapDispatchToProps(dispatch) { 
  return {
    fetchComments: (id) => dispatch(fetchComments(id)),
    deletePost: (post) => dispatch(deletePost(post)),
    upvotePost: (id) => dispatch(upvotePost(id)),
    downvotePost: (id) => dispatch(downvotePost(id)), 
    editPost: (id) => dispatch(editPost(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostContainer);  