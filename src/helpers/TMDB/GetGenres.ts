import { app } from "../../pages/api"
import { TMDBList, TMDBListFilm } from "../Interfaces";

export const getHomeList =  async ()=>{
  return[
   {
    slug: 'originals',
    title: 'Originais da Netflix',
    items: await app.get(`/discover/tv?with_netword=213&language=pt-BR&api_key=${process.env.NEXT_PUBLIC_API_KEY}`).then(async(resp)=>{
      const items = await resp.data;
      return items;
    }),
   },
   {
    slug: 'trending',
    title: 'Recomendados para você',
    items: await app.get(`/trending/all/week?language=pt-BR&api_key=${process.env.NEXT_PUBLIC_API_KEY}`).then(async(resp)=>{
      const items = await resp.data;
      return items;
    }),
   },
   {
    slug: 'toprated',
    title: 'Em Alta',
    items: await app.get(`/movie/top_rated?language=pt-BR&api_key=${process.env.NEXT_PUBLIC_API_KEY}`).then(async(resp)=>{
      const items = await resp.data;
      return items;
    }),
   },
   {
    slug: 'action',
    title: 'Filmes de ação',
    items: await app.get(`/discover/movie?with_genres=28&language=pt-BR&api_key=${process.env.NEXT_PUBLIC_API_KEY}`).then(async(resp)=>{
      const items = await resp.data;
      return items;
    }),
   },
   {
    slug: 'comedy',
    title: 'Comédia',
    items: await app.get(`/discover/movie?with_genres=35&language=pt-BR&api_key=${process.env.NEXT_PUBLIC_API_KEY}`).then(async(resp)=>{
      const items = await resp.data;
      return items;
    }),
   },{
    slug: 'horror',
    title: 'Terror',
    items: await app.get(`/discover/movie?with_genres=27&language=pt-BR&api_key=${process.env.NEXT_PUBLIC_API_KEY}`).then(async(resp)=>{
      const items = await resp.data;
      return items;
    }),
   },
   {
    slug: 'romance',
    title: 'Romance',
    items: await app.get(`/discover/movie?with_genres=10749&language=pt-BR&api_key=${process.env.NEXT_PUBLIC_API_KEY}`).then(async(resp)=>{
      const items = await resp.data;
      return items;
    }),
   },
   {
    slug: 'documentary',
    title: 'Documentarios',
    items: await app.get(`/discover/movie?with_genres=99&language=pt-BR&api_key=${process.env.NEXT_PUBLIC_API_KEY}`).then(async(resp)=>{
      const items = await resp.data;
      return items;
    }),
   }
  ]
}


export const getMovieInfo = async (movieId: any, type: string)=>{
  let info = {} as TMDBListFilm;
  if(movieId){
   switch(type){
    case 'movie':
      info = await app.get(`/movie/${movieId}?language=-pt-BR&api_key=${process.env.NEXT_PUBLIC_API_KEY}`).then(async(resp)=>{
        const items: TMDBListFilm = await resp.data;
        return items;
      });
    break;
    case 'tv':
      info = await app.get(`/tv/${movieId}?language=-pt-BR&api_key=${process.env.NEXT_PUBLIC_API_KEY}`).then(async(resp)=>{
        const items: TMDBListFilm = await resp.data;
        return items;
      });
    break;
   }
  }
  return info;
}


//Pegando o Featured
export const getFeatured = async (list: TMDBList[])=>{

  const originals = list.filter(i => i.slug === 'originals');

  const randomChosen = Math.floor(Math.random() * (originals[0].items.results.length -1));
  const chosen = originals[0].items.results[randomChosen];

  const chosenInfo: TMDBListFilm = await getMovieInfo(chosen.id,'tv');

  return chosenInfo;

}