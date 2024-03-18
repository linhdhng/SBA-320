
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import SearchBar from './SearchBar';
import CategorySort from './CategorySort';
import PlatformSort from './PlatformSort';
import { HashLink as Link } from 'react-router-hash-link';
function Header() {
  return (
    <Navbar fixed="top"  expand="lg" className="bg-body-tertiary">
        <Container fluid>
            <Navbar.Brand href="/main">Game2Play</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
                <Nav 
                    className="me-auto my-2 my-lg-0"
                    style={{ maxHeight: '100px' }}
                    navbarScroll
                >
                    <Link className="nav-link" to="#main">Home</Link>
                    <Link className="nav-link" to="#recent">Recently Added</Link>
                    <Link className="nav-link" to="#trending">Trending</Link>
                    <CategorySort />
                    <PlatformSort />
                </Nav>
                
                <SearchBar />
            </Navbar.Collapse>
        </Container>
    </Navbar>
    
  );
}

export default Header;