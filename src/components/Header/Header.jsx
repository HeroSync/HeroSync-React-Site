import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

const Header = (props) => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <Navbar bg="dark" variant="dark" expand="lg" fixed="top" >
            <Navbar.Brand href="/">HeroSync</Navbar.Brand>
            <Navbar.Toggle aria-controls="header-nav" />
            <Navbar.Collapse id="header-nav" className="justify-content-end">
                <Nav fill className="mr-auto" variant="pills" activeKey={props.location.pathname}>
                    <Nav.Item>
                        <Nav.Link href="https://demo.herosync.com" target="_blank">Play the Alpha!</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="/heroes">Heroes</Nav.Link>
                    </Nav.Item>
                    {/* <Nav.Item>
                        <Nav.Link href="/cards">Cards</Nav.Link>
                    </Nav.Item> */}
                    <Nav.Item>
                        <Nav.Link href="/blog">Blog</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="https://docs.google.com/document/d/1getWCdeTM1ulyT-rdWILcKum0K9Pnjqj1e6QLXmbmFA/edit#" target="_blank">Rulebook</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link onClick={handleShow}>Tutorial Video</Nav.Link>
                        <Modal show={show} onHide={handleClose} size="lg" centered>
                            <Modal.Header closeButton>
                                <Modal.Title>HeroSync Tutorial</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <iframe title="Tutorial Video" className="mr-auto w-100" height="400" src="https://www.youtube-nocookie.com/embed/Rr21LVuMQD0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                            </Modal.Body>
                        </Modal>
                    </Nav.Item>
                </Nav>
                <Nav>
                    <Nav.Link href="https://facebook.com/HeroSync" target="_blank">
                        <img src="/facebook.svg" width={30} height={30} alt="Facebook" title="Facebook" />
                    </Nav.Link>
                    <Nav.Link href="https://discord.gg/e6A8SFu" target="_blank">
                        <img src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjwhRE9DVFlQRSBzdmcgIFBVQkxJQyAnLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4nICAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz48c3ZnIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDUxMiA1MTIiIGlkPSJMYXllcl8xIiB2ZXJzaW9uPSIxLjEiIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiB4bWw6c3BhY2U9InByZXNlcnZlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj48Y2lyY2xlIGN4PSIyNTYiIGN5PSIyNTYiIGZpbGw9IiM4QzlFRkYiIGlkPSJlbGxpcHNlIiByPSIyNTYiLz48cGF0aCBkPSJNMzcyLjQsMTY4LjdjMCwwLTMzLjMtMjYuMS03Mi43LTI5LjFsLTMuNSw3LjFjMzUuNiw4LjcsNTEuOSwyMS4yLDY5LDM2LjUgIGMtMjkuNC0xNS01OC41LTI5LjEtMTA5LjEtMjkuMXMtNzkuNywxNC4xLTEwOS4xLDI5LjFjMTcuMS0xNS4zLDM2LjUtMjkuMiw2OS0zNi41bC0zLjUtNy4xYy00MS4zLDMuOS03Mi43LDI5LjEtNzIuNywyOS4xICBzLTM3LjIsNTQtNDMuNiwxNjBjMzcuNSw0My4zLDk0LjUsNDMuNiw5NC41LDQzLjZsMTEuOS0xNS45Yy0yMC4yLTctNDMuMS0xOS42LTYyLjgtNDIuM2MyMy41LDE3LjgsNTkuMSwzNi40LDExNi40LDM2LjQgIHM5Mi44LTE4LjUsMTE2LjQtMzYuNGMtMTkuNywyMi43LTQyLjYsMzUuMy02Mi44LDQyLjNsMTEuOSwxNS45YzAsMCw1Ny0wLjMsOTQuNS00My42QzQwOS42LDIyMi43LDM3Mi40LDE2OC43LDM3Mi40LDE2OC43eiAgIE0yMDguNywyOTkuNmMtMTQuMSwwLTI1LjUtMTMtMjUuNS0yOS4xczExLjQtMjkuMSwyNS41LTI5LjFjMTQuMSwwLDI1LjUsMTMsMjUuNSwyOS4xUzIyMi44LDI5OS42LDIwOC43LDI5OS42eiBNMzAzLjMsMjk5LjYgIGMtMTQuMSwwLTI1LjUtMTMtMjUuNS0yOS4xczExLjQtMjkuMSwyNS41LTI5LjFzMjUuNSwxMywyNS41LDI5LjFTMzE3LjMsMjk5LjYsMzAzLjMsMjk5LjZ6IiBmaWxsPSIjRkZGRkZGIiBpZD0ibG9nbyIvPjwvc3ZnPg==" width={30} height={30} alt="Discord" title="Discord" />
                    </Nav.Link>
                    {/* <Nav.Link href="">
                            <img src="/patreon.svg" width={25} height={25} alt="Patreon" title="Patreon" />
                        </Nav.Link> */}
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default Header;
