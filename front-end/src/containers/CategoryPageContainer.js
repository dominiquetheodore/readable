import React from 'react';  
import {connect} from 'react-redux';  
import { fetchCategories, fetchPosts } from '../actions';
import Cat from '../components/Cat';

class CategoryPageContainer extends React.Component {  
  componentDidMount() {
    this.props.fetchCategories()
  }

  render() {
    const {category} = this.props
    const {posts} = this.props
    const visiblePosts = posts.filter((post)=>post.category===category)
    return (
      <div style={{ padding: 20 }}>
      <Cat category={category} posts={visiblePosts} />
      </div>
    )
  }
}

function mapStateToProps(state, ownProps) {
  return {
    category: ownProps.category,
    posts: state.posts
  }
}

function mapDispatchToProps(dispatch) { 
  return {
    fetchCategories: () => dispatch(fetchCategories()),
    fetchPosts: () => dispatch(fetchPosts()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoryPageContainer);  