import React, { Component } from 'react';
import {
    Link,
    withRouter
} from 'react-router-dom';
import './AppHeader.css';
import { Layout, Menu, Dropdown } from 'antd';
import ResponsiveAntMenu from 'responsive-ant-menu'
import { HomeOutlined, UserOutlined, DownOutlined } from '@ant-design/icons';
import { CloseOutlined, MenuOutlined } from '@ant-design/icons';
const Header = Layout.Header;
const LIGHT = 'light';
   // const DARK = 'dark';
   // const VERTICAL = 'vertical';
    const HORIZONTAL = 'horizontal';
    const BOTTOM = 'bottom';
 //   const RIGHT = 'right';

    
    
class AppHeader extends Component {

    constructor(props) {
        super(props);
        this.handleMenuClick = this.handleMenuClick.bind(this);
        this.state = {
            desktopTheme : LIGHT,
            mobileTheme : LIGHT,
            closeOnClick : true,
            mobileBreakpoint : 575,
            viewMode : HORIZONTAL,
            menuPosition : BOTTOM
        }
    }

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
            </Menu.Item>
              /*
            <Menu.Item key="/poll/new">
                <Link to="/poll/new">
                    <img src={pollIcon} alt="poll" className="poll-icon" />
                </Link>
            </Menu.Item>,
            */
            
          ];
        } else {
          menuItems = [
            <Menu.Item key="/graph">
              <a href="https://app.ilivemylife.io/graph/000001736056c2cb-2655b2cf545d0001">Project's Graph</a>
            </Menu.Item>,
            <Menu.Item key="/login">
              <a href="https://app.ilivemylife.io/login">Login</a>
            </Menu.Item>,
            <Menu.Item key="/signup">
                <a href="https://app.ilivemylife.io/signup">Signup</a>
            </Menu.Item>
          ];
        }

        return ( 
            <Header className="app-header">
            <div className="container">
              <div className="app-title" >
                <Link to="/">iLiveMyLife ...and so do you</Link>
              </div>
            
              <ResponsiveAntMenu
              
                activeLinkKey={'this.props.location.pathname'}
                mobileMenuContent={isMenuShown => isMenuShown ? <a><CloseOutlined /></a> : <a><MenuOutlined /></a>}
                mobileBreakPoint={this.state.mobileBreakpoint}
                mode={isMenuShown => isMenuShown ? 'vertical' :  'horizontal'}
                menuClassName={'app-menu'}
                closeOnClick={this.state.closeOnClick}
                popoverTrigger='click'
                theme={isMobile => isMobile ? this.state.mobileTheme : this.state.desktopTheme}   
                placement={this.state.menuPosition} 
               >
                {(onLinkClick) =>
                    <Menu>
                        {menuItems}
                    </Menu>
                }            
            </ResponsiveAntMenu> 
            </div>
          </Header>
        );
  }
}
/*
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
      } */
      /*
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
*/

export default withRouter(AppHeader);
