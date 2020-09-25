import React from 'react';
import { gql, useQuery } from '@apollo/client';
import Col from 'react-bootstrap/Col';
import PageWrapper from '../PageWrapper';
import Spinner from 'react-bootstrap/Spinner';
import CardColumns from 'react-bootstrap/CardColumns';
import Post from '../Post';

const GET_ALL_BLOG_POSTS = gql`
    query GetAllBlogPosts {
        posts {
            edges {
                node {
                    databaseId
                    link
                    uri
                    dateGmt
                    title(format: RENDERED)
                    excerpt(format: RENDERED)
                    content(format: RENDERED)
                    featuredImage {
                        node {
                            uri
                            sourceUrl
                        }
                    }
                    categories {
                        edges {
                            node {
                                name
                                uri
                                databaseId
                            }
                        }
                    }
                }
            }
        }
    }
`;

const Blogs = () => {
    const { loading, error, data } = useQuery(GET_ALL_BLOG_POSTS);

    if (loading) return(
        <PageWrapper mainClassName="h-100 d-flex justify-content-center align-items-center">
            <Spinner animation="border">
                <span className="sr-only">Loading...</span>
            </Spinner>
        </PageWrapper>
    );
    if (error) return `Error! ${error.message}`;

    const posts = data.posts.edges;

    return(
        <PageWrapper mainClassName="pt-5 d-flex">
            <CardColumns xs={2} md={3} lg={5} className="mt-3 w-100">
                {
                    posts.map(edge => {
                        return (
                            <Col key={edge.node.databaseId}>
                                <Post.Preview post={edge.node} key={edge.node.databaseId} />
                            </Col>
                        )
                    })
                }
            </CardColumns>
        </PageWrapper>
    );
}

export default Blogs;
