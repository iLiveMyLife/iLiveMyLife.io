import React from 'react';
import { Mutation } from 'react-apollo';
import {Input, notification} from "antd";
import {ADD_MESSAGE} from "../graphql/message";

class MessageSender extends React.Component {
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

        let response = await mutate({ variables: { itemId: this.props.item.id, message: this.state.value, typeId: "0" } });
        const { data: { addMessage } } = response;
        const {ok} = addMessage;

        if(!ok) {
            notification.error({
                message: 'iLiveMyLife App',
                description: 'Some error happened. Refresh to check if message was saved.'
            });
        }

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
                            autoComplete={"off"}
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

export default MessageSender;
