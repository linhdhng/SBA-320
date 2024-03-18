import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState} from 'react';

const url = 'https://free-to-play-games-database.p.rapidapi.com/api/games';
    const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': import.meta.env.VITE_API_KEY,
        'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
    }
};

export const SearchBar = ({ setResults }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const getData = (value) => {
        fetch(url, options)
          .then((response) => response.json())
          .then((json) => {
            const results = json.filter((game) => {
              return (
                value &&
                game &&
                game.title &&
                game.title.toLowerCase().includes(value)
              );
            });
            setResults(results);
          });
    };

    const handleChange = (value) => {
      setSearchTerm(value);
      getData(value);
    };
  return (
    <Form className="d-flex" onSubmit={(e) => {
      e.preventDefault()
      navigate('/recent/' + word)
    }}>
      <Form.Control
        type="search"
        placeholder="Find Game"
        className="me-2"
        aria-label="Search"
        value={searchTerm}
        onChange={(e) => handleChange(e.target.value)}
      />

        <Button variant="outline-success">Search</Button>
        
    </Form>
  )
}
