import React from 'react';

export default function TreatmentList(props) {

    return(
    <>
    <div className="btn-group" style = {{ "vertical-align":"middle" }}>
        <button type="button" className="btn" aria-pressed="false">
        <span>All</span>
        </button>
        <button type="button" className="btn" aria-pressed="false">
        <span>Active</span>
        </button>
        <button type="button" className="btn" aria-pressed="false">
        <span>Completed</span>
        </button>
    </div>
    
    <ul
        role="list"
        className="list-unstyled"
    >
        { props.todos.map((todo, index) => (
        <li key={todo.id} className="treatment-item-container">
            <div className ="treatment-item">
                <input type="checkbox" onChange={() => props.completeTodo(todo.id)} checked={todo.isComplete ? true : false}/>
                
                { !todo.isEditing ? (
                <span className="treatment-item" >
                    {todo.title}
                </span>

                ) : (

                <input
                type="text"
                onBlur={(event) => props.updateTodo(event,todo.id)}
                onKeyDown={event => {
                    if(event.key == 'Enter'){
                    props.updateTodo(event,todo.id)
                    }
                    else if(event.key =='Escape'){
                    props.cancelEdit(event,todo.id)
                    }
                }}
                defaultValue={todo.title}
                className="treatment-input-group"
                autoFocus
                />
                )}
            </div>
            <div className="btn-group" style={{"display" : "block"}}>
                <button type="button" className="btn" onClick={() => props.markAsEditing(todo.id)} style={{"display" : "inline"}}>
                Edit
                </button>
                <button type="button" className="btn btn__danger" onClick={() => props.deleteTodo(todo.id)} style={{"display" : "inline"}}>
                Delete
                </button>
            </div>
        </li>
        ))}
    </ul>

    <div className="remaining-block">
        <h5 className='btn'>
            { props.remaining() } Items Remaining
        </h5>
        
    </div>
    </>
    )
}