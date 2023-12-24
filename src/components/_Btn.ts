import styled from "styled-components";
import { Theme } from "../styles/Theme";

export const Btn = styled.button`
    background-color: ${Theme.colors.accent};
    width: 70px;
    border-radius: 3px;
    padding: 3px;
`
export const Btn2 = styled.button`
    background-color: transparent;
    color: ${Theme.colors.accent};
    width: 70px;
    border-radius: 3px;
    padding: 3px;
    border: 1px solid ${Theme.colors.accent};
`