import React from 'react';
import ReactDOM from "react-dom";

function Treatment() {


    //sorting out the presentation of the date
    const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];

    const current = new Date();
    const date = `${weekday[current.getDay()]} , ${month[current.getMonth()]} ${current.getDate()} ${current.getFullYear()}`;

        return (

            <div className="container">
                <div className="row justify-content-center">
                    <div>{date}
                    <div className="col-md-8">
                        <div className="card">
                            <div className="card-header">Treatment </div>

                            <div className="card-body">I'm an example component!</div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>

        );
}
let a = 10000;
export default Treatment

if (document.getElementById('treatmentshow')) {
    ReactDOM.render(<Treatment />, document.getElementById('treatmentshow'));
}
