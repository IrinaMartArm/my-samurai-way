import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { GlobalStyle } from './styles/GlobalStyles';
import {RootStateType, store} from './redux/Store'



export const rerender = (state: RootStateType) => {
    ReactDOM.render(
        <>
            <GlobalStyle/>
            <App store={store}/>
        </>,
        document.getElementById('root')
    );
}
rerender(store.getState())

store.subscribe(() => {
    rerender(store.getState())
})
