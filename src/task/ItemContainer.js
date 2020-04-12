import React from 'react';
import gql from 'graphql-tag';
import { Query} from 'react-apollo';
import Item from "./Item";

const GET_ITEMS = gql`
  query($id: String!) {
    items(id: $id) {
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

const ItemContainer = ( {itemId} ) => (
    <Query query={GET_ITEMS} fetchPolicy={'network-only'} variables={{ id:itemId }}>
        {({ data, error, loading, subscribeToMore }) => {
            if (!data) {
                return null;
            }

            if (loading) {
                return <span>Loading ...</span>;
            }

            return (
                <Item
                    items={data.items}
                    subscribeToMore={subscribeToMore}
                />
            );
        }}
    </Query>
);

export default ItemContainer;
