import React from 'react';
import { withRouter } from "react-router";
import BreadcrumbItem from './BreadcrumbItem';
class Breadcrumb extends React.Component
{
    constructor(props)
    {
        super(props);
    }
    componentDidMount()
    {
    }
    prepareLinks() {
        let links = [{
            text: 'Dashboard',
            url: '/',
            icon: 'fa fa-dashboard'
        }];
        if(this.props.location.pathname != '/') {
            // split pathname using '/'
            let parts = this.props.location.pathname.split('/');
            // filter parts to exclude empty and numeric parts
            parts = parts.filter(val => val != "" && isNaN(val));
            // loop through parts and push in the links array
            for(let i=0; i<parts.length; i++) {
                if (i == parts.length - 1) {
                    links.push({
                        text: parts[i].replace(/^\w/, c => c.toUpperCase()),
                        url: '#'
                    });
                } else {
                    links.push({
                        text: parts[i].replace(/^\w/, c => c.toUpperCase()),
                        url: '/' + parts[i]
                    });
                }
            }
        }
        return links;
    }
    render()
    {
        return (
            <ol className="breadcrumb">
                {this.prepareLinks().map((link, index) => <BreadcrumbItem key={index} link={link} is_active={index===link.length-1}/>)}
            </ol>
        )
    }
}
export default withRouter(Breadcrumb);
