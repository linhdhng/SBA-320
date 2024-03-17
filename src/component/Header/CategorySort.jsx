import NavDropdown from 'react-bootstrap/NavDropdown';
import { useState, useEffect } from 'react';

const options = {
    method: 'GET',
    url: 'https://free-to-play-games-database.p.rapidapi.com/api/games',
    headers: {
      'X-RapidAPI-Key': import.meta.env.VITE_API_KEY,
      'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
    }
  };
  
  
function CategorySort() {
    const [result, setResult] = useState([]);

    const fetchData = async () => {
        const res = await fetch(options);
        const json = await res.json();
        setResult(json.result);
    }
    
    useEffect(() => {
        fetchData();
    }, []);
    
    return (
        <NavDropdown title="By Category" id="navbarScrollingDropdown">
            {result.map((value) => (
                <Link to={value.id}>
                    <h2>{value.genre}</h2>
                </Link>
            ))}
            <NavDropdown.Divider />
        </NavDropdown>
    )
}

export default CategorySort