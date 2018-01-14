import './main.css'

import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
import {Router, Route, browserHistory} from 'react-router';
import {syncHistoryWithStore} from 'react-router-redux';

// получаем редьюсеры
import reducers from 'reducers';

// компоненты контейнеры
import Layout from './node_modules/containers/layout';
import Phones from './node_modules/containers/phones';

// создаем хранилище
const store = createStore(
    reducers,
    composeWithDevTools(
        applyMiddleware(thunk)
    )
);

const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>
            <Route component={Layout}>
                <Route path='/' component={Phones}/>
            </Route>
        </Router>
    </Provider>,
    document.getElementById('root')
);
