import {Navbar, Nav ,NavDropdown,Form,FormControl,Button} from 'react-bootstrap'

function Navbars () {
    return (
      <div className="App">
      <Navbar bg="light" expand="lg">
    <Navbar.Brand href="#home">DashBoard</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
        <Nav.Link href="uploads">Uploads</Nav.Link>
        <Nav.Link href="home">Home</Nav.Link>
      </Nav>
      <Form inline>
        <FormControl type="text" placeholder="Search" className="mr-sm-2" /> 
      </Form>
    </Navbar.Collapse>
  </Navbar>
      </div>
    )
  };
  
  
  export default Navbars;