import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import '../styles/navbar.css'

function TextLinkExample() {
  return (
    <Navbar className='custom_bg_dark'>
      <Container className='custom_bg_dark'>
        <Navbar.Brand href="#home" className='horror_text text-white'>The Horror House</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text className='text-white'>
            Signed in as: <a href="#login" className='text-white'>Shekhar Dora</a>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default TextLinkExample;