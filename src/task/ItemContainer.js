import React, {Component} from 'react';
import { Query} from 'react-apollo';
import Item from "./Item";
import NotFound from "../common/NotFound";
import {GET_ITEMS} from "../graphql/item";

class ItemContainer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let itemId = this.props.itemId;
        return (
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
    }
}

export default ItemContainer;
