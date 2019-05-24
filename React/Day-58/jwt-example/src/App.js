import * as React from 'react';
import {BrowserRouter} from 'react-router-dom';
import { Provider } from 'react-redux';
import {store} from './redux/store';
import { RouterOutlet } from './RouterOutlet';

export default class App extends React.Component {
    render(){
        return (
            <div>
                <Provider store={store} >
                <BrowserRouter>
                <RouterOutlet />
                </BrowserRouter>
                </Provider>
            </div>
        )
    }
}