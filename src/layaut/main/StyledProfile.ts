import styled from "styled-components";
import { Theme } from "../../styles/Theme";

const StyledMain = styled.main`
    background-color: ${Theme.colors.primary};
    grid-area: m;

    img {

        width: 100%;
        height: 150px;
    }
`
const Box = styled.div`
    padding: 20px;
    img {
        width: 70px;
        height: 70px;
        border-radius: 50%;
    }
`
const NewMessage = styled.div`
    padding: 20px;
`
const Field = styled.input`
    width: 500px;
    height: 50px;
    border: 1px solid ${Theme.colors.border};
    background-color: ${Theme.colors.primary};
`

const Posts = styled.div`
    padding: 20px;
    img {
        width: 70px;
        height: 70px;
        border-radius: 50%;
    }
`


export const S = {
    StyledMain,
    Box,
    Posts,
    Field,
    NewMessage
}