

import { useState, useEffect } from 'react';
import axios from 'axios';

const URL = {
    method: 'GET',
    url: 'https://free-to-play-games-database.p.rapidapi.com/api/games',
    params: {
      platform: 'browser',
      category: 'mmorpg',
      'sort-by': 'release-date'
    },
    headers: {
      'X-RapidAPI-Key': 'd53b690b17mshf0231f322f4034ap1d6de8jsn532c2abcca40',
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
        <div>
            <h1>Data Fetching</h1>
            <ul>
                {count.map((game) => {
                    return <li key={game.id}>{game.title}</li>
                })}
            </ul>
        </div>
    )
}

export default Games;

