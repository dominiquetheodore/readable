import React, { Component } from 'react'
import {connect} from 'react-redux';  
import PostPageContainer from '../containers/PostPageContainer'
import { fetchPosts } from '../actions';
import _ from 'underscore'
import NotFound from './NotFound'

class PostPage extends Component {
  componentWillMount()
  {
    this.props.fetchPosts()
  }

  render() {
    const id = this.props.match.params.id
    const post = this.props.posts.find((post)=>post.id===id)
    return (
      !_.isEmpty(post)?
        <div style={{ padding:20}}><PostPageContainer id={id} />
      </div>:<NotFound />
    );
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

export default connect(mapStateToProps, mapDispatchToProps)(PostPage);  
