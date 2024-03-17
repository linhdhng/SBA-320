
import Carousel from 'react-bootstrap/Carousel'
import { useState, useEffect } from 'react';
import axios from 'axios';

const URL = {
    method: 'GET',
    url: 'https://free-to-play-games-database.p.rapidapi.com/api/games',
    params: {
      platform: 'browser',
      category: 'shooter',
      'sort-by': 'alphabetical'
    },
    headers: {
      'X-RapidAPI-Key': import.meta.env.VITE_API_KEY,
      'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
    }
  };

function Games() {
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
        <div className='content'>
            <h1>Data Fetching</h1>
            <Carousel data-bs-theme="dark">
            {count.map((game) => (
              <Carousel.Item key={game.id} interval={1000}>
                <img
                  className="d-block w-100"
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

export default Games;

