import { createGlobalStyle } from "styled-components";
import { Theme } from "./Theme";

export const GlobalStyle = createGlobalStyle`
    *,
    *::before,
    *::after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        margin: 0;
        font-family:  'Kalam', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
            'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
            sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: white;
        line-height: 1.2;
        min-width: 360px;
    }

    a, a:link, a:visited  {
        text-decoration: none;
        cursor: pointer;
        color: ${Theme.colors.white};
    }

    a:hover  {
        text-decoration: none;
    }

    ul, ul li {
        list-style: none;
    }

    button, input[type="submit"] {
    /* display: inline-block; */
    box-shadow: none;
    background-color: transparent;
    background: none;
    border: none;
    cursor: pointer;
    }

    input:focus, input:active, 
    button:focus, button:active {
        outline: none;
    }

`