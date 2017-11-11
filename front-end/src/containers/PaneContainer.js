import {connect} from 'react-redux';  
import {fetchPosts} from '../actions';
import Pane from '../components/Pane';

function mapStateToProps(state, ownProps) {
  const {sorting} = state;
  return {
    sorting: sorting,
  };
}

function mapDispatchToProps(dispatch) { 
    return {
      onSortingChange(sorting){
          dispatch({
          type: 'SET_SORTING',
          sorting
        })
    },
    fetchPosts: () => dispatch(fetchPosts()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Pane);  