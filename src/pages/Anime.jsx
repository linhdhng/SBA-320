import { Card, Container, Row, Col} from 'react-bootstrap';
import { useState, useEffect } from 'react';
import { OverlayTrigger } from 'react-bootstrap';
import { Tooltip } from 'react-bootstrap';

const url = 'https://api.jikan.moe/v4/anime';
  

function Anime() {
  const [count, setCount] = useState([])

  const getGame = async () => {
    try {
      const response = await fetch(url);
      const result = await response.json();
      const mangas = result.data
      console.log(mangas);
      setCount(mangas)
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
        <h3>Anime Recommendations</h3>
        <Container>
            <Row md={7}>
                {count.map((manga) => (
                <Col key={manga.id} xs={12} sm={6} md={4} lg={3}> 
                <div className='card-container'>
                    <OverlayTrigger 
                        delay={{ hide: 450, show: 300 }} 
                        overlay={(props) => ( 
                            <Tooltip {...props}> 
                                <p>Genre: {manga.genres[0].name}, {manga.genres[1].name}, {manga.genres[1].name}</p>
                                <p>Score: {manga.score}</p>
                            </Tooltip> 
                        )} 
                        placement='right'>
                        <Card className='card'>
                            <Card.Img variant="top" src={manga.images.webp.image_url} />
                            <Card.Body>
                            <Card.Text>
                                {manga.title}
                            </Card.Text>
                            </Card.Body>
                        </Card>
                    </OverlayTrigger>
                </div>
                </Col>
                ))}
            </Row>
        </Container>
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

export default Anime