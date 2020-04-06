import React from 'react';
import gql from 'graphql-tag';
import {Mutation, Query} from 'react-apollo';
import { Input, List, Comment, Tooltip } from "antd";
import moment from "moment";
import Sender from "./Sender";

const GET_MESSAGES = gql`
  query($itemId: Int!, $cursor: String) {
    messages(itemId: $itemId, cursor: $cursor) {
      id
      content
      author
      createdAt  
      itemId
      typeId
    }
  }
`;

const MESSAGE_CREATED = gql`
  subscription($itemId: Int!) {
    messageCreated(itemId: $itemId) {
      id
      content  
      author
      createdAt  
      itemId
      typeId  
    }
  }
`;

const Messanger = ( {item} ) => (
    <Query query={GET_MESSAGES} fetchPolicy={'network-only'} variables={{ itemId:item.id }}>
        {({ data, error, loading, fetchMore, subscribeToMore }) => {
            if (!data) {
                return null;
            }

            if (loading) {
                return <span>Loading ...</span>;
            }

            return (
                <div>
                    <h1>Messenger:</h1>
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

class Messages extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            hasMoreItems: true,
        };
    }

    componentWillUnmount() {
        if (this.unsubscribe) {
            this.unsubscribe();
        }
    }

    componentDidMount() {
        this.unsubscribe = this.subscribe(this.props.itemId);
    }

    componentWillReceiveProps({messages, itemId }) {
        console.log("scroller:");
        console.log(this.scroller.scrollTop);
        if (this.props.itemId !== itemId) {
            if (this.unsubscribe) {
                this.unsubscribe();
            }
            this.unsubscribe = this.subscribe(itemId);
        }

        if (
            this.scroller &&
            this.scroller.scrollTop < 100 &&
            this.props.messages &&
            messages &&
            this.props.messages.length !== messages.length
        ) {
            // 35 items
            const heightBeforeRender = this.scroller.scrollHeight;
            // wait for 70 items to render
            setTimeout(() => {
                if (this.scroller) {
                    this.scroller.scrollTop = this.scroller.scrollHeight - heightBeforeRender;
                }
            }, 120);
        }
    }

    handleScroll = () => {
        console.log("handleScroll");
        console.log(this.props);
        const { messages, fetchMore, itemId } = this.props;
        console.log(messages)
        console.log(this.scroller);
        if (
            this.scroller &&
            this.scroller.scrollTop < 100 &&
            this.state.hasMoreItems &&
            messages.length >= 5
        ) {
            console.log("het");


            fetchMore({
                variables: {
                    itemId,
                    cursor: messages[0].createdAt,
                },
                updateQuery: (previousResult, { fetchMoreResult }) => {
                    console.log('fetcher');
                    if (!fetchMoreResult) {
                        return previousResult;
                    }

                    if (fetchMoreResult.messages.length < 5) {
                        this.setState({ hasMoreItems: false });
                    }
                    console.log("hi: ");
                    console.log(previousResult);
                    console.log(fetchMoreResult.messages);
                    return {
                        ...previousResult,
                        messages: [...fetchMoreResult.messages, ...previousResult.messages],
                    };
                },
            });
        }
    };

    subscribe = itemId =>
        this.props.subscribeToMore({
            document: MESSAGE_CREATED,
            variables: {
                itemId,
            },
            updateQuery: (prev, { subscriptionData }) => {
                if (!subscriptionData.data) return prev;
                console.log(subscriptionData.data.messageCreated);
                return {
                    messages: [
                        ...prev.messages,
                        subscriptionData.data.messageCreated,
                    ],
                };
            },
        });

    render() {
        return (
            <div>
                <ul style={{
                        height: '380px',
                        paddingLeft: '0px',
                        paddingRight: '20px',
                        display: 'flex',
                        flexDirection: 'column-reverse',
                        overflowY: 'auto',
                    }}
                    onScroll={this.handleScroll}
                    ref={(scroller) => {
                        this.scroller = scroller;
                    }}
                >
                    <List
                    className="comment-list"
                    header={`${this.props.messages.length} replies`}
                    itemLayout="horizontal"
                    dataSource={this.props.messages}
                    renderItem={item => {
                        return (<li>
                                <Comment
                                    author={item.author}
                                    avatar='https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png'
                                    content={item.content}
                                    datetime={
                                        <Tooltip title={moment.unix(parseInt(item.createdAt)/1000).utc().format('YYYY-MM-DD HH:mm:ss')}>
                                            <span>{moment.unix(parseInt(item.createdAt)/1000).utc().fromNow()}</span>
                                        </Tooltip>
                                    }
                                />
                            </li>
                        )
                    }}
                />
                </ul>
            </div>
        );
    }
}

export default Messanger;
