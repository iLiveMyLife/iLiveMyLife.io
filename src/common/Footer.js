import React from 'react';
import './Footer.css';
import { MailOutlined } from '@ant-design/icons';

const AppFooter =()=> {
    return (
        <div className="container ">
                <ul className="socials">
                    <li><a href="/">About</a></li>
                    <li><a href={"mailto: info@ilivemylife.io" }><MailOutlined /> Send email</a></li>
                </ul>
        </div>
    );
}

export default AppFooter;