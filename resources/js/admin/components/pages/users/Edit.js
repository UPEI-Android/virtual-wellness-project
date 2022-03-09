import React from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';

// partials
import Breadcrumb from '../../partials/Breadcrumb';
import UserForm from './UserForm';

// actions
import { handleUserChange, showUser, editUser, setUserDefaults, resetUserFields } from '../../../../store/actions/UserActions';


class Edit extends React.Component
{
    constructor(props)
    {
        super(props);

        this.handleUserChange = this.handleUserChange.bind(this);

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount()
    {
        this.props.setUserDefaults();

        this.props.resetUserFields();

        this.props.showUser(this.props.match.params.id);
    }

    handleUserChange(e) {
        if(e.target.name == 'is_admin') {
            this.props.handleUserChange(e.target.name, e.target.value, e.target.checked);
        } else {
            this.props.handleUserChange(e.target.name, e.target.value);
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        let self = this;

        this.props.editUser(this.props.user.user, this.props.match.params.id, function () {

            // reset fields
            self.props.resetUserFields();

            // redirect
            setTimeout(() => self.props.history.push('/users'), 2000);
        });
    }

    render()
    {
        return (
            <div className="content-wrapper">
                <section className="content-header">
                    <h1>
                        Edit user
                    </h1>

                    <Breadcrumb />

                </section>

                <section className="content">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="box box-warning">
                                <div className="box-header with-border">
                                    <h3 className="box-title">Edit user #{this.props.match.params.id}</h3>

                                    <Link to='/users' className="btn btn-warning btn-sm pull-right"><i className="fa fa-arrow-left"></i> Return back</Link>
                                </div>
                                <form role="form" method="post" onSubmit={this.handleSubmit}>

                                    <div className="box-body">
                                        <UserForm user={this.props.user.user} create_update_spinner={this.props.user.create_update_spinner}
                                                  success_message={this.props.user.success_message} error_message={this.props.user.error_message}
                                                  handleUserChange={this.handleUserChange}
                                                  validation_errors={this.props.user.validation_errors} />
                                    </div>
                                    <div className="box-footer">
                                        <button type="submit" className="btn btn-success">Submit</button>
                                    </div>
                                </form>
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
        showUser: (id) => dispatch(showUser(id)),
        handleUserChange: (field, value, checked = null) => dispatch(handleUserChange(field, value, checked)),
        editUser: (payload, id, cb) => dispatch(editUser(payload, id, cb)),
        setUserDefaults: () => dispatch(setUserDefaults()),
        resetUserFields: () => dispatch(resetUserFields())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Edit);
