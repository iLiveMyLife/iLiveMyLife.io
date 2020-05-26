import React, { Component } from 'react';
import ItemContainer from "../task/ItemContainer";

class Home extends Component {
    render() {
        let { rootItemId } = this.props.currentUser;
        return (
            <ItemContainer itemId={rootItemId} />
        );
    }
}

export default Home;
