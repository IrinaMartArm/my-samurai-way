import styled from "styled-components";
import { Theme } from "../styles/Theme";

export const Btn = styled.button`
    background-color: ${Theme.colors.accent};
    max-width: 100px;
    border-radius: 3px;
    padding: 3px 17px;
`
export const Btn2 = styled.button`
    background-color: transparent;
    color: ${Theme.colors.accent};
    max-width: 100px;
    border-radius: 3px;
    padding: 3px 17px;
    border: 1px solid ${Theme.colors.accent};
`