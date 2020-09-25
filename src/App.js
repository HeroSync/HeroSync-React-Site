import React from 'react';
import './App.css';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import Heroes from './components/Heroes';
import Cards from './components/Cards';
import Hero from './components/Hero';
import Blogs from './components/Blogs';
import Post from './components/Post';

const apolloClient = new ApolloClient({
    uri: 'https://admin.herosync.com/graphql',
    cache: new InMemoryCache()
});

function App() {
    return (
        <ApolloProvider client={apolloClient}>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={LandingPage} />
                    <Route exact path="/heroes" component={Heroes} />
                    <Route path="/hero/:slug" component={Hero} />
                    <Route exact path="/cards" component={Cards} />
                    <Route exact path="/blog" component={Blogs} />
                    <Route path="/:slug" component={Post} />
                    {/* <Route path="/card/:slug" component={Card} /> */}
                </Switch>
            </BrowserRouter>
        </ApolloProvider>
    );
}

export default App;
