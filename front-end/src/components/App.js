import React, { Component } from 'react'
import CategoryListContainer from '../containers/CategoryListContainer'
import PostListContainer from '../containers/PostListContainer'
import PostFormContainer from '../containers/PostFormContainer'
import PaneContainer from '../containers/PaneContainer'
import ActionButton from '../components/ActionButton'
import {sendPost} from '../actions'
import {connect} from 'react-redux'; 

import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';

const style = {
  margin: 0,
  top: 'auto',
  right: 30,
  bottom: 20,
  left: 'auto',
  position: 'fixed',
}; 

class App extends Component {
  state = {
    open: false,
  };

  handleOpen = () => {
    this.setState({open: true});
  };

  handleClose = () => {
    this.setState({open: false});
  };

  submit = (values) => {
    this.props.sendPost(values)
    this.setState({open: false});
  }

  render() {
    const actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onClick={this.handleClose}
      />,
      <ActionButton />,
    ];

    return (
      <div style={{ padding: 20 }}>
        <CategoryListContainer />
        <PaneContainer />
        <PostListContainer />
        <FloatingActionButton secondary={true} style={style} onClick={this.handleOpen}>
            <ContentAdd />
        </FloatingActionButton>
        <Dialog
          title="New Post"
          actions={actions}
          modal={true}
          open={this.state.open}
        >
        <PostFormContainer categories={this.props.categories} onSubmit={this.submit} open={this.state.open} />
        </Dialog>
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    categories: state.categories
  }
}

function mapDispatchToProps(dispatch) { 
  return {
    sendPost: (post) => dispatch(sendPost(post)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
