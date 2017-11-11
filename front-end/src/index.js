import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Root from './components/Root';
import registerServiceWorker from './registerServiceWorker';
import { createStore, applyMiddleware } from 'redux'
import promise from 'redux-promise';
import reducer from './reducers/index'
import { createLogger } from 'redux-logger'
import { Provider } from 'react-redux'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const middleware = [ promise ]

if (process.env.NODE_ENV !== 'production') {
  middleware.push(createLogger())
}

const store = createStore(
  reducer,
  applyMiddleware(...middleware)
)

ReactDOM.render(<Provider store={store}><MuiThemeProvider><Root /></MuiThemeProvider></Provider>, document.getElementById('root'));
registerServiceWorker();
