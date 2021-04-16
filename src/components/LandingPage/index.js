import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Modal from 'react-bootstrap/Modal';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Row from 'react-bootstrap/Row';
import Tooltip from 'react-bootstrap/Tooltip';
import styled from 'styled-components';

const LandingPage = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [width, setWidth] = useState(window.innerWidth);
    const breakpoint = 550;
    useEffect(() => {
        window.addEventListener("resize", () => setWidth(window.innerWidth));
    }, []);

    return (
        <FullPageContainer className="d-flex flex-column text-justify h-100 w-100 hero justify-content-center align-items-center">
            <SiteTitle className="text-center user-select-none">HeroSync</SiteTitle>
            <Button href="https://demo.herosync.com" variant="success" size="lg">Play the Alpha!</Button>

            <Container className="text-center mt-3">
                <ButtonGroup vertical={(width < breakpoint ? true : false)}>
                    <Button href="/heroes" size="md" variant="primary">Heroes</Button>
                    <Button href="/blog" variant="primary" size="md">Blog</Button>
                    <Button size="md" variant="primary text-nowrap" onClick={handleShow}>Tutorial Video</Button>
                    <Modal show={show} onHide={handleClose} size="lg" centered>
                        <Modal.Header closeButton>
                            <Modal.Title>HeroSync Tutorial</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <iframe title="Tutorial Video" className="mr-auto w-100" height="400" src="https://www.youtube-nocookie.com/embed/Rr21LVuMQD0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </Modal.Body>
                    </Modal>
                    <Button href="https://docs.google.com/document/d/1getWCdeTM1ulyT-rdWILcKum0K9Pnjqj1e6QLXmbmFA/edit#" target="_blank" size="md" variant="primary text-nowrap">Rulebook</Button>
                    {/* <Button target="_blank" size="md" href="https://discord.gg/e6A8SFu" variant="primary text-nowrap">Discord</Button> */}
                </ButtonGroup>
                <SocialBtns>
                    <a href="https://facebook.com/HeroSync" target="_blank">
                        <img src="/facebook.svg" width={30} height={30} alt="Facebook" title="Facebook" />
                    </a>
                    <a href="https://discord.gg/e6A8SFu" target="_blank">
                        <img src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjwhRE9DVFlQRSBzdmcgIFBVQkxJQyAnLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4nICAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz48c3ZnIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDUxMiA1MTIiIGlkPSJMYXllcl8xIiB2ZXJzaW9uPSIxLjEiIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiB4bWw6c3BhY2U9InByZXNlcnZlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj48Y2lyY2xlIGN4PSIyNTYiIGN5PSIyNTYiIGZpbGw9IiM4QzlFRkYiIGlkPSJlbGxpcHNlIiByPSIyNTYiLz48cGF0aCBkPSJNMzcyLjQsMTY4LjdjMCwwLTMzLjMtMjYuMS03Mi43LTI5LjFsLTMuNSw3LjFjMzUuNiw4LjcsNTEuOSwyMS4yLDY5LDM2LjUgIGMtMjkuNC0xNS01OC41LTI5LjEtMTA5LjEtMjkuMXMtNzkuNywxNC4xLTEwOS4xLDI5LjFjMTcuMS0xNS4zLDM2LjUtMjkuMiw2OS0zNi41bC0zLjUtNy4xYy00MS4zLDMuOS03Mi43LDI5LjEtNzIuNywyOS4xICBzLTM3LjIsNTQtNDMuNiwxNjBjMzcuNSw0My4zLDk0LjUsNDMuNiw5NC41LDQzLjZsMTEuOS0xNS45Yy0yMC4yLTctNDMuMS0xOS42LTYyLjgtNDIuM2MyMy41LDE3LjgsNTkuMSwzNi40LDExNi40LDM2LjQgIHM5Mi44LTE4LjUsMTE2LjQtMzYuNGMtMTkuNywyMi43LTQyLjYsMzUuMy02Mi44LDQyLjNsMTEuOSwxNS45YzAsMCw1Ny0wLjMsOTQuNS00My42QzQwOS42LDIyMi43LDM3Mi40LDE2OC43LDM3Mi40LDE2OC43eiAgIE0yMDguNywyOTkuNmMtMTQuMSwwLTI1LjUtMTMtMjUuNS0yOS4xczExLjQtMjkuMSwyNS41LTI5LjFjMTQuMSwwLDI1LjUsMTMsMjUuNSwyOS4xUzIyMi44LDI5OS42LDIwOC43LDI5OS42eiBNMzAzLjMsMjk5LjYgIGMtMTQuMSwwLTI1LjUtMTMtMjUuNS0yOS4xczExLjQtMjkuMSwyNS41LTI5LjFzMjUuNSwxMywyNS41LDI5LjFTMzE3LjMsMjk5LjYsMzAzLjMsMjk5LjZ6IiBmaWxsPSIjRkZGRkZGIiBpZD0ibG9nbyIvPjwvc3ZnPg==" width={30} height={30} alt="Discord" title="Discord" />
                    </a>
                </SocialBtns>
            </Container>
        </FullPageContainer>
    );
}

const FullPageContainer = styled.div`
    background: no-repeat center/90% black url('https://demo.herosync.com/images/HS2_Large.png');
    @media (max-width: 550px) {
        background-size: cover;
    }
`;

const SiteTitle = styled.div`
    font-size: 8vw;
    color: white;
    text-shadow: 4px 4px 1px black;

    @media (max-width: 500px) {
        font-size: 30pt;
    }
`;

const SocialBtns = styled.div`
    margin-top: 1%;

    & > a {
        padding: 1rem;
    }
`;

export default LandingPage;
