import { useEffect, useState } from "react";
import { TMDBList, TMDBListFilm } from "../../helpers/Interfaces";
import { getFeatured } from "../../helpers/TMDB/GetGenres";
import { Loading } from "../Loading";
import { Container } from "./styles";

interface FeaturedMovieProps{
  items: TMDBList[],
}




export function FeaturedMovie({items}: FeaturedMovieProps){
  
  const [ feactured, setFeactured ] = useState({} as TMDBListFilm);


  async function newFeatured(){
    const newFeactured: TMDBListFilm = await getFeatured(items);
    console.log("feactured", feactured);
    setFeactured(newFeactured);
  }

  useEffect(()=>{
    newFeatured();
  },[items])


  let description = feactured.overview;
  
  if(description && description.length > 200){
    description = description.substring(0, 200)+'...';
  }
    
  let firstDate = new Date(feactured.first_air_date);
  let genres = [];
  for(let i in feactured.genres){
    genres.push(feactured.genres[i].name);
  }

 return(
  <Container   style={{
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundImage: `url(https://image.tmdb.org/t/p/original${feactured.backdrop_path})`
   }}>
    <div className="wrapper">
      <div className="destaque">
        <h1>{feactured.original_name}</h1>
        <div className="infos">
          <span className="points">{feactured.vote_average} points</span>
          <span>{firstDate.getFullYear()}</span>
          <span>{feactured.number_of_seasons} temporada{feactured.number_of_seasons !==1? 's':''}</span>
          <p>{description}</p>
          <div className="actions">
            <button className="player-button">add</button>
            <button className="add-button">more</button>
          </div>
          <div className="genres">
            <strong>Generos:</strong>
            <p>{genres}</p>
          </div>
        </div>
      </div>
    </div>
  </Container>
 );
}