import React from 'react';
import { Container } from './styles';


interface HeaderProps{
  black: boolean,
}

export function Header({ black }: HeaderProps){
 return(
  <Container className={black ? 'black' : ''}>
   <div className="logo">
    <a href="/">
     <img src="./img/netflix-logo.svg" alt="logo" />
    </a>
   </div> 
   <div className="user">
    <a href="/users">
     <img src="https://github.com/ezequiassantos11.png" alt="user" />
    </a>
   </div>
  </Container>
 );
}