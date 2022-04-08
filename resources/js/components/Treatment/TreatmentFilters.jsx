import React from 'react';

export default function TreatmentFilters(props) {
    return (
        <div className="btn-group" style = {{ verticalAlign:"middle" }}>
            <button 
                onClick={() => {
                    props.setFilter('all')
                    props.todosFiltered('all')
                    }}
                type="button"
                className={`btn ${props.filter == 'all' ?
                'btn-active' : ''}`}
                aria-pressed="false">
                All
            </button>
            <button
                onClick={() => {
                    props.setFilter('active')
                    props.todosFiltered('active')
                    }}
                type="button"
                className={`btn ${props.filter == 'active' ?
                'btn-active' : ''}`}
                aria-pressed="false">
            Active
            </button>
            <button 
                onClick={() => {
                    props.setFilter('completed')
                    props.todosFiltered('completed')
                    }}
                type="button"
                className={`btn ${props.filter == 'completed' ?
                'btn-active' : ''}`}
                aria-pressed="false">
            Completed
            </button>
        </div>
    )

}
