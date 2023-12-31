import styled from "styled-components";
import {Theme} from "../../../styles/Theme";

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
`
const DialogPerson = styled.a`
  &:active {
    font-size: 20px;
    color: ${Theme.colors.accent};
  }
`
const DialogList = styled.div`
    padding: 2px;
    display: flex;
    justify-content: space-between;
`
const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding: 20px
  //border: 1px solid red;
`

export const S = {
    Dialogs,
    DialogPersons,
    DialogList,
    DialogPerson,
    Form,
}