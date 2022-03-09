import React from 'react';
import Spinner from '../../partials/Spinner';
import SuccessAlert from '../../partials/SuccessAlert';
import ErrorAlert from '../../partials/ErrorAlert';

class Form extends React.Component
{
    constructor(props)
    {
        super(props);
    }

    render()
    {
        return (
            <div className="row">

                <Spinner show={this.props.create_update_spinner}/>
                <SuccessAlert msg={this.props.success_message}/>
                <ErrorAlert msg={this.props.error_message}/>

                <div className="col-md-6">
                    <div className={`form-group ${this.props.validation_errors.name?'has-error':''}`}>
                        <label>Name</label>
                        <input type="text" className="form-control" placeholder="User name" onChange={this.props.handleUserChange} value={this.props.user.name?this.props.user.name:''} name="name" />
                        {
                            this.props.validation_errors.name!=null?(<div className="help-block">{this.props.validation_errors.name[0]}</div>):null
                        }
                    </div>
                </div>

                <div className="col-md-6">
                    <div className={`form-group ${this.props.validation_errors.email?'has-error':''}`}>
                        <label>Email</label>
                        <input type="text" className="form-control" placeholder="User email" onChange={this.props.handleUserChange} value={this.props.user.email?this.props.user.email:''} name="email" />
                        {
                            this.props.validation_errors.email!=null?(<div className="help-block">{this.props.validation_errors.email[0]}</div>):null
                        }
                    </div>
                </div>

                <div className="col-md-6">
                    <div className={`form-group ${this.props.validation_errors.password?'has-error':''}`}>
                        <label>Password</label>
                        <input type="password" className="form-control" placeholder="Password" onChange={this.props.handleUserChange} value={this.props.user.password?this.props.user.password:''} name="password" />
                        {
                            this.props.validation_errors.password!=null?(<div className="help-block">{this.props.validation_errors.password[0]}</div>):null
                        }
                    </div>
                </div>

                <div className="col-md-6">
                    <div className='form-group'>
                        <div className="checkbox">
                            <label>
                                <input type="checkbox" onChange={this.props.handleUserChange} value="1" checked={this.props.user.is_admin==1} name="is_admin" />
                                Is Admin
                            </label>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}

export default Form;
