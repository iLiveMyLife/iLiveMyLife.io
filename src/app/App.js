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
import AppFooter from '../common/AppFooter';

import { Layout, notification,Carousel } from 'antd';
const { Content, Footer } = Layout;

function onChange(a, b, c) {
  console.log(a, b, c);
}
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
                <Carousel afterChange={onChange}>
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
                    <div className="content-style">
                        <h3>Collaboration tool on a chain</h3>
                    </div>
                    <div className="content-style">
                        <h3>Distributed Computational Graph</h3>
                    </div>
                    <div className="content-style">
                        <h3>Collective database and Knowledge Graph</h3>
                    </div>
                    <div className="content-style">
                        <h3>Cloud programming interface</h3>
                    </div>
                    <div className="content-style">
                      <h3>Yes, you!! Become a symbiose of machine learning and your creativity</h3>
                    </div>
                    <div className="content-style">
                      <h3>Multi-dimensional todo list? Here you go!</h3>
                    </div>
                    <div className="content-style">
                      <h3>Organize your life in a new type of thought gathering process</h3>
                    </div>
                    <div className="content-style">
                      <h3>Manage teams via individualism, freedom, not corporate structure and hierarchy</h3>
                    </div>
                    <div className="content-style">
                      <h3>We are built on top of hierarchy, the free one!</h3>
                    </div>
                    <div className="content-style">
                      <h3>Open sourcing thoughts</h3>
                    </div>
                    <div className="content-style">
                      <h3>Build things together, brings what you have already built as a resource</h3>
                    </div>
                    <div className="content-style">
                      <h3>Idea mining</h3>
                    </div>
                    <div className="content-style">
                      <h3>Distributed project management</h3>
                    </div>
                    <div className="content-style">
                      <h3>Prognostic problem solving</h3>
                    </div>
                    <div className="content-style">
                      <h3>Crypto communism</h3>
                    </div>
                    <div className="content-style">
                      <h3>It is like a Mendeleev table but better, since you can create a Mendeleev table yourself</h3>
                    </div>
                    <div className="content-style">
                      <h3>We are a global suppliers of webhook links - supplier publishes an event and everyone else listens (including machines who are themselves are data structures)</h3>
                    </div>
                    <div className="content-style">
                        <h3>Is it a dead cat or alife? Let's just handshake that it is a Cat?!!</h3>
                    </div>
                    <div className="content-style">
                        <h3>We can program our cultures on the network and watch it changing online and gradually vote for changes</h3>
                    </div>
                </Carousel>
            </Content>
          <Footer className="footer-style">
            <AppFooter />
          </Footer>
        </Layout>
    );
  }
}

export default withRouter(App);
