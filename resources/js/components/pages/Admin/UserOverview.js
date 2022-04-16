import React,{ useEffect } from 'react';
import ReactDOM from 'react-dom';
import {connect} from 'react-redux';

import UserIndex from './UserIndex';
import {getAllUsers} from '../../store/actions/AllUsersActions';

function UserOverview({usersData, getAllUsers}){
    useEffect(()=>{
        getAllUsers()
    },[])

    return (

        <div className="container background" style={{paddingTop:"2%"}}>
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card" style={{"padding": "60px"}}>
                        <div className="card-header">All Users</div>

                            <UserIndex
                                todos={usersData.users}
                            />
                    </div>
                </div>
            </div>
        </div>
    )
}
const mapStateToProps = state => {
    return {
        usersData: state.allUsers
    }
}
const mapDispatchToProps = dispatch =>{
    return {
        getAllUsers: () => dispatch(getAllUsers())
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(UserOverview)


if (document.getElementById('useroverview')) {
    const element = document.getElementById('useroverview')
    const props = Object.assign({}, element.dataset )
    ReactDOM.render(<UserOverview {...props} />, element);
}
