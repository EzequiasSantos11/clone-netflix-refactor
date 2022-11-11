export interface TMDBList {
  items: {
    results: TMDBListFilm[]
  },
  slug: string,
  title: string,
}


export interface TMDBListFilm {
  id: number;
  original_name: string;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  backdrop_path: string,
  vote_average: number,
  first_air_date: string,
  number_of_seasons: number,
  genres_ids: [number],
  genres: [{
    id: number,
    name: string,
  }]
}