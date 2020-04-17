import React from 'react';
import gql from 'graphql-tag';
import { Query} from 'react-apollo';
import Sender from "./Sender";
import Messages from "./Messages";
import { MESSAGES_PER_LOAD } from '../constants';
import './Messanger.css';
import {GET_MESSAGES} from "../graphql/message";

const Messanger = ( {item} ) => (
    <Query query={GET_MESSAGES} fetchPolicy={'network-only'} variables={{ itemId:item.id, messagesPerLoad: MESSAGES_PER_LOAD }}>
        {({ data, error, loading, fetchMore, subscribeToMore }) => {
            if (!data) {
                return null;
            }

            if (loading) {
                return <span>Loading ...</span>;
            }

            return (
                <div className="messengerContainer">
                    <Messages
                        itemId={item.id}
                        messages={data.messages}
                        fetchMore={fetchMore}
                        subscribeToMore={subscribeToMore}
                    />
                    <Sender item={item}/>
                </div>
            );
        }}
    </Query>
);

export default Messanger;
