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
                        <img src="/facebook.svg" width={25} height={25} alt="Facebook" title="Facebook" />
                    </Nav.Link>
                    <Nav.Link href="https://discord.gg/e6A8SFu" target="_blank">
                        <img src="/discord.svg" width={25} height={25} alt="Discord" title="Discord" />
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
