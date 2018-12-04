import * as React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { render } from 'react-dom';
import reducer from './reducer';
import App from './containers/App';
import './index.scss';

declare const window;

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('app')
);