import Card from 'react-bootstrap/Card';
import { Button } from 'react-bootstrap';
import { useState, useEffect } from 'react';


const url = 'https://free-to-play-games-database.p.rapidapi.com/api/games?platform=pc&sort-by=release-date';
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
    return (
      <div className="container">
        <h1>Free Games on PC</h1>
        <div id="recent" className="recent_add" style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
          {count.map((game) =>(
            <Card key={game.id} style={{ width: '15rem' }}>
            <Card.Img variant="top" src={game.thumbnail}/>
            <Card.Body>
              <Card.Title >{game.title}</Card.Title>
              <Card.Text style={{ textAlign: 'left' }}>
                {game.short_description}
              </Card.Text>
              <Button href='https://www.freetogame.com/`${game.title}`' variant='success'>Play Now</Button>
            </Card.Body>
          </Card>
          ))}
        </div>
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