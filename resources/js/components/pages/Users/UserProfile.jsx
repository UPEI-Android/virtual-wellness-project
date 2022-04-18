import React, { useEffect} from 'react';
import {connect} from 'react-redux';
import {getUser} from '../../store/actions/UserActions';

import ReactDOM from "react-dom";




function UserProfile({ userData, getUser, userid}){
    useEffect(()=>{
        getUser(userid)
    },[])



    return userData.loading?(
        <h2>Loading</h2>
    ): userData.error? (
        <h2>{userData.error}</h2>
    ): (



                <div className="container sizing-profile">
                    <div className="row">
                        <div className="align-right"><a href="/profileedit" className="btn-primary create-treatment-button">Edit Profile</a>

                            {userid == 1 &&

                                    <a href="/users" className="btn-primary create-treatment-button">Admin</a>

                            }
                      </div>

                            <div className="card shadow-sm">





                                <div className="card-header bg-transparent text-center">
                                    <h3>{userData.users.first_name}</h3>
                                </div>
                                <div className="card-body">
                                    <p className="mb-0"><strong className="pr-1">Patient ID:</strong> {userData.users.id}</p>
                                </div>
                        </div>

                            <div className="card shadow-sm">
                                <div className="card-header bg-transparent border-0">
                                    <h3 className="mb-0">General Information</h3>
                                </div>
                                <div className="card-body pt-0">
                                    <table className="table table-bordered">
                                        <tbody>
                                        <tr>
                                            <th width="30%">Email</th>
                                            <td width="2%">:</td>
                                            <td>{userData.users.email}</td>
                                        </tr>
                                        <tr>
                                            <th width="30%">Phone</th>
                                            <td width="2%">:</td>
                                            <td>{userData.users.phone}</td>
                                        </tr>
                                        <tr>
                                            <th width="30%">Gender</th>
                                            <td width="2%">:</td>
                                            <td>{userData.users.gender}</td>
                                        </tr>
                                        <tr>
                                            <th width="30%">Age</th>
                                            <td width="2%">:</td>
                                            <td>{userData.users.age}</td>
                                        </tr>
                                        <tr>
                                            <th width="30%">Weight</th>
                                            <td width="2%">:</td>
                                            <td>{userData.users.current_weight}</td>
                                        </tr>
                                        <tr>
                                            <th width="30%">Ave Resting Heart Rate</th>
                                            <td width="2%">:</td>
                                            <td>{userData.users.rest_heart_rate}</td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </div>


                            <div className="card shadow-sm">
                                <div className="card-header bg-transparent border-0">
                                    <h3 className="mb-0">Additional Information</h3>
                                </div>
                                <div className="card-body pt-0">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                                        nostrud
                                        exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


    )
}

const mapStateToProps = state => {
    return {
        userData: state.user
    }
}
const mapDispatchToProps = dispatch =>{
    return {
        getUser: (userid) => dispatch(getUser(userid)),
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(UserProfile)

if (document.getElementById('userprofintr')) {
    ReactDOM.render(<UserProfile userid = {userid}/>, document.getElementById('userprofintr'));
}

