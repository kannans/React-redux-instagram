import { createStore, compose } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';

// import root reducer
import rootReducer from '../reducers/index';

// import initial data
import comments from '../data/comments';
import posts from '../data/posts';

const defaultState = {
  posts,
  comments
}

const store = createStore(rootReducer, defaultState);

const history = syncHistoryWithStore(browserHistory, store);

export default store;
