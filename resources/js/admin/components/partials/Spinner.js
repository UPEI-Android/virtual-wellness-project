import React from 'react';
const Spinner = (props) => {
    return props.show?(
        <div className="overlay">
            <i className="fa fa-refresh fa-spin">

            </i>
        </div>
    ):null;
};
export default Spinner;
