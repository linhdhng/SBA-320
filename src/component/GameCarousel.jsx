
import Carousel from 'react-bootstrap/Carousel'
import { useState, useEffect } from 'react';
import axios from 'axios';

const URL = {
    method: 'GET',
    url: 'https://free-to-play-games-database.p.rapidapi.com/api/filter',
    params: {
      tag: '3d.shooter.sci-fi.pvp',
      platform: 'pc'
    },
    headers: {
      'X-RapidAPI-Key': import.meta.env.VITE_API_KEY,
      'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
    }
  };

function GameCarousel() {
    const [count, setCount] = useState([])

    const getGame = async () => {
        try {
        const response = await axios.request(URL);
        console.log(response.data);
        setCount(response.data)
        } catch(err) {
        console.log(err)
        }
    }

    useEffect(() => {
        getGame();
      }, []);

    return (
        <div className='content' id='main'>
            <h1>Recommendations</h1>
            <Carousel data-bs-theme="dark">
            {count.map((game) => (
              <Carousel.Item key={game.id} interval={1000}>
                <img
                  className="d-block w-80"
                  src={game.thumbnail}
                  alt={`${game.title} thumbnail`}
                />
                <Carousel.Caption >
                  <h3>{game.title}</h3>
                  <p>{game.short_description}</p>
                </Carousel.Caption>
              </Carousel.Item>
            ))}
            </Carousel>
        </div>
    )
}

export default GameCarousel;

