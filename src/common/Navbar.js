import React from 'react';
import ResponsiveAntMenu from 'responsive-ant-menu';
import { Layout, Menu } from 'antd';
import { CloseOutlined, MenuOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

const Header = Layout.Header;

const Navbar = (props) => (
    <Header className="app-header">
        <div className="container">
            <div className="app-title" >
                <Link to="/">iLiveMyLife ...and so do you</Link>
            </div>
            <ResponsiveAntMenu
                activeLinkKey={props.location}
                mobileMenuContent={isMenuShown => isMenuShown ? <a><CloseOutlined /></a> : <a><MenuOutlined /></a>}
                mode={isMenuShown => isMenuShown ? 'vertical' : 'horizontal'}
                menuClassName={'app-menu'}
                popoverTrigger="hover"
            >
                {(onLinkClick) =>
                    <Menu>
                        {props.Items}
                    </Menu> 
                }
            </ResponsiveAntMenu>
        </div>
    </Header>
);

export default Navbar;