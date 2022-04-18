import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';
import { getTreatment, assignTreatment } from '../../store/actions/TreatmentActions'
import ReactDOM from 'react-dom';
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
toast.configure()

function AssignTreatment (props) {

    var date = new Date()
    var currentDate = date.getFullYear() + '-' + ("0" + (date.getMonth() + 1)).slice(-2) + '-' + ("0" + date.getDate()).slice(-2)
    var currentTime = ("0" + date.getHours()).slice(-2) + ':' + ("0" + (date.getMinutes() + 1)).slice(-2)
    var endTime = ("0" + (date.getHours() + 1)).slice(-2) + ':' + ("0" + (date.getMinutes() + 1)).slice(-2)

    const days= Array.from({length: 31}, (_, i) => i + 1)
    const weeks=Array.from({length: 10}, (_, i) => i + 1)
    const months=Array.from({length: 12}, (_, i) => i + 1)
    const years=Array.from({length: 30}, (_, i) => i + 1)


    //this is the state for the dropdown for interval dependent on frequency
    const [selected, setSelected] = React.useState("");
    //whether to show day_of_week
    const [showDayOfWeek, setShowDayOfWeek] = useState(false)
    const [showWeekOfMonth,setShowWeekOfMonth] = useState(false)
    const [showYearOptions,setShowYearOptions] = useState(false)
    const [showSeriesOn, setShowSeriesOn] = useState(true)

    /** Type variable to store different array for different dropdown */
    let type = days;

    /** This will be used to create set of options that user will see */
    let options=null;
    let optionsDates =null;
    let optionsMonths=null;

    if (selected === "DAILY") {
        type = days;
    } else if (selected === "WEEKLY") {
        type = weeks;
    } else if (selected === "MONTHLY") {
        type = months;
    } else if (selected === "YEARLY") {
        type = years;
    }
    if (type) {
        options = type.map((el) => <option key={el}>{el}</option>);
        if(type===years){
            optionsDates =days.map((el) => <option key={el}>{el}</option>);
            optionsMonths =months.map((el) => <option key={el}>{el}</option>);
        }
    }

    /*
    What interval to show based on frequency, once daily, weekly, monthly, yearly,
    it will populate the interval dropdown with the correesponding arrays listed as constants
    */
    function changeSelectOptionHandler(event) {
        setSelected(event.target.value)
        if(event.target.value =="DAILY"){
            setShowDayOfWeek(false)
            setShowWeekOfMonth(false)
            setShowYearOptions(false)
        }
        else if(event.target.value =="WEEKLY"){
            setShowDayOfWeek(true)
            setShowWeekOfMonth(false)
            setShowYearOptions(false)
        }
        else if(event.target.value =="MONTHLY"){
            setShowDayOfWeek(false)
            setShowWeekOfMonth(true)
            setShowYearOptions(false)
        }
        else if(event.target.value =="YEARLY"){
            setShowDayOfWeek(false)
            setShowWeekOfMonth(false)
            setShowYearOptions(true)
        }
    };

    function changeSeriesOptions(event) {
        if(event.target.value =="on")
        {
            setShowSeriesOn(true)
        }
        else if(event.target.value =="after"){
            setShowSeriesOn(false)
        }
    }

    function handleSubmit (e) {
        e.preventDefault();
        props.singleTreatmentData.patient_id = localStorage.getItem('userid')
        props.singleTreatmentData.title = e.target.title.value
        props.singleTreatmentData.notes = e.target.notes.value
        props.singleTreatmentData.start_date = e.target.start_date.value
        props.singleTreatmentData.end_date = e.target.end_date.value
        props.singleTreatmentData.start_time = e.target.start_time.value
        props.singleTreatmentData.end_time = e.target.end_time.value
        props.assignTreatment(props.singleTreatmentData);
        e.target.reset();
        toast.success("Your Treatment Has Been Submitted")
    }

    return props.singleTreatmentData.loading?(
        <h2>Loading</h2>
    ): props.singleTreatmentData.error? (
        <h2>{props.singleTreatmentData.error}</h2>
    ): (

        <div className="container background" style={{paddingTop:"5%"}}>
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card" style={{"padding": "60px"}}>
                        <div className="card-header">Assign Treatment</div>
                        <form className="form-control"action="#" onSubmit={(handleSubmit)}>
                            <div className="form-group-lg">
                                <label className="form-input-label">Title</label>
                                <input
                                    type="string"
                                    name="title"
                                    className="form-input-block"
                                    placeholder="Enter Treatment Title Here..."
                                />
                            </div>
                            <div className="form-group-lg">
                                <label className="form-input-label">Description:</label>
                                <textarea
                                    type="text"
                                    name="notes"
                                    rows="4"
                                    cols="80"
                                    className="form-input-block"
                                    placeholder="Enter Treatment Description Here..."
                                />
                            </div>
                            <table style={{backgroundColor:"rgba(111, 112, 168, 0.11)"}}>
                                <tbody>
                                <tr className="fixed-height">
                                    <th>
                                        <label className="form-input-sm" >Every:</label>
                                    </th>
                                    <td colSpan="2">
                                        <select name="interval" className="form-input-tiny">
                                            {options}
                                        </select>
                                        <select name="frequency" className="form-input-tiny" onChange={(changeSelectOptionHandler)}>
                                            <option value="DAILY">Day(s)</option>
                                            <option value="WEEKLY">Week(s)</option>
                                            <option value="MONTHLY">Month(s)</option>
                                            <option value="YEARLY">Year(s)</option>
                                        </select>
                                    </td>
                                </tr>

                                { showDayOfWeek ?
                                    <tr>
                                        <td>
                                            <label className="form-input-sm" >On:</label>
                                        </td>
                                        <td colSpan="2">
                                            <label className="day-buttons">Su
                                                <input type="checkbox" />
                                            </label>
                                            <label className="day-buttons">Mo
                                                <input type="checkbox" />
                                            </label>
                                            <label className="day-buttons">Tu
                                                <input type="checkbox" />
                                            </label>
                                            <label className="day-buttons">We
                                                <input type="checkbox" />
                                            </label>
                                            <label className="day-buttons">Th
                                                <input type="checkbox" />
                                            </label>
                                            <label className="day-buttons">Fr
                                                <input type="checkbox" />
                                            </label>
                                            <label className="day-buttons">Sa
                                                <input type="checkbox"/>
                                            </label>
                                        </td>
                                    </tr>
                                    : null}

                                { showWeekOfMonth ?
                                    <tr>
                                        <td>
                                            <label className="form-input-sm" >On:</label>
                                        </td>
                                        <td>
                                            <select name="week_of_month" className="form-input-sm">
                                                <option value="1">Week 1</option>
                                                <option value="2">Week 2</option>
                                                <option value="3">Week 3</option>
                                                <option value="4">Week 4</option>
                                            </select>
                                        </td>
                                    </tr>
                                    : null}

                                { showYearOptions ?
                                    <tr>
                                        <td>
                                            <label className="form-input-sm" >On:</label>
                                        </td>
                                        <td colSpan="2">
                                            <label className="form-input-label-tiny">Day</label>
                                            <select name="day_of_month" className="form-input-tiny">
                                                {optionsDates}
                                            </select>

                                            <label className="form-input-label-tiny">Month</label>
                                            <select name="month_of_year" className="form-input-tiny">
                                                {optionsMonths}
                                            </select>
                                        </td>
                                    </tr>
                                    : null}

                                <tr className="fixed-height">
                                    <th>
                                        <label className="form-input-sm">From:</label>
                                    </th>
                                    <td colSpan="2">
                                        <input
                                            type="time"
                                            name="start_time"
                                            className="form-input-sm"
                                            defaultValue={currentTime}
                                        />
                                        <label className="form-input-label-tiny">to</label>
                                        <input
                                            type="time"
                                            name="end_time"
                                            className="form-input-sm"
                                            defaultValue={endTime}
                                        />
                                    </td>
                                </tr>
                                <tr className="fixed-height">
                                    <th>
                                        <label className="form-input-sm">Start:</label>
                                    </th>
                                    <td colSpan="2">
                                        <input
                                            name="start_date"
                                            className="form-input-sm"
                                            defaultValue={currentDate}
                                            type="date"

                                        />
                                    </td>
                                </tr>
                                <tr className="fixed-height">
                                    <th>
                                        <label className="form-input-sm">Series Ends </label>
                                    </th>
                                    <td>
                                        <select name="interval" className="form-input-tiny" onChange={(changeSeriesOptions)}>
                                            <option style={{width:"35px"}} value="on">on</option>
                                            <option style={{width:"35px"}}value="after">after</option>
                                        </select>
                                        { showSeriesOn ?
                                            <input
                                                name="end_date"
                                                className="form-input-sm"
                                                defaultValue={currentDate}
                                                type="date"
                                            />
                                            :
                                            <>
                                                <input
                                                    style={{width:"60px"}}
                                                    type="integer"
                                                    name="interval"
                                                    className="form-input-sm"
                                                    defaultValue="5"
                                                />
                                                <label className="form-input-tiny" style={{width:"60px"}}> events</label>
                                            </>
                                        }
                                    </td>
                                </tr>
                                </tbody>
                            </table>

                            <div style={{position:"relative",display:"block", float:"left"}}>
                                <button type="submit" className="btn-primary">Create Treatment</button>
                            </div>

                        </form>

                    </div>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        singleTreatmentData: state.treatment
    }
}
const mapDispatchToProps = dispatch =>{
    return {
        //getTreatment: (id) => dispatch(getTreatment(id)),
        assignTreatment: (state) => dispatch(assignTreatment(state))
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(AssignTreatment)

if (document.getElementById('assign-treatment')) {
    const element = document.getElementById('assign-treatment')
    const props = Object.assign({}, element.dataset )
    ReactDOM.render(<AssignTreatment {...props} />, element);
}
