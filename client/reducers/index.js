// root reducer. Here it will combine all reducers

import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

// import reducers here
import comments from './comments';
import posts from './posts';

// Combine all the reducers.
const rootReducer = combineReducers({
  posts,
  comments,
  routing: routerReducer
})

export default rootReducer;
