import React from 'react';
import ResponsiveAntMenu from 'responsive-ant-menu';
import { Menu } from 'antd';
import { CloseOutlined, MenuOutlined } from '@ant-design/icons';

const Navbar = (props) => (
            <ResponsiveAntMenu
                activeLinkKey={props.location}
                mobileMenuContent={isMenuShown => isMenuShown ? <a><CloseOutlined /></a> : <a><MenuOutlined /></a>}
                mode={isMenuShown => isMenuShown ? 'vertical' : 'horizontal'}
                menuClassName={'app-menu'}
                popoverTrigger="click"
            >
                {(onLinkClick) =>
                    <Menu>
                        {props.items}
                    </Menu> 
                }
            </ResponsiveAntMenu>
);

export default Navbar;