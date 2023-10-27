import styled from "styled-components";
import { Theme } from "../../styles/Theme";

export const StyledAside = styled.aside`
    background-color: ${Theme.colors.accent};
    grid-area: a;
    font-size: 24px;
    padding: 20px;
    & a:active {
        color: ${Theme.colors.primary}
    }
`