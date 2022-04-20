import React, { useEffect } from 'react';
import { useState } from 'react';
import {connect} from 'react-redux';
import {deleteUser, getUser, saveUserData} from '../../store/actions/UserActions'
import {getAllUsers} from "../../store/actions/AllUsersActions";

function UserList(props) {
    useEffect(()=>{
        props.getAllUsers()
    },[])

/*
Need to store the selected userid to pass id to AssignTreatment component
 */
    function assigningTreatment(id)
    {
        if (typeof(Storage) !== "undefined") {
            // Store
            localStorage.setItem("userid", id)
        }
        window.location.href='assignTreatment'
    }
    function deleteTodo(id){
        props.deleteUser(id);
        window.location.reload(false)
    }

    return(
        <>
            <ul
                role="list"
                className="list-unstyled"
            >
                { props.todos.map((todo,index) => (
                    <li key={todo.id} className="treatment-item-container">
                        <div className ="treatment-item">
                            <a href={'/userprofile/' + todo.id} className="treatment-item treatment-list-item" >{ todo.first_name }{" "+todo.last_name}</a>
                            <a className="treatment-item treatment-list-item"> {todo.email}</a>
                        </div>
                        <div className="btn-group" style={{"display" : "block"}}>
                            {/*
                <button type="button" className="btn" style={{"display" : "inline"}}>
                Edit
                </button>
              */}
                            <button type="button" className="btn btn__danger" onClick={()=> assigningTreatment(todo.id)}  style={{"display" : "inline"}}>
                                Assign Treatment
                            </button>
                            <button type="button" className="btn btn__danger"  onClick={()=> deleteTodo(todo.id)} style={{"display" : "inline"}}>
                                Delete
                            </button>
                        </div>
                    </li>
                ))}
            </ul>

        </>
    )
}
const mapStateToProps = state => {
    return {
        singleUserData: state.allUsers
    }
}
const mapDispatchToProps = dispatch =>{
    return {
        getAllUsers: () => dispatch(getAllUsers()),
        getUser: (id) => dispatch(getUser(id)),
        saveUserData: (state,id) => dispatch(saveUserData(state,id)),
        deleteUser: (id) => dispatch(deleteUser(id))
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(UserList)
