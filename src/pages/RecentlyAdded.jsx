import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup';
import { useState, useEffect } from 'react';

const url = 'https://free-to-play-games-database.p.rapidapi.com/api/games?platform=browser&category=mmorpg&sort-by=release-date';
  const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': import.meta.env.VITE_API_KEY,
    'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
  }
};

function RecentlyAdded() {
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

  return (
      <div id="recent" className="recent_add" style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>

        {count.map((game) =>(
          <Card key={game.id} style={{ width: '18rem' }}>
            <Card.Img variant="top" src={game.thumbnail} alt={`${game.title} thumbnail`}/>
            <Card.Body>
              <Card.Title >{game.title}</Card.Title>
              <Card.Text>
                {game.short_description}
              </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroup.Item>{game.genre}</ListGroup.Item>
              <ListGroup.Item>{game.developer}</ListGroup.Item>
              <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
            </ListGroup>
            <Card.Body>
              <Card.Link href="#">Card Link</Card.Link>
              <Card.Link href="#">Another Link</Card.Link>
            </Card.Body>
          </Card>
        ))}
    </div>
  )
}

export default RecentlyAdded