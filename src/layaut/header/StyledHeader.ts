import styled from "styled-components";
import { Theme } from "../../styles/Theme";

export const StyledHeader = styled.header`
    background-color: ${Theme.colors.secondary};
    grid-area: h;
    padding: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`