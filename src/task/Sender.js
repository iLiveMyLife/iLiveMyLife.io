import React from 'react';
import gql from 'graphql-tag';
import { Mutation } from 'react-apollo';
import { Input } from "antd";

const ADD_MESSAGE = gql`
    mutation Add($itemId: Int!, $message: String!, $typeId: String!) {
        addMessage(itemId: $itemId, message: $message, typeId: $typeId) {
            id,
            content
        }
    }
`;

class Sender extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isSubmitting: false,
            value: '',
        };
    }

    handleChange = e => {
        this.setState({
            value: e.target.value,
        });
    };

    handleSubmit = async (mutate) => {
        if (!this.state.value) {
            return;
        }

        this.setState({
            isSubmitting: true,
        });

        const response = await mutate({ variables: { itemId: this.props.item.id, message: this.state.value, typeId: "0" } });
        console.log(response);

        this.setState({
            isSubmitting: false,
            value: ''
        });

        this.element.focus();
    };

    render() {
        return (
            <Mutation mutation={ADD_MESSAGE}>
                {
                    (mutate, { client }) => (
                        <Input
                            ref={(element) => {
                                this.element = element;
                            }}
                            autoFocus={true}
                            onPressEnter={async () => this.handleSubmit(mutate)}
                            onChange={this.handleChange}
                            name="message"
                            disabled={this.state.isSubmitting}
                            value={this.state.value}
                            placeholder={`Message #${this.props.item.title}`}
                        />)
                }
            </Mutation>
        );
    }
}

export default Sender;
