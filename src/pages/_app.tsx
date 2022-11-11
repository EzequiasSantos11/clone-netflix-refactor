import GlobalStyles from '../styles/globals';
import type { AppProps } from 'next/app';
import { HeadComponent } from '../Head';
import { TheMovieDBContextProvider } from '../contexts/themoviedb.context';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <TheMovieDBContextProvider>
      <HeadComponent title='NetflixClone'  description=''/>
      <Component {...pageProps} />
      <GlobalStyles/>
    </TheMovieDBContextProvider>
  )
}
