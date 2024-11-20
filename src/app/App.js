import React, { Component } from 'react';
import './App.css';
import {
  Route,
  withRouter,
  Switch
} from 'react-router-dom';

import Presentation from '../presentation/Presentation';
import AppHeader from '../common/AppHeader';
import NotFound from '../common/NotFound';
import LoadingIndicator from '../common/LoadingIndicator';
import AppFooter from '../common/AppFooter';

import { Layout, notification } from 'antd';
import Payment from '../common/Payment';
import Introduction from "../introduction/Introduction";
const { Content, Footer } = Layout;

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentUser: null,
            isAuthenticated: false,
            isLoading: false
        };

        notification.config({
            placement: 'topRight',
            top: 70,
            duration: 3,
        });
    }

    render() {
        if(this.state.isLoading) {
            return <LoadingIndicator />
        }

    return (
        <Layout className="app-container">
            <AppHeader isAuthenticated={this.state.isAuthenticated} currentUser={this.state.currentUser} />

            <Content className="app-content">
                <div className="container">
                    <Switch>
                        <Route exact path="/" render={(props) => <Introduction currentUser={this.state.currentUser} />} />
                        <Route path="/membership" component={Payment}></Route>
                        <Route exact path="/:slidePath" render={(props) => <Presentation currentUser={this.state.currentUser} />} />
                        <Route path="/demo"
                               render={(props) => <Presentation currentUser={this.state.currentUser} />}>
                        </Route>
                        <Route component={NotFound} />
                    </Switch>
                </div>
            </Content>
            <Footer className="footer-style">
                <AppFooter />
            </Footer>
        </Layout>
    );
    }
}

export default withRouter(App);
