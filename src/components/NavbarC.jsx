
import {Nav, Navbar, Button,Container,Form, NavDropdown,Offcanvas} from 'react-bootstrap';
import klipclub from '../images/klipclub.jpg'


function NavbarC() {
  return (
    <div className='navbar'>
     
        <Navbar  key={'sm'} expand={'sm'} className="navbar top-0 ">
          <Container  fluid>
          <Navbar.Brand href="#home" className='NavBrand ' > <div className='logoNav'><img className='imgKlipclub' src={klipclub} alt="" /></div></Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${'sm'} `} />
            <Navbar.Offcanvas
              
              id={`offcanvasNavbar-expand-${'sm'}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${'sm'}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${'sm'}`}>
                   
                        </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body  className='offcanvasBody'>
                
                <Form className="d-flex">
                <i className="fa-solid fa-magnifying-glass"></i>
                  <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                  />
                  <Button variant="outline-success">Search</Button>
                  <i className="fa-solid fa-video"></i>
                </Form>
                

                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link className='text-info' href="#action1">Broacasts</Nav.Link>
                  <Nav.Link className='text-info' href="#action2">Virtual Events</Nav.Link>
                  <Nav.Link className='text-info' href="#action1">Artists</Nav.Link>
                  
                  
                  <NavDropdown
                    className='colorDrop'
                    title="klipWall"
                    id={`offcanvasNavbarDropdown-expand-${'sm'}`}
                  >
                    <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action4">
                      Another action
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action5">
                      Something else here
                    </NavDropdown.Item>
                  </NavDropdown>
                </Nav>
               </Offcanvas.Body>
               <Nav className='nav3'>
                 <i className="fa-regular fa-comment"></i>
        <i className="fa-regular fa-bell"></i>
        </Nav>
                
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      
    </div>
  );
}

export default NavbarC;










  
