import React, { Component } from 'react';
import {
    Link,
    withRouter
} from 'react-router-dom';
import './AppHeader.css';
import { APP_URL } from '../constants';
import { Layout, Menu } from 'antd';
const Header = Layout.Header;

class AppHeader extends Component {
    constructor(props) {
        super(props);
        this.handleMenuClick = this.handleMenuClick.bind(this);
    }

    handleMenuClick({ key }) {
      if(key === "demo") {
       // TODO
      }
    }

    render() {
        let menuItems = [
            <Menu.Item key="/login">
              <a href={APP_URL + "/login"}>Login</a>
            </Menu.Item>,
            <Menu.Item key="/signup">
              <a href={APP_URL + "/signup"}>Signup</a>
            </Menu.Item>
          ];

        return (
            <Header className="app-header">
            <div className="container">
              <div className="app-title" >
                <Link to="/">iLiveMyLife App</Link>
              </div>
              <Menu
                className="app-menu"
                mode="horizontal"
                selectedKeys={[this.props.location.pathname]}
                style={{ lineHeight: '64px' }} >
                  {menuItems}
              </Menu>
            </div>
          </Header>
        );
    }
}

export default withRouter(AppHeader);
