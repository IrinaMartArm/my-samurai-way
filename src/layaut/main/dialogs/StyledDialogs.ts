import styled from "styled-components";

const Dialogs = styled.div`
    display: grid;
    grid-template-columns: 2fr 10fr;
    padding: 30px;
`
const DialogPersons = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    font-size: 16px;
    &:checked {
        font-size: 20px;
    }
`
const DialogPerson = styled.a`
    
`
const DialogList = styled.div`
    padding: 2px;
`

export const S = {
    Dialogs,
    DialogPersons,
    DialogList,
    DialogPerson
}