import React from "react";
import update from 'react-addons-update';
import ItemList from './ItemList';
import ItemTitle from './ItemTitle';
import ItemSender from './ItemSender';
import EditItemPopup from "./EditItemPopup";
import ItemBreadcrumb from "./ItemBreadcrumb";
import Messanger from "./Messanger";

import './Item.css';
import {ITEM_CREATED} from "../graphql/item";

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
            indexedItemToEdit: indexedItem,
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

        return null;
    }

    subscribe = itemId =>
        this.props.subscribeToMore({
            document: ITEM_CREATED,
            variables: {
                itemId,
            },
            updateQuery: (prev, { subscriptionData }) => {
                if (!subscriptionData.data) return prev;

                // If item is deleted
                if (subscriptionData.data.itemCreated.index === -1){
                    return {
                        indexedItems: update(prev.indexedItems, {
                            $splice: [[prev.indexedItems.findIndex(e => e.item.id === subscriptionData.data.itemCreated.item.id), 1]]
                        })
                    };
                }

                // if subscription notifies for item updates then we don't need to change anything, since cache updated automatically based on id
                const index = prev.indexedItems.findIndex((e) => e.item.id === subscriptionData.data.itemCreated.item.id);
                if (index !== -1){
                    return prev;
                }

                // If item is added
                return {
                    indexedItems: [
                        ...prev.indexedItems,
                        subscriptionData.data.itemCreated,
                    ],
                };
            },
       });

    editItem = indexedItem => {
        this.setState({indexedItemToEdit: indexedItem, isEditFormVisible: true})
    };

    onCloseEditItem = () => {
        this.setState({ isEditFormVisible: false });
    };

    removeItem = async (indexedItem, mutate) => {
        const response = await mutate({
            variables: { id: indexedItem.item.id }
        });
    };

    render() {
        const [indexedItem, ...indexedItems] = this.props.indexedItems;
        return (
            <div className="itemContainer">
                <ItemBreadcrumb paths={this.state.path}/>
                <ItemTitle indexedItem={indexedItem} editItem={this.editItem} removeItem={this.removeItem}/>

                <ItemSender itemId={this.state.itemId} />
                <ItemList indexedItems={indexedItems} editItem={this.editItem} removeItem={this.removeItem}/>

                <EditItemPopup
                    key={this.state.indexedItemToEdit.item.id}
                    index={this.state.indexedItemToEdit.index}
                    item={this.state.indexedItemToEdit.item}
                    onClose={this.onCloseEditItem}
                    visible={this.state.isEditFormVisible} />

                <Messanger item={indexedItem.item}/>
            </div>
        );
    }
}


