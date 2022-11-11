import { useEffect, useState } from 'react';
import { FeaturedMovie } from '../components/FeaturedMovie';
import { Header } from '../components/Header';
import { MovieRow } from '../components/MovieRow';
import { Container } from "../styles/HomeStyles";
import {  getHomeList } from "../helpers/TMDB/GetGenres";
import { TMDBList } from '../helpers/Interfaces';
import { Loading } from '../components/Loading';


export default function Home() {  

  const [blackHeader, setBlackHeader] =  useState(false);
  const [ listFilms, setListFilms ] = useState<TMDBList[]>([] as TMDBList[]);


  useEffect(()=>{
    const scrollListener = ()=>{
      if(window.scrollY > 10){
        setBlackHeader(true);
      }else{
        setBlackHeader(false);
      }
    }
    window.addEventListener('scroll',scrollListener);
    return ()=>{
      window.removeEventListener('scroll', scrollListener);
    }
  },[]);

  const getAllFilms = async () => {
    const list: TMDBList[] = await getHomeList();
    setListFilms(list);
  };
  
  useEffect(()=>{
    getAllFilms();
  },[])
  
  if(listFilms.length <= 0){
    return(
      <Loading/>
    )
  }

  
  
  return (
    <Container>
      <Header black={blackHeader} />
      <FeaturedMovie items={listFilms} />
      { listFilms.map((item) =>(
        <MovieRow key={item.slug} items={item.items} title={item.title} slug={item.slug}/>
      ))}
      <footer>
        Um projeto feito de <span role="img" >🧡</span> por Ezequias Santos<br/>
        Tutorial Base B7web <br />
        Direitos de imagens á Netflix <br />
        Dados do site Themoviedb.org
      </footer>
    </Container>
  )
 
}
