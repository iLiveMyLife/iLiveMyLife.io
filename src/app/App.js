import React, { Component } from 'react';
import './App.css';
import {
  Route,
  withRouter,
  Switch
} from 'react-router-dom';

import {getCurrentUser} from '../util/APIUtils';
import Presentation from '../presentation/Presentation';
import AppHeader from '../common/AppHeader';
import NotFound from '../common/NotFound';
import LoadingIndicator from '../common/LoadingIndicator';
import AppFooter from '../common/Footer';

import { Layout, notification } from 'antd';
const { Content, Footer } = Layout;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: null,
      isAuthenticated: false,
      isLoading: false
    };

    this.loadCurrentUser = this.loadCurrentUser.bind(this);

    notification.config({
      placement: 'topRight',
      top: 70,
      duration: 3,
    });
  }

  loadCurrentUser() {
    this.setState({
      isLoading: true
    });

    getCurrentUser()
      .then(response => {
          this.setState({
            currentUser: response,
            isAuthenticated: true,
            isLoading: false
        });

        this.props.history.push("/");

      }).catch(error => {
          this.setState({
          isLoading: false
      });
    });
  }

  componentDidMount() {
    this.loadCurrentUser();
  }

  render() {
    if(this.state.isLoading) {
      return <LoadingIndicator />
    }
    return (
        <Layout className="app-container">
          <AppHeader
              isAuthenticated={this.state.isAuthenticated}
              currentUser={this.state.currentUser}
              onLogout={this.handleLogout} />

          <Content className="app-content">
            <div className="container">
              <Switch>
                <Route exact path="/" render={(props) => <Presentation currentUser={this.state.currentUser} />}>
                </Route>
                <Route path="/demo"
                  render={(props) => <Presentation currentUser={this.state.currentUser} />}>
                </Route>
                <Route component={NotFound}></Route>
              </Switch>
            </div>
          </Content>
          <Footer className="footer-style">
              <AppFooter>
              </AppFooter>
          </Footer>
        </Layout>
    );
  }
}

export default withRouter(App);
