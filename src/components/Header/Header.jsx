import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Button from "react-bootstrap/Button";
import { LinkContainer } from "react-router-bootstrap";
import { useDispatch } from "react-redux";
import { openCreateTaskModal } from "../../redux/slices/createTaskModalSlice";

function Header() {
  const dispatch = useDispatch();
  const handleCreateTaskModalOpen = () => dispatch(openCreateTaskModal());
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand>Task Manager</Navbar.Brand>
          <Nav className="me-auto d-none d-sm-flex">
            <LinkContainer to="/">
              <Nav.Link>All tasks</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/finished">
              <Nav.Link>Finished</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/unfinished">
              <Nav.Link>Unfinished</Nav.Link>
            </LinkContainer>
          </Nav>
          <Nav className="me-auto d-sm-none">
            <NavDropdown title="Filter" id="collapsible-nav-dropdown">
              <LinkContainer to="/">
                <NavDropdown.Item>All</NavDropdown.Item>
              </LinkContainer>
              <LinkContainer to="/finished">
                <NavDropdown.Item>Finished</NavDropdown.Item>
              </LinkContainer>
              <LinkContainer to="/unfinished">
                <NavDropdown.Item>Unfinished</NavDropdown.Item>
              </LinkContainer>
            </NavDropdown>
          </Nav>
          <Button onClick={handleCreateTaskModalOpen}>Add task +</Button>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
