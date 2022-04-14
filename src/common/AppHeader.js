import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import './AppHeader.css';
import { Layout, Menu, Dropdown } from 'antd';
import {
    HomeOutlined,
    UserOutlined,
    DownOutlined,
    GithubOutlined
} from '@ant-design/icons';
import Navbar from "./Navbar";
const Header = Layout.Header;
const { SubMenu } = Menu;


class AppHeader extends Component {
    constructor(props) {
        super(props);
        this.handleMenuClick = this.handleMenuClick.bind(this);
    }
    handleClick = e => {
        console.log('click ', e);
    };

    handleMenuClick({ key }) {
      if(key === "logout") {
        this.props.onLogout();
      }
    }

    render() {
        let menuItems;
        if(this.props.currentUser) {
          menuItems = [
            <Menu.Item key="/">
              <Link to="/">
                  <HomeOutlined className="nav-icon"/>
              </Link>
            </Menu.Item>,
              /*
            <Menu.Item key="/poll/new">
                <Link to="/poll/new">
                    <img src={pollIcon} alt="poll" className="poll-icon" />
                </Link>
            </Menu.Item>,
            */
            <Menu.Item key="/profile" className="profile-menu">
                <ProfileDropdownMenu
                  currentUser={this.props.currentUser}
                  handleMenuClick={this.handleMenuClick}/>
            </Menu.Item>
          ];
        } else {
          menuItems = [
              <Menu.Item key="/project">
                  <a href="https://app.ilivemylife.io/item/000001736056c2cb-2655b2cf545d0001" rel="noopener noreferrer" target="_blank">Project</a>
              </Menu.Item>,
              <SubMenu key="about" title="About">
                      <Menu.Item key="/whitepaper">
                          <a href="https://app.ilivemylife.io/document/0000017af0ef0397-22abe99233a90000" rel="noopener noreferrer" target="_blank">Whitepaper</a>
                      </Menu.Item>
                      <Menu.Item key="/deck">
                          <a href="https://app.ilivemylife.io/item/0000017c75eb8baa-260630ac320d0000" rel="noopener noreferrer" target="_blank">Deck</a>
                      </Menu.Item>
                      <Menu.Item key="/graph">
                          <a href="https://app.ilivemylife.io/graph/000001736056c2cb-2655b2cf545d0001" rel="noopener noreferrer" target="_blank">Graph</a>
                      </Menu.Item>
              </SubMenu>,
              <Menu.Item key="/how_to_videos">
                  <a href="https://www.youtube.com/playlist?list=PLYkUZvRwI3MhnNJGQ12lqXUageAX0sxtt" rel="noopener noreferrer" target="_blank">How-to</a>
              </Menu.Item>,
            <Menu.Item key="payment">
            <Link to={"./payment"}>Payment</Link>
            </Menu.Item>,
            <Menu.Item key="/github">
              <a href="https://github.com/iLiveMyLife" rel="noopener noreferrer" target="_blank"><GithubOutlined style={{ fontSize: '21px' }} /></a>
            </Menu.Item>,
            <Menu.Item key="/login">
              <a href="https://app.ilivemylife.io/login" rel="noopener noreferrer" target="_blank">Login</a>
            </Menu.Item>,
            <Menu.Item key="/signup">
                <a href="https://app.ilivemylife.io/signup" rel="noopener noreferrer" target="_blank">Signup</a>
            </Menu.Item>
          ];
        }

        return (
          <Header className="app-header">
            <div className="container">
              <div className="app-title" >
                <Link to="/">iLiveMyLife ...and so do you</Link>
              </div>
              <Navbar items={menuItems} location="this.props.location.pathname"/>
            </div>
          </Header>
        );
    }
}

function ProfileDropdownMenu(props) {
  const dropdownMenu = (
    <Menu onClick={props.handleMenuClick} className="profile-dropdown-menu">
      <Menu.Item key="user-info" className="dropdown-item" disabled>
        <div className="user-full-name-info">
          {props.currentUser.displayName ? props.currentUser.displayName : null}
        </div>
        <div className="username-info">
          @{props.currentUser.username}
        </div>
      </Menu.Item>
      <Menu.Divider />
        {/*
      <Menu.Item key="profile" className="dropdown-item">
        <Link to={`/users/${props.currentUser.username}`}>Profile</Link>
      </Menu.Item>
      */}
      <Menu.Item key="logout" className="dropdown-item">
           Logout
      </Menu.Item>
    </Menu>
  );

  return (
    <Dropdown
      overlay={dropdownMenu}
      trigger={['click']}
      getPopupContainer = { () => document.getElementsByClassName('profile-menu')[0]}>
      <span className="ant-dropdown-link">
         <UserOutlined className="nav-icon" style={{marginRight: 0}} />
         <DownOutlined />
      </span>
    </Dropdown>
  );
}

export default withRouter(AppHeader);
