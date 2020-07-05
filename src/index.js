import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloProvider } from 'react-apollo';
import { ApolloClient } from 'apollo-client';
import { getMainDefinition } from 'apollo-utilities';
import { ApolloLink, split } from 'apollo-link';
import { createHttpLink } from 'apollo-link-http';
import { setContext } from 'apollo-link-context';
import { WebSocketLink } from 'apollo-link-ws';
import { InMemoryCache } from 'apollo-cache-inmemory';
import './index.css';
import App from './app/App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router } from 'react-router-dom';
import { ACCESS_TOKEN, WEB_SERVER_PATH, WEB_SUBSCRIPTION_PATH } from './constants';

const httpLink = createHttpLink({
    uri: `${WEB_SERVER_PATH}`,
});

const authLink = setContext((_, { headers }) => {
    const token = localStorage.getItem(ACCESS_TOKEN);
    return {
        headers: {
            ...headers,
            "access-token": token ? localStorage.getItem(ACCESS_TOKEN) : ""
        }
    }
});

const wsLink = new WebSocketLink({
    uri: `${WEB_SUBSCRIPTION_PATH}`,
    options: {
        reconnect: true,
        connectionParams: () => ({
            headers: {
                "access-token": localStorage.getItem(ACCESS_TOKEN),
                "my-header":"test"
            }
        }),
        lazy: true
    },
});

const terminatingLink = split(
    ({ query }) => {
        const { kind, operation } = getMainDefinition(query);
        return (
            kind === 'OperationDefinition' && operation === 'subscription'
        );
    },
    wsLink,
    authLink.concat(httpLink),
);

const link = ApolloLink.from([terminatingLink]);

const cache = new InMemoryCache({
    dataIdFromObject: o => o.id
});

const client = new ApolloClient({
    link,
    cache
});

ReactDOM.render(
    <ApolloProvider client={client}>
        <Router>
            <App />
        </Router>
    </ApolloProvider>,
    document.getElementById('root')
);

registerServiceWorker();
