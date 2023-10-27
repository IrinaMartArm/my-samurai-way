import React from "react";
import "./App.css";
import { Header } from "./layaut/header/Header";
import { Aside } from "./layaut/aside/Aside";
import { StyledApp } from "./styles/StyledApp";
import { ProfilePage } from "./layaut/main/profilePage/ProfilePage";
import styled from "styled-components";
import { Theme } from "./styles/Theme";
import { BrowserRouter, Route, Router } from "react-router-dom";
import { ProfileInfo } from "./layaut/main/profilePage/profileInfo/ProfileInfo";
import { Dialogs } from "./layaut/main/dialogs/Dialogs";
import { News } from "./layaut/main/news/News";
import { v1 } from "uuid";

type MessagesType = {
  id: string
  text: string
}

export type ContactType = {
  id: string
  name: string
  messages: MessagesType[]
}
type ContactsType = ContactType[]

export type PostType = {
  id: string
  post: string
  likes: number
}

export type PostsType = PostType[] 


function App() {

  const contacts:  ContactsType = [
    {id: v1(), 
    name: 'Ira',  
    messages: [
        {id: v1(), text: 'hi'},
        {id: v1(), text: 'hi'},
        {id: v1(), text: 'hi'},
    ]},
    {id: v1(), 
      name: 'Suren', 
      messages: [
        {id: v1(), text: 'hello'}
    ]},
    {id: v1(), 
      name: 'Arina', 
      messages: [
        {id: v1(), text: 'how are you'}
    ]},
    {id: v1(), 
      name: 'Liana', 
      messages: [
        {id: v1(), text: 'ok'}
    ]},
  ]

  const posts: PostsType = [
    {id: v1(), post: 'hi', likes: 28},
    {id: v1(), post: 'hello', likes: 28},
    {id: v1(), post: 'yoyo', likes: 28},
]


  return (
    <BrowserRouter>
      <StyledApp>
        <Header />
        <Aside />
        <Main>
          <Route path={"/profile"} render={()=> <ProfilePage posts={posts}/>} />
          {/* <Route path={"/dialogs"} component={ <Dialogs contacts={contacts}/>} /> */}
          <Route path={"/dialogs"} render={() => <Dialogs contacts={contacts}/>} />
          <Route path={"/news"} render={() => <News />} />
        </Main>
      </StyledApp>
    </BrowserRouter>
  );
}

const Main = styled.main`
  background-color: ${Theme.colors.primary};
  grid-area: m;
`;

export default App;
