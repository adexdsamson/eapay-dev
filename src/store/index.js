import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';

import reducer from './reducer';

const getMiddleware = () => {
  if(process.env.NODE_ENV === "production") {
    return applyMiddleware(thunk)
  } else {
    return applyMiddleware(createLogger(), thunk)
  }
}

export default createStore(reducer, composeWithDevTools(getMiddleware()))