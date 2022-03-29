import React from 'react';
import './index.css';
import * as serviceWorker from './serviceWorker';
import ReactDOM from 'react-dom';
import SocialJsApp from './App';

ReactDOM.render(
                <SocialJsApp />, document.getElementById('root')
    );



serviceWorker.unregister();