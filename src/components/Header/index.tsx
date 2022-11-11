import Link from "next/link";
import React from 'react';
import { Container } from './styles';


interface HeaderProps{
  black: boolean,
}

export function Header({ black }: HeaderProps){
 return(
  <Container className={black ? 'black' : ''}>
   <div className="logo">
    <Link href="/">
      <a>
        <img src="./img/netflix-logo.svg" alt="logo" />
      </a>
    </Link>
   </div> 
   <div className="user">
    <Link href="/">
      <a>
      <img src="https://github.com/ezequiassantos11.png" alt="user" />
      </a>
    </Link>
   </div>
  </Container>
 );
}