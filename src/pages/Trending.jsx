import ListGroup from 'react-bootstrap/ListGroup';
import { Button } from 'react-bootstrap';
import { useState, useEffect } from 'react';


const url = 'https://free-to-play-games-database.p.rapidapi.com/api/games?platform=browser&category=mmorpg&sort-by=release-date';
  const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': import.meta.env.VITE_API_KEY,
    'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
  }
};

function Trending() {
  const [count, setCount] = useState([])

  const getGame = async () => {
    try {
      const response = await fetch(url, options);
      const result = await response.json();
      console.log(result);
      setCount(result)
    } catch (error) {
      console.error(error);
    }
  }
  useEffect(() => {
      getGame();
    }, []);
  
  const loaded = () => {
    const alertClicked = () => {
      alert('Redirecting....');
    };
    return (
      <div id="trending" className="trending">
        <h3>Trending</h3>
        <ListGroup as="ul" numbered>
          {count.map((game) =>(
          <ListGroup.Item key={game.id} as="li" action onClick={alertClicked}>{game.title}</ListGroup.Item>
          ))}
        </ListGroup>
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

export default Trending