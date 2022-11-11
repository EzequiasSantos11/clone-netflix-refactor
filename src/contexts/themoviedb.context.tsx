import { createContext } from "react";
import { app } from "../pages/api";


interface TheMovieDBProps{
  children: React.ReactNode;
}

interface TheMovieValues{
  allRequests: ()=>Promise<any>;
}


export const TheMovieDBContext = createContext({} as TheMovieValues);


export function TheMovieDBContextProvider({children}: TheMovieDBProps){

  async function allRequests(){
    const data = await app.get(`/movie/76341?api_key=${process.env.NEXT_PUBLIC_API_KEY}`);
    console.log(data);
  }

  return(
    <TheMovieDBContext.Provider value={{allRequests}}>
      {children}
    </TheMovieDBContext.Provider>
  )
}