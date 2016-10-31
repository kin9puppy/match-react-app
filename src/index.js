import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { createStore } from 'redux';
import { Provider, connect } from 'react-redux';
import reducer from './reducer/reducer.js';    

let ConnectedApp = connect(
    state => {
        return {
            store: state
        }
    }
)(App);

ReactDOM.render(
    <Provider store={createStore(reducer)}>
        <ConnectedApp />
    </Provider>,
  document.getElementById('root')
);
