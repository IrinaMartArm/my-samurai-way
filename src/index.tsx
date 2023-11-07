import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { GlobalStyle } from './styles/GlobalStyles';
import {store} from './state'


export const rerender = (store) => {
    ReactDOM.render(
        <>
            <GlobalStyle/>
            <App  store={store} />
        </>,
        document.getElementById('root')
    );
}
rerender(store)

store.subscribe(rerender)
