import gql from "graphql-tag";

export const GET_MESSAGES = gql`
    query($itemId: String!, $cursor: String, $messagesPerLoad: Int!) {
        messages(itemId: $itemId, cursor: $cursor, messagesPerLoad: $messagesPerLoad) {
            id
            content
            createdBy
            createdAt
            itemId
            typeId
        }
    }
`;

export const ADD_MESSAGE = gql`
    mutation Add($itemId: String!, $message: String!, $typeId: String!) {
        addMessage(itemId: $itemId, message: $message, typeId: $typeId) {
            ok
            messageResponse {
                id,
                content
            }
        }
    }
`;

export const MESSAGE_CREATED = gql`
    subscription($itemId: String!) {
        messageCreated(itemId: $itemId) {
            id
            content
            createdBy
            createdAt
            itemId
            typeId
        }
    }
`;
