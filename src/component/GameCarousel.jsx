
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

    const loaded = () => {
      return (
          <div className='content' id='main'>
              <Carousel >
              {count.map((game) => (
                <Carousel.Item key={game.id} interval={1000}>
                  <img
                    className="d-block w-100"
                    src={game.thumbnail}
                    alt={`${game.title} thumbnail`}
                    style={{ borderRadius: '15px' }}

                  />
                  <Carousel.Caption style={{ color: 'white' }}>
                    <h3>{game.title}</h3>
                    <p>{game.short_description}</p>
                  </Carousel.Caption>
                </Carousel.Item>
              ))}
              </Carousel>
          </div>
      )
    }

    //Function for when data doesnt exist
    const loading = () => {
      return <h1>Loading...</h1>
    }
    //Ternary operator to return function 
    return count ? loaded() : loading()
}

export default GameCarousel;

