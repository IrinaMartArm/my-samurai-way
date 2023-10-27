import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { GlobalStyle } from './styles/GlobalStyles';
import {state} from "./state";

ReactDOM.render(
  <>
    <GlobalStyle/>
    <App  state={state}/>
  </>,
  document.getElementById('root')
);