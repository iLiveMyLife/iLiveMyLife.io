import React, {Component} from "react";
import { Link } from 'react-router-dom';

export default class ItemBreadcrumb extends Component {
    render() {
        return (
            <div className="ant-breadcrumb">
                {
                    this.props.paths.map(i => {
                        let url = "/item/" + i.id;
                        return (
                            <Link key={i.id} className="ant-breadcrumb-link" to={url}>{i.title} / </Link>
                        );
                    })
                }
            </div>
        );
    }
}