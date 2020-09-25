import React from 'react';
import { gql, useQuery } from '@apollo/client';
import PageWrapper from '../PageWrapper';
import styled from 'styled-components';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Figure from 'react-bootstrap/Figure';
import Spinner from 'react-bootstrap/Spinner';
import groupBy from 'lodash/groupBy';

const GET_HERO = gql`
    query GetHero($url: ID!) {
        hero(id: $url, idType: SLUG) {
            hero_info {
                heroId
                name
                syncRewards {
                    ... on Sync_reward {
                    reward_info {
                        name
                        level
                        effect
                        type
                    }
                    }
                }
                artwork {
                    sourceUrl
                }
            }
        }
    }
`;

const HeroPreview = ({ hero: { name, artwork: { sourceUrl } }, slug }) => {
    return (
        <HeroPreviewContainer>
            <HeroPreviewImage className="rounded-circle" alt={name} src={sourceUrl} />
            <a href={slug} className="stretched-link">
                <HeroPreviewName className="text-wrap mt-3">{name}</HeroPreviewName>
            </a>
        </HeroPreviewContainer>
    );
}

const HeroSyncRewards = ( { level, rewards } ) => {
    return (
        <div className="d-flex flex-column justify-content-center">
            <SyncRewardLevel className="border-bottom">Level {level}</SyncRewardLevel>
            <SyncRewardsRow>
                {
                    rewards.map(reward => {
                        return (
                            <SyncRewardsCol key={reward.name}>
                                <SyncRewardName className="text-break">{reward.name}</SyncRewardName>
                                <SyncRewardType>{reward.type}</SyncRewardType>
                                <SyncRewardEffect>{reward.effect}</SyncRewardEffect>
                            </SyncRewardsCol>
                        )
                    })
                }
            </SyncRewardsRow>
        </div>
    )
}

const Hero = ({ match: { url } }) => {
    const { loading, error, data } = useQuery(GET_HERO, {
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

    const hero = data.hero.hero_info;
    const syncRewards = hero.syncRewards?.map(reward => reward.reward_info);
    const groupedRewards = groupBy(syncRewards, 'level');

    return (
        <PageWrapper mainClassName="d-flex align-items-top">
            <HeroWrapper className="mt-5 p-4 text-center w-100 d-flex flex-row justify-content-around align-items-center">
                <Figure>
                    <Figure.Image width={300} height={300} src={hero.artwork.sourceUrl} alt={hero.name} title={hero.name} className="rounded" />
                    <PageTitle>{hero.name}</PageTitle>
                </Figure>
                <SyncRewardsWrapper>
                {
                    Object.keys(groupedRewards).map(key => {
                        return (
                            <HeroSyncRewards key={key} level={key} rewards={groupedRewards[key]} />
                        );
                    })
                }
                </SyncRewardsWrapper>
            </HeroWrapper>
        </PageWrapper>
    );
}

const PageTitle = styled(Figure.Caption)`
    font-size: 2rem;
    color: black;
    font-weight: bold;

    @media (max-width: 450px) {
        font-size: 1.6rem;
    }
`;

const HeroPreviewContainer = styled.div`
    align-items: space-around;
    height: 100%;
    width: 95%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    justify-items: center;
    padding: 20px 0;

    transition: all 0.5s;

    &:hover {
        transform: scale(1.15);
    }
`;

const HeroPreviewImage = styled.img`
    width: 100%;
`;

const HeroPreviewName = styled.h5`
    text-align: center;
`;

const HeroWrapper = styled.div`
    @media (max-width: 900px) {
        flex-direction: column !important;
    }
`;

const SyncRewardsWrapper = styled.section`
    width: 45%;

    @media (max-width: 900px) {
        width: 100%;
    }
`;

const SyncRewardsRow = styled(Row)`
    justify-content: space-evenly;
    padding: 1rem 0;
`;

const SyncRewardsCol = styled(Col)`
    max-width: 450px;
    box-shadow: 0px 2px 4px -1px black;
    border-radius: 5px;
    background-color: white;
    margin: 0 1%;
    padding: 1% 1%;
    transition: all 0.5s;

    &:hover {
        transform: scale(1.1);
    }
`;

const SyncRewardLevel = styled.h4`
    @media (max-width: 450px) {
        font-size: 1.2rem;
    }
`;

const SyncRewardName = styled.h6`
    font-size: 1.05rem;
    text-decoration: underline;

    @media (max-width: 450px) {
        font-size: 0.85rem;
    }
`;

const SyncRewardEffect = styled.div`
    font-size: 0.85rem;
    padding: 5px 0;

    @media (max-width: 450px) {
        font-size: 0.75rem;
    }
`;

const SyncRewardType = styled.div`
    text-transform: capitalize;
    font-style: italic;

    @media (max-width: 450px) {
        font-size: 0.85rem;
    }
`;

Hero.SyncRewards = HeroSyncRewards;
Hero.Preview = HeroPreview;

export default Hero;
