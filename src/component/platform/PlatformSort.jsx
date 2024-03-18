import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
function PlatformSort() {
  return (
    <NavDropdown title="By Platform" id="navbarScrollingDropdown">
      
      <Link className="nav-link" to="/browser">Browser</Link>
      <Link className="nav-link" to="/pc">PC</Link>
      <Link className="nav-link" to="/pc&browser">PC&Browser</Link>

    </NavDropdown>
  )
}

export default PlatformSort