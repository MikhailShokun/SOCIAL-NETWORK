import React from 'react';
import './index.css';
import * as serviceWorker from './serviceWorker';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import store from "./redux/redux-store";
import {Provider} from "react-redux";

    ReactDOM.render(
        <BrowserRouter>
            <Provider store={store}>
                <App />
            </Provider>
        </BrowserRouter>, document.getElementById('root')
    );



serviceWorker.unregister();