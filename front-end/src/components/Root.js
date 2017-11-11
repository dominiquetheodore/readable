import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import App from './App'
import CategoryPage from './CategoryPage'
import PostPage from './PostPage'
import EditCommentPage from './EditCommentPage'
import AppBar from 'material-ui/AppBar';

const Root = ({ store }) => (
    <Router>
      <div>
        <Link style={{textDecoration:'none'}} to='/'><AppBar
          title="Readable" style={{backgroundColor: "#3F51B5"}}
          iconClassNameRight="muidocs-icon-navigation-expand-more"
        /></Link>

        <Route exact path="/" component={App} />
        <Route exact path="/:category" component={CategoryPage} />
        <Route exact path="/:category/:id" component={PostPage} />
        <Route exact path="/comments/:parentid/:id/edit" component={EditCommentPage} onClick={this.handleOpen} />
      </div>
    </Router>
)

export default Root
