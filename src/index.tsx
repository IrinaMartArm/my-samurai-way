import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { GlobalStyle } from './styles/GlobalStyles';
import {addPost, state, StateType, subscribe} from "./state";


export const rerender = (state: StateType) => {
    ReactDOM.render(
        <>
            <GlobalStyle/>
            <App  state={state} addPost={addPost}/>
        </>,
        document.getElementById('root')
    );
}
rerender(state)

// subscribe(rerender)
