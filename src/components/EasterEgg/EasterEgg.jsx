import React from 'react';
import Konami from 'react-konami-code';
import styled from 'styled-components';

const EasterEgg = () => {
    return (
        <Konami>
            <BouncingBlob src="/blob-round.gif"></BouncingBlob>
        </Konami>
    );
}

const BouncingBlob = styled.img`
    width: 100px;
    height: 100px;
    animation: bounce 0.25s infinite alternate;
    -webkit-animation: bounce 0.25s infinite alternate;
    position: fixed;
    bottom: 0;
    right: 0;

    @keyframes bounce {
        from {
            transform: translateY(0px);
        }
        to {
            transform: translateY(-95px);
        }
    }
    @-webkit-keyframes bounce {
        from {
            transform: translateY(0px);
        }
        to {
            transform: translateY(-95px);
        }
    }
`;

export default EasterEgg;
