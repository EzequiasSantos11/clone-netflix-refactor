import { BiLeftArrow, BiRightArrow } from "react-icons/bi";
import React, { useState } from 'react';
import { TMDBList, TMDBListFilm } from '../../helpers/Interfaces';
import { Container } from './styles';




export function MovieRow({ items, title }: TMDBList) {

  const [scrollX, setScrollX] = useState(-400);
  const handleLeftArrow = () => {
    let x = scrollX + Math.round(window.innerWidth / 2);
    if (x > 0) {
      x = 0;
    }
    setScrollX(x);
  }
  const handleRightArrow = () => {
    let x = scrollX - Math.round(window.innerWidth / 2);
    let listW = items.results.length * 150;
    if ((window.innerWidth - listW) > x) {
      x = (window.innerWidth - listW) - 60;
    }
    setScrollX(x);
  }

  return (
    <Container>
      <h2>{title}</h2>
      <div className="left" onClick={handleLeftArrow}>
        <BiLeftArrow/>
      </div>
      <div className="right" onClick={handleRightArrow}>
        <BiRightArrow/>
      </div>

      <div className="listarea">
        <div className="list" style={{
          marginLeft: scrollX,
          width: items.results.length * 150
        }}>
          {items.results.length > 0 && items.results.map((item) => (
            <div key={item.id} className="item">
              <img src={`https://image.tmdb.org/t/p/w300${item.poster_path}`} alt={item.original_title} />
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
}