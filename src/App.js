import './App.css'
import Header from './Components/Header';
import React, { useEffect, useState } from 'react';
import Tmdb from './tmdb';
import MovieRow from './Components/MovieRow';
import FeaturedMovie from './Components/FeaturedMovie';

export default ()=>{

  const [movieList, setMovieList] = useState([]);
  const [featuredData, setFeaturedData] = useState(null);
  const [blackHeader, setBlackHeader] =  useState(false);

  useEffect(()=>{
    const loadAll = async ()=>{
      //Pegando a lista total
      let list = await Tmdb.getHomeList();
      setMovieList(list);

      //Pegando o Featured
      let originals = list.filter(i=>i.slug === 'originals');
      let randomChosen = Math.floor(Math.random() * (originals[0].items.results.length -1));
      let chosen = originals[0].items.results[randomChosen];
      let chosenInfo = await Tmdb.getMovieInfo(chosen.id,'tv');
      setFeaturedData(chosenInfo);
    }
    loadAll();
  },[]);

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
  return(
    <div className="page">
      <Header black={blackHeader}/>
      {featuredData &&
        <FeaturedMovie item={featuredData}/>
      }
      <section className="lists">
        {
          movieList.map((item, key)=>(
            <MovieRow key={key} title={item.title} items={item.items}/>
          ))
        }
      </section>
      <footer>
        Um projeto feito de <span role="img" aria-lable="coração">🧡</span> por Ezequias Santos<br/>
        Tutorial Base B7web <br />
        Direitos de imagens á Netflix <br />
        Dados do site Themoviedb.org
      </footer>
      {movieList <=0 &&
        <div className="loading">
          <img src="https://th.bing.com/th/id/R.d4214fd9d5d9c1a3ad1d1ba75cc3a286?rik=FZgXPB5lETXV%2bQ&riu=http%3a%2f%2fwww.wired.com%2fwp-content%2fuploads%2f2016%2f01%2fNetflix_LoadTime.gif&ehk=Z2vvzNiV55QVTIi2lkdxoCUbCKjz4RNfygXsjMcFk1I%3d&risl=&pid=ImgRaw" alt="carregando" />
        </div>
      }
    </div>
  )
}