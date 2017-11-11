import React from 'react';  
import {connect} from 'react-redux';  
import { fetchCategories } from '../actions';
import CategoryList from '../components/CategoryList';

class CategoryListContainer extends React.Component {  

  componentWillMount() {
    this.props.fetchCategories()
  }

  componentDidMount() {
  }

  render() {
    const {categories} = this.props
    return (
      <div>
      <CategoryList categories={categories} />
      </div>
    )
  }
}

function mapStateToProps(state, ownProps) {
  return {
    categories: state.categories
  }
}

function mapDispatchToProps(dispatch) { 
  return {
    fetchCategories: () => dispatch(fetchCategories()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoryListContainer);  