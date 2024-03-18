import NavDropdown from 'react-bootstrap/NavDropdown';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
const options = {
    method: 'GET',
    url: 'https://free-to-play-games-database.p.rapidapi.com/api/games',
    headers: {
      'X-RapidAPI-Key': import.meta.env.VITE_API_KEY,
      'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
    }
  };
  
function getUniqueObjectsByProperty(array, property) {
    const uniqueObjectsMap = {};
    array.forEach(obj => {
        const value = obj[property];
        if (value) {
            uniqueObjectsMap[value] = obj;
        }
    });

    return Object.values(uniqueObjectsMap);
}

function CategorySort() {
    const [result, setResult] = useState([]);

    const fetchData = async () => {
        const res = await axios.request(options);
        console.log(res.data);
        setResult(res.data)
    }
    
    useEffect(() => {
        fetchData();
    }, []);
    
    const uniqueNames = getUniqueObjectsByProperty(result, 'genre')
    
    return (
        <NavDropdown title="By Category" id="navbarScrollingDropdown">
            {uniqueNames.map((uniqueName) => (
                <NavDropdown.Item key={uniqueName.id}>
                    <Link className="nav-link" to={`/category/${uniqueName.genre}`}>
                    {uniqueName.genre}
                    </Link>
                </NavDropdown.Item>
            ))}
        </NavDropdown>
    )
}

export default CategorySort