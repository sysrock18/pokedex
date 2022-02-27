import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, compose as reduxCompose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import App from './containers/App';
import './index.css';
import { logActions } from './middlewares';
import pokemonReducer from './reducers/pokemonReducer';
import createSagaMiddleware from 'redux-saga'
import { pokemonSaga } from './sagas';

const sagaMiddleware = createSagaMiddleware()

const compose = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || reduxCompose

const composedEnhancers = compose(
  applyMiddleware(sagaMiddleware ,thunk, logActions)
)

const store = createStore(
  pokemonReducer,
  composedEnhancers
)

sagaMiddleware.run(pokemonSaga)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
