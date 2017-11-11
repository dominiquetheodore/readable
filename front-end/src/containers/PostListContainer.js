import React from 'react';  
import {connect} from 'react-redux';  
import { fetchPosts } from '../actions';
import PostContainer from '../containers/PostContainer';

class PostListContainer extends React.Component {  

  componentWillMount() {
    if (this.props.posts.length === 0)
    {
      this.props.fetchPosts()
    }
  }

  render() {
    const {posts} = this.props
    return (
      <div>
      {posts.map(post => (
        <PostContainer key={post.id} post={post} />
      ))}
      </div>
    )
  }
}

function mapStateToProps(state, ownProps) {
  return {
    posts: state.posts
  }
}

function mapDispatchToProps(dispatch) { 
  return {
    fetchPosts: () => dispatch(fetchPosts()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostListContainer);  