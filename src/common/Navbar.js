import React from 'react';
import ResponsiveAntMenu from 'responsive-ant-menu';
import { Menu } from 'antd';
import { CloseOutlined, MenuOutlined} from '@ant-design/icons';

const Navbar = (props) => (
            <ResponsiveAntMenu
                activeLinkKey={props.location}
                mobileBreakPoint={1028}
                mobileMenuContent={isMenuShown => isMenuShown ? <CloseOutlined /> : <MenuOutlined />}
                mode={isMenuShown => isMenuShown ? 'inline' : 'horizontal' }
                menuClassName={'app-menu'}
                popoverTrigger="click"
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['about']}
            >
                {(onLinkClick) =>
                    <Menu>
                        {props.items}
                    </Menu>
                }
            </ResponsiveAntMenu>
);
export default Navbar;