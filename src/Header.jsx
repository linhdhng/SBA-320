import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {SearchBar} from './component/SearchBar/SearchBar';
import { SearchResultsList } from './component/SearchBar/SearchResultList';
import CategorySort from './component/CategorySort';
import PlatformSort from './component/platform/PlatformSort';
import { HashLink } from 'react-router-hash-link';
import { Link } from 'react-router-dom';

function Header() {
    const [results, setResults] = useState([]);
  return (
    <Navbar fixed="top"  expand="lg" className="bg-body-tertiary">
        <Container fluid>
            <HashLink className="navbar-brand" to="#">Game2Play</HashLink>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
                <Nav 
                    className="me-auto my-2 my-lg-0"
                    style={{ maxHeight: '100px' }}
                    navbarScroll
                >
                    <HashLink className="nav-link" to="/">Home</HashLink>
                    <HashLink className="nav-link" to="#recent">Recently Added</HashLink>
                    <HashLink className="nav-link" to="#trending">Trending</HashLink>
                    <CategorySort />
                    <PlatformSort />
                    <Link className="nav-link" to="/manga">Manga</Link>
                    <Link className="nav-link" to="/anime">Anime</Link>
                </Nav>
                
                <SearchBar setResults={setResults}/>
                {results && results.length > 0 && <SearchResultsList results={results}/>}
            </Navbar.Collapse>
        </Container>
    </Navbar>
    
  );
}

export default Header;