// import React from 'react';
// import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
// import { GlobalStyle } from './styles/GlobalStyles';
// import {addPost, state} from "./state";
import {rerender} from "./Render";
import {state} from "./state";

// let rerender = () => {
//     ReactDOM.render(
//         <>
//             <GlobalStyle/>
//             <App  state={state} addPost={addPost}/>
//         </>,
//         document.getElementById('root')
//     );
// }

rerender(state)