import React from 'react';
import { Link } from 'react-router-dom';
const BreadcrumbItem = (props) => {
    return (
        <li className={props.is_active?'active':''}>
            <Link to={props.link.url}>{
                props.link.icon? (<i className={props.link.icon}></i>):null
            }
                {props.link.text}
            </Link>
        </li>
    )
};
export default BreadcrumbItem;
