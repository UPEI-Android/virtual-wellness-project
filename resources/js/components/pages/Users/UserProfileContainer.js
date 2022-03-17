import React, { useEffect} from 'react';
import store from '../../store/store'
import {connect} from 'react-redux';
import {getUser} from '../../store/actions/UserActions'


function UserProfileContainer({ userData, getUser}){
    useEffect(()=>{
        getUser()
    },[])

    return userData.loading?(
        <h2>Loading</h2>
    ): userData.error? (
        <h2>{userData.error}</h2>
    ): (
        <div>

    <div className="student-profile py-4">
        <div className="container">
            <div className="row">
                <div className="col-lg-4">
                    <div className="card shadow-sm">
                        <div className="card-header bg-transparent text-center">
                            <h3>{userData.users.name}</h3>
                        </div>
                        <div className="card-body">
                            <p className="mb-0"><strong className="pr-1">Patient ID:</strong> {userData.users.id}</p>
                            <p className="mb-0"><strong className="pr-1">Treatment:</strong>Diabetes</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-8">
                    <div className="card shadow-sm">
                        <div className="card-header bg-transparent border-0">
                            <h3 className="mb-0"><i className="far fa-clone pr-1"></i>General Information</h3>
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
                                    <td></td>
                                </tr>
                                <tr>
                                    <th width="30%">Age</th>
                                    <td width="2%">:</td>
                                    <td>32</td>
                                </tr>
                                <tr>
                                    <th width="30%">Year Joined</th>
                                    <td width="2%">:</td>
                                    <td>2022</td>
                                </tr>
                                <tr>
                                    <th width="30%">Gender</th>
                                    <td width="2%">:</td>
                                    <td>Male</td>
                                </tr>
                                <tr>
                                    <th width="30%">Blood Type</th>
                                    <td width="2%">:</td>
                                    <td>B+</td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <div className="card shadow-sm">
                        <div className="card-header bg-transparent border-0">
                            <h3 className="mb-0"><i className="far fa-clone pr-1"></i>Additional Information</h3>
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
        getUser: () => dispatch(getUser())
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(UserProfileContainer)
