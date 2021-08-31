import React from 'react';
import './AppFooter.css';
import { MailOutlined } from '@ant-design/icons';

const AppFooter = () => {
    return (
        <div className="container app-footer">
                <ul className="socials">
                    <li><a href={"mailto: info@ilivemylife.io" }><MailOutlined /> Send email</a></li>
                </ul>
        </div>
    );
}

export default AppFooter;