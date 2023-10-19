import styled from "styled-components";

const Dialogs = styled.div`
    display: grid;
    grid-template-columns: 2fr 10fr;
    padding: 30px;
`
const DialogItems = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    font-size: 16px;
    &:checked {
        font-size: 20px;
    }
`
const DialogItem = styled.a`
    
`
const DialogList = styled.div`
    
`

export const S = {
    Dialogs,
    DialogItems,
    DialogList,
    DialogItem
}