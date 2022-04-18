import React, { useEffect } from 'react';
import { useState } from 'react';
import {connect} from 'react-redux';
import {deleteUser, getUser, saveUserData} from '../../store/actions/UserActions'
import {getAllUsers} from "../../store/actions/AllUsersActions";

function UserIndex(props) {
    useEffect(()=>{
        props.getAllUsers()
    },[])

    function completeTodo(id){

        // need to find specific treatment within the array of treatments
        let $treatment = null;
        let $i=0;
        for($i;$i<props.singleTreatmentData.treatments.length;$i++){
            if (props.singleTreatmentData.treatments[$i].id===id){

                $treatment = props.singleTreatmentData.treatments[$i]
            }
        }


        if ($treatment.id === id){
            if($treatment.is_completed === 0)
            {$treatment.is_completed =1}
            else{$treatment.is_completed=0}
        }

        props.saveUserData($treatment,id)
        window.location.reload(false)
    }
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
    const userID = "";

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
export default connect(mapStateToProps,mapDispatchToProps)(UserIndex)
