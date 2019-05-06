import * as React from 'react';
import * as ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css'; // Add this line

import { Provider } from 'react-redux';
import { createReduxStore } from './redux/store'


ReactDOM.render(
    <Provider store={createReduxStore()}>
    <App />
    </Provider>,
    document.getElementById('root'));

