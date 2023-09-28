import styled from "styled-components";

export const StyledApp = styled.div`
    display: grid;
    min-height: 100vh;
    grid-template-rows: 60px 1fr;
    grid-template-columns: 2fr 10fr;
    gap: 5px;
    grid-template-areas:
    "h h"
    "a m"
    "a m"

`