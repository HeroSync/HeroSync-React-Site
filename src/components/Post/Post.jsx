import React from 'react';
import { gql, useQuery } from '@apollo/client';
import PageWrapper from '../PageWrapper';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Spinner from 'react-bootstrap/Spinner';
import Moment from 'react-moment';
import { PublishedDate, PostImage } from './Post.styles';

const GET_POST = gql`
    query GetPost($url: ID!) {
        post(id: $url, idType: URI) {
            title
            excerpt
            content
            dateGmt
            featuredImage {
                node {
                    sourceUrl
                }
            }
        }
    }
`;

const PostPreview = ({ post }) => {
    return (
        <Card>
            {post.featuredImage && <Card.Img variant="top" src={post.featuredImage.node.sourceUrl} />}
            <Card.Body>
                <Card.Title>{post.title}</Card.Title>
                <Card.Text dangerouslySetInnerHTML={{__html: post.excerpt}}></Card.Text>

                <a href={post.uri} className="stretched-link">Read more...</a>
                <footer className="text-right">
                    <small class="text-muted mb-2">
                        <Moment format="MM/DD/YYYY">{post.dateGmt}</Moment>
                    </small>
                </footer>
            </Card.Body>
        </Card>
    );
}

const Post = ({match: { url }}) => {
    const { loading, error, data } = useQuery(GET_POST, {
        variables: { url: url },
    });

    if (loading) return(
        <PageWrapper mainClassName="h-100 d-flex justify-content-center align-items-center">
            <Spinner animation="border">
                <span className="sr-only">Loading...</span>
            </Spinner>
        </PageWrapper>
    );
    if (error) return `Error! ${error.message}`;

    return(
        <PageWrapper mainClassName="h-100 d-flex flex-column justify-content-center align-items-top">
            <Container className="h-100 pt-5 mt-5">
                {console.log(data.post)}
                <div className="text-center">
                    {data.post.featuredImage && <PostImage className="img-responsive" rounded fluid src={data.post.featuredImage.node.sourceUrl} alt="Featured Image" />}
                    <h2>{data.post.title}</h2>
                    <PublishedDate className="lead">{<Moment format="MM/DD/YYYY">{data.post.dateGmt}</Moment>}</PublishedDate>
                </div>
                <Container dangerouslySetInnerHTML={{__html: data.post.content}} className="text-center pt-3" />
            </Container>
        </PageWrapper>
    );
};

Post.Preview = PostPreview;

export default Post;
