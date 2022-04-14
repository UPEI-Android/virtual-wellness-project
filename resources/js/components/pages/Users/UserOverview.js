import React,{ useEffect } from 'react';
import ReactDOM from 'react-dom';
import {connect} from 'react-redux';

import UserIndex from './UserIndex';
import {getAllUsers} from '../../store/actions/AllUsersActions';

function TreatmentOverview({treatmentsData, getAllUsers}){
    useEffect(()=>{
        getAllUsers()
    },[])

    return (

        <div className="container background" style={{paddingTop:"2%"}}>
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="align-right"><a href="/createUser" className="btn-primary create-treatment-button">Create User</a></div>
                    <div className="card" style={{"padding": "60px"}}>
                        <div className="card-header">Your Treatments</div>
                        {treatmentsData.treatments.length > 0 ? (
                            <TreatmentList
                                todos={treatmentsData.treatments}
                            />
                        ) : (
                            <NoTreatments />
                        ) }

                        {/*
                    <TreatmentList
                      completeTodo={completeTodo}
                      markAsEditing={markAsEditing}
                      updateTodo={updateTodo}
                      cancelEdit={cancelEdit}
                      deleteTodo={deleteTodo}
                      />
                  */}
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
export default connect(mapStateToProps,mapDispatchToProps)(TreatmentOverview)


if (document.getElementById('treatment-overview')) {
    const element = document.getElementById('treatment-overview')
    const props = Object.assign({}, element.dataset )
    ReactDOM.render(<TreatmentOverview {...props} />, element);
}
