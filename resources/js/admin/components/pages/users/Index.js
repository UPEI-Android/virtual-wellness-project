import React from 'react';
import { connect } from 'react-redux';
import Breadcrumb from '../../partials/Breadcrumb';
import { listUsers, setUserDefaults } from '../../../../store/actions/UserActions';
import Spinner from '../../partials/Spinner';
import Row from './Row';
import { Link } from 'react-router-dom';
import Pagination from '../../partials/Pagination';
import SuccessAlert from '../../partials/SuccessAlert';
import ErrorAlert from '../../partials/ErrorAlert';

class Index extends React.Component
{
    constructor(props)
    {
        super(props);
    }

    componentDidMount() {
        this.props.setUserDefaults();

        this.props.listUsers(1);
    }

    render()
    {
        return (
            <div className="content-wrapper">
                <section className="content-header">
                    <h1>
                        Users
                    </h1>

                    <Breadcrumb />

                </section>

                <section className="content">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="box">
                                <div className="box-header">
                                    <h3 className="box-title">All users</h3>

                                    <Link to='/users/add' className="btn btn-primary pull-right">Add <i className="fa fa-plus"></i></Link>
                                </div>

                                <div className="box-body">
                                    <Spinner show={this.props.user.list_spinner}/>

                                    <SuccessAlert msg={this.props.user.success_message}/>
                                    <ErrorAlert msg={this.props.user.error_message}/>

                                    <table className="table">
                                        <thead>
                                        <tr>
                                            <th>#</th>
                                            <th>Name</th>
                                            <th>Email</th>
                                            <th>Admin</th>
                                            <th>Created date</th>
                                            <th width="15%">Actions</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        {
                                            this.props.user.users.data?(
                                                this.props.user.users.data.map(item => <Row key={item.id} user={item} />)
                                            ):null
                                        }
                                        </tbody>
                                    </table>
                                </div>

                                <Pagination data={this.props.user.users} onclick={this.props.listUsers.bind(this)} />

                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {

    return {
        user: state.user
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        listUsers: (page) => dispatch(listUsers(page)),
        setUserDefaults: () => dispatch(setUserDefaults())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Index);
