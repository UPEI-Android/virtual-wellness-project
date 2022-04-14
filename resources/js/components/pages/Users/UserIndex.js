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

        props.saveTreatmentData($treatment,id)
        window.location.reload(false)
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
                { todosFiltered(filter).map((todo, index) => (
                    <li key={todo.id} className="treatment-item-container">
                        <div className ="treatment-item">
                            <input type="checkbox" onChange={() => completeTodo(todo.id)} checked={todo.is_completed ? true : false}/>
                            <a href={'/user/' + todo.id} className="treatment-item treatment-list-item" >{ todo.title }</a>

                        </div>
                        <div className="btn-group" style={{"display" : "block"}}>
                            {/*
                <button type="button" className="btn" style={{"display" : "inline"}}>
                Edit
                </button>
              */}
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
        singleTreatmentData: state.allTreatments
    }
}
const mapDispatchToProps = dispatch =>{
    return {
        getAllTreatments: () => dispatch(getAllTreatments()),
        getTreatment: (id) => dispatch(getTreatment(id)),
        saveTreatmentData: (state,id) => dispatch(saveTreatmentData(state,id)),
        deleteTreatment: (id) => dispatch(deleteTreatment(id))
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(UserIndex)
