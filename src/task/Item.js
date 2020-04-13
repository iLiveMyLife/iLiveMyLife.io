import React from "react";
import ItemList from './ItemList';
import ItemTitle from './ItemTitle';
import ItemSender from './ItemSender';
import EditItemPopup from "./EditItemPopup";
import ItemBreadcrumb from "./ItemBreadcrumb";
import Messanger from "./Messanger";

import './Item.css';
import gql from "graphql-tag";

const ITEM_CREATED = gql`
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

export default class Item extends React.Component {
    constructor(props) {
        super(props);
        const [indexedItem, ...indexedItems] = this.props.indexedItems;
        const item = indexedItem.item;

        const path = [
            { id: "0", title: 'My Life' },
            { id: 100, title: 'First-level task title' },
            { id: 101, title: 'Second-level task title' },
            { id: 102, title: 'Third-level task title' }
        ];

        this.state = {
            itemId: this.props.itemId,
            itemToEdit: item,
            indexedItem: indexedItem,
            indexedItems: indexedItems,
            item: item,
            path: path,
            isEditFormVisible: false
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

    componentWillReceiveProps({indexedItems, itemId }) {
        if (this.props.itemId !== itemId) {
            if (this.unsubscribe) {
                this.unsubscribe();
            }

            this.unsubscribe = this.subscribe(itemId);
        }
    }

    subscribe = itemId =>
        this.props.subscribeToMore({
            document: ITEM_CREATED,
            variables: {
                itemId,
            },
            updateQuery: (prev, { subscriptionData }) => {
                if (!subscriptionData.data) return prev;

                return {
                    indexedItems: [
                        ...prev.indexedItems,
                        subscriptionData.data.itemCreated,
                    ],
                };
            },
        });

    editItem = indexedItem => {
        this.setState({itemToEdit: indexedItem.item, isEditFormVisible: true})
    };

    onEditItem = (item) => {
        this.setState( {item: item, isEditFormVisible: false});
    };

    onCloseEditItem = () => {
        this.setState({ isEditFormVisible: false });
    };

    removeItem = indexedItem => {
        console.log(indexedItem);
    };

    removeTodo = indexedItem => {
        let newIndexedItems = [...this.state.indexedItems];
        let index = indexedItem.index;

        // Remove element, slice at 1 before since the array starts with index 1 (main item is at 0)
        newIndexedItems.splice(index-1, 1);

        // Decrement greater indexes
        for (let i = index; i < newIndexedItems.length; i++) {
            newIndexedItems[i].index -= 1;
        }

        this.setState({
            indexedItems: newIndexedItems
        });
    };

    render() {
        return (
            <div className="itemContainer">
                <ItemBreadcrumb paths={this.state.path}/>
                <ItemTitle indexedItem={this.state.indexedItem} editItem={this.editItem} removeItem={this.removeItem}/>

                <ItemSender itemId={this.state.itemId} />
                <ItemList indexedItems={this.props.indexedItems} editItem={this.editItem} removeItem={this.removeTodo}/>

                <EditItemPopup
                    key={this.state.itemToEdit.id}
                    item={this.state.itemToEdit}
                    onClose={this.onCloseEditItem}
                    onSubmit={item => this.onEditItem(item)}
                    visible={this.state.isEditFormVisible} />

                <Messanger item={this.state.item}/>
            </div>
        );
    }
}


