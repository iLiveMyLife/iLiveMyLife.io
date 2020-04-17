import React from 'react';
import { Query} from 'react-apollo';
import MessageSender from "./MessageSender";
import Messages from "./Messages";
import { MESSAGES_PER_LOAD } from '../constants';
import './Messanger.css';
import {GET_MESSAGES} from "../graphql/message";

const Messenger = ({item} ) => (
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
                    <MessageSender item={item}/>
                </div>
            );
        }}
    </Query>
);

export default Messenger;
