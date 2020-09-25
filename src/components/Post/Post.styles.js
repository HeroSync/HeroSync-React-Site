import styled from 'styled-components';
import Image from 'react-bootstrap/Image';

export const PublishedDate = styled.p`
    &:before {
        content: "Published: ";
    }
`;

export const PostImage = styled(Image)`
    max-width: 80%;
`;
