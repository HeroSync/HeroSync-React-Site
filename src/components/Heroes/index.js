import React from 'react';
import { gql, useQuery } from '@apollo/client';
import PageWrapper from '../PageWrapper';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Spinner from 'react-bootstrap/Spinner';
import Hero from '../Hero';
import styled from 'styled-components';

const GET_ALL_HEROES = gql`
    query AllHeroes {
        heroes {
            edges {
                node {
                    hero_info {
                        heroId
                        name
                        artwork {
                            sourceUrl
                        }
                    }
                    slug
                    uri
                }
            }
        }
    }
`;

const HeroesPage = () => {
    const { loading, error, data } = useQuery(GET_ALL_HEROES);

    const testLoading = false;

    if (loading || testLoading) return(
        <PageWrapper mainClassName="h-100 d-flex justify-content-center align-items-center">
            <Spinner animation="border">
                <span className="sr-only">Loading...</span>
            </Spinner>
        </PageWrapper>
    );
    if (error) return `Error! ${error.message}`;

    const orderedHeroes = data.heroes.edges.slice().sort((h1, h2) => h1.node.hero_info.heroId - h2.node.hero_info.heroId);

    return (
        <PageWrapper mainClassName="h-100 pt-5 d-flex align-items-center">
            <HeroWrapper xs={2} md={3} lg={5} className="h-100 align-items-center justify-content-center mx-auto">
                {
                    orderedHeroes.map(hero => {
                        const heroInfo = hero.node.hero_info;
                        return (
                            <Col key={heroInfo.heroId}>
                                <Hero.Preview key={heroInfo.heroId} hero={heroInfo} slug={hero.node.uri} />
                            </Col>
                        );
                    })
                }
            </HeroWrapper>
        </PageWrapper>
    );
}

const HeroWrapper = styled(Row)`
    padding: 0 3%;
`;

export default HeroesPage;
