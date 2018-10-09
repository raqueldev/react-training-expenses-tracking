import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import store from './store'
import App from './AppContainer';
import * as serviceWorker from './serviceWorker';
import { getMe } from './actions/user' 
import { BrowserRouter } from 'react-router-dom'

function renderApp() {
    ReactDOM.render(
        <BrowserRouter>
            <Provider store={store}>
                <App />
            </Provider>
        </BrowserRouter>, 
    document.getElementById('root'));
}

store.dispatch(getMe()).then(renderApp, renderApp)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
