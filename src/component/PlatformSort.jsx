import NavDropdown from 'react-bootstrap/NavDropdown';

function PlatformSort() {
  return (
    <NavDropdown title="By Platform" id="navbarScrollingDropdown">
      <NavDropdown.Item href="#action3">Browser</NavDropdown.Item>
      <NavDropdown.Item href="#action4">PC</NavDropdown.Item>
      <NavDropdown.Item href="#action4">PC&Browser</NavDropdown.Item>

    </NavDropdown>
  )
}

export default PlatformSort