import React, { Component } from 'react'
import CategoryPageContainer from '../containers/CategoryPageContainer'
import CategoryListContainer from '../containers/CategoryListContainer'
import PaneContainer from '../containers/PaneContainer'
import {fetchPosts } from '../actions'
import { connect } from 'react-redux'

// shows all posts in a category
class CategoryPage extends Component {
  componentDidMount()
  {
    if (this.props.posts.length === 0)
    {
      this.props.fetchPosts()
    }
  }
  
  render() {
    const category = this.props.match.params.category
    return (
      <div style={{ padding: 20 }}>
        <CategoryListContainer />
        <h2>{category}</h2>
        <PaneContainer />
        <CategoryPageContainer category={category} posts={this.props.posts} />
      </div>
    );
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
    fetchPosts: () => dispatch(fetchPosts()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoryPage);  
