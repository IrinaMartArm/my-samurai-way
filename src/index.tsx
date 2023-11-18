import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { GlobalStyle } from './styles/GlobalStyles';
import {store} from './redux/Store'
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";



export const rerender = () => {
    ReactDOM.render(
        <>
            <BrowserRouter>
                <Provider store={store}>
                    <GlobalStyle/>
                    <App/>
                </Provider>
            </BrowserRouter>
        </>,
        document.getElementById('root')
    );
}
rerender()

// store.subscribe(() => {
//     rerender(store.getState())
// })
