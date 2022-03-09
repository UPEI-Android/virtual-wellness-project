import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { deleteUser } from '../../../../store/actions/UserActions';

class Row extends React.Component {

    constructor(props)
    {
        super(props);

        this.handleDelete = this.handleDelete.bind(this);
    }

    handleDelete(e) {
        e.preventDefault();

        if(confirm("Are you sure?")) {
            this.props.deleteUser(this.props.user.id);
        }
    }

    render()
    {
        return (
            <tr>
                <td>{this.props.user.id}</td>
                <td>{this.props.user.name}</td>
                <td>
                    {this.props.user.email}
                </td>
                <td>{this.props.user.is_admin==1?'Yes':'No'}</td>
                <td>{this.props.user.created_at}</td>
                <td>
                    <Link to={'/users/edit/' + this.props.user.id} className="btn btn-info btn-sm"><i
                        className="fa fa-edit"></i></Link>
                    <a href="#" className="btn btn-danger btn-sm" onClick={this.handleDelete}><i
                        className="fa fa-remove"></i></a>
                </td>
            </tr>
        )
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        deleteUser: (id) => dispatch(deleteUser(id))
    }
};

export default connect(null, mapDispatchToProps)(Row);
