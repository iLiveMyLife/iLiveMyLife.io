import gql from "graphql-tag";

export const GET_ITEMS = gql`
    query($id: String!) {
        indexedItems(id: $id) {
            index,
            item {
                id
                itemId
                title
                description
                isActive
                dueDate
                tags
                createdBy
                createdAt
            }
        }
    }
`;

export const ADD_ITEM = gql`
    mutation AddItem($itemId: String!, $title: String!) {
        addItem(itemId: $itemId, title: $title) {
            ok,
            itemResponse {
                id
                itemId
                title
                description
                isActive
                dueDate
                tags
                createdBy
                createdAt
            }
        }
    }
`;

export const ITEM_CREATED = gql`
    subscription($itemId: String!) {
        itemCreated(itemId: $itemId) {
            index,
            item {
                id
                itemId
                title
                description
                isActive
                dueDate
                tags
                createdBy
                createdAt
            }
        }
    }
`;

export const EDIT_ITEM = gql`
    mutation EditItem($index: Int!, $itemInput: ItemInput!) {
        editItem(index: $index, itemInput: $itemInput) {
            id
            itemId
            title
            description
            isActive
            dueDate
            tags
            createdBy
            createdAt
        }
    }
`;

export const REMOVE_ITEM = gql`
    mutation Remove($id: String!) {
        removeItem(id: $id) {
            ok,
            id
        }
    }
`;
