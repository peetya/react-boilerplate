import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import reducers from './reducers';
import App from './components/App';

ReactDOM.render(
    (
        <Provider store={createStore((reducers))}>
            <HashRouter>
                <App />
            </HashRouter>
        </Provider>
    ),
    document.getElementById('root'),
);
