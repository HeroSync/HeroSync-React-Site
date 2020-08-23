import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Modal from 'react-bootstrap/Modal';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Row from 'react-bootstrap/Row';
import Tooltip from 'react-bootstrap/Tooltip';
import styled from 'styled-components';

const LandingPage = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <FullPageContainer className="d-flex flex-column text-justify h-100 w-100 hero justify-content-center">
            <SiteTitle className="text-center user-select-none">HeroSync</SiteTitle>
            <Row className="pb-3 mx-auto">
                <Col className="text-center">
                    <Button href="https://demo.herosync.com" variant="success" size="lg">Play the Alpha!</Button>
                </Col>
            </Row>
            <Row className="justify-content-center mx-auto">
                <Col className="text-center">
                    <Button href="/heroes" variant="primary">Heroes</Button>
                </Col>
                {/* <Col className="text-center">
                    <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">Coming soon...</Tooltip>}>
                        <span className="d-inline-block">
                            <Button href="/cards" variant="primary" disabled style={{pointerEvents: 'none'}}>Cards</Button>
                        </span>
                    </OverlayTrigger>
                </Col> */}
                <Col className="text-center">
                    <Button variant="primary text-nowrap" onClick={handleShow}>Tutorial Video</Button>
                    <Modal show={show} onHide={handleClose} size="lg" centered>
                        <Modal.Header closeButton>
                            <Modal.Title>HeroSync Tutorial</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                        <iframe title="Tutorial Video" className="mr-auto w-100" height="400" src="https://www.youtube-nocookie.com/embed/Rr21LVuMQD0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </Modal.Body>
                    </Modal>
                </Col>
                <Col className="text-center">
                    <Button target="_blank" href="https://docs.google.com/document/d/1getWCdeTM1ulyT-rdWILcKum0K9Pnjqj1e6QLXmbmFA/edit#" variant="primary text-nowrap">Rulebook</Button>
                </Col>
            </Row>
        </FullPageContainer>
    );
}

const FullPageContainer = styled.div`
    background: no-repeat center/90% black url(https://demo.herosync.com/images/HS2_Large.png);
`;

const SiteTitle = styled.div`
    font-size: 8vw;
    color: white;
`;

export default LandingPage;
