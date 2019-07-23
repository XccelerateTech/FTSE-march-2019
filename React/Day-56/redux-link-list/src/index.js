import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import {store} from './redux/store';
import {LinkList} from './LinkList'
import {UserList} from './UserList'
import API from './API'

import {Provider} from 'react-redux'

ReactDOM.render(

<Provider store={store}>
<LinkList />
<UserList />
<API />
</Provider>

, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
