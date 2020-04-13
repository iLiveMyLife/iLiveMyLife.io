import React from 'react';
import gql from 'graphql-tag';
import { Query} from 'react-apollo';
import Item from "./Item";
import NotFound from "../common/NotFound";

const GET_ITEMS = gql`
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

const ItemContainer = ( {itemId, props} ) => (
    <Query query={GET_ITEMS} fetchPolicy={'network-only'} variables={{ id:itemId }}>
        {({ data, error, loading, subscribeToMore }) => {
          if (!data || error) {
                return <NotFound />;
            }

            if (loading) {
                return <span>Loading ...</span>;
            }

            return (
                <Item
                    itemId={itemId}
                    indexedItems={data.indexedItems}
                    subscribeToMore={subscribeToMore}
                />
            );
        }}
    </Query>
);

export default ItemContainer;
