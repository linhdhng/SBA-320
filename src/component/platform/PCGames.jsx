import { useState, useEffect } from 'react'
import Card from 'react-bootstrap/Card';
import { Button } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
function PCGames() {
  const [count, setCount] = useState('null')
  const { genre } = useParams
  const url = `https://free-to-play-games-database.p.rapidapi.com/api/games?category=${genre}`;
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': import.meta.env.VITE_API_KEY,
      'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
    }
  };
  const getGame = async () => {
      try {
      const response = await fetch(url, options);
      const result = await response.json()
      setCount(result)
      } catch(err) {
      console.log(err)
      }
  }

  useEffect(() => {
      getGame();
    }, []);

  const loaded = () => {
    return(
      <div className="container" id='pc'>
        <h4>PC Games</h4>
        
        <div id="recent" className="recent_add" style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
          {/* {count.map((game) =>(
            <Card key={game.id} style={{ width: '18rem' }}>
            <Card.Img variant="top" src={game.thumbnail}/>
            <Card.Body>
              <Card.Title >{game.title}</Card.Title>
              <Card.Text style={{ textAlign: 'left' }}>
                {game.short_description}
              </Card.Text>
              <Button href='https://www.freetogame.com/`${game.title}`' variant='success'>Play Now</Button>
            </Card.Body>
          </Card>
          ))} */}
        </div>
      </div>
    )
  }

  const loading = () => {
    return <h1>Loading...</h1>
  }

  //Ternary operator to return function 
  return count ? loaded() : loading()

}

export default PCGames