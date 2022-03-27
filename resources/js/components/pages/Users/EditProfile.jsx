import ReactDOM from "react-dom";
import React, {useEffect} from "react";
import {getUser, saveUserData} from "../../store/actions/UserActions";
import store from "../../store/store";
import {connect} from "react-redux";


function EditProfile({ userState, getUser, saveUserData, userid}){
    useEffect(()=> {
        getUser(userid)
    },[])

    const handleSubmit = (e) => {
        e.preventDefault();

        userState.users.name = e.target.username.value
        userState.users.first_name = e.target.firstname.value
        userState.users.last_name = e.target.lastname.value
        userState.users.birthday = e.target.birthday.value
        userState.users.current_weight = e.target.currentweight.value
        userState.users.resting_heart_rate = e.target.hrate.value
        userState.users.phone = e.target.phone.value



        saveUserData(userState.users);
    }

    return userState.loading?(
        <h2>Loading</h2>
    ): userState.error? (
        <h2>{userState.error}</h2>
    ): (
        <div className="user-profile py-4">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4">
                        <div className="card shadow-sm">
            <form className="form-control" action="#" onSubmit={(handleSubmit)}>
                <div className="form-group">
                    <label className="form-input-label">Username</label>
                    <input
                        type="text"
                        className="form-input-block"
                        id='username'
                        placeholder= {userState.users.name}
                    />
                    <label className="form-input-label">First Name</label>
                    <input
                        type="text"

                        className="form-input-block"
                        id='firstname'
                        placeholder= {userState.users.first_name}
                    />
                    <label className="form-input-label">Last Name</label>
                    <input
                        type="text"

                        className="form-input-block"
                        id='lastname'
                        placeholder= {userState.users.last_name}
                    />
                    <label className="form-input-label">Birthdate</label>
                    <input
                        type="date"

                        className="form-input-block"
                        id='birthday'
                        placeholder= {userState.users.birthday}
                    />

                    <label className="form-input-label">Current Weight</label>
                    <input
                        type="number"
                        className="form-input-block"
                        id='currentweight'
                        placeholder= {userState.users.current_weight}
                    />

                <label className="form-input-label">Phone</label>
                <input
                    type="text"
                    className="form-input-block"
                    id='phone'
                    placeholder= {userState.users.phone}
                />
                    <label className="form-input-label">Resting Heart Rate</label>
                    <input
                        type="text"
                        className="form-input-block"
                        id='hrate'
                        placeholder= {userState.users.resting_heart_rate}
                    />
                        </div>
                <button type={"submit"}>Submit</button>
            </form>
        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}



const mapStateToProps = state => {
    return {
        userState: state.user
    }
}
const mapDispatchToProps = dispatch =>{
    return {
        getUser: (userid) => dispatch(getUser(userid)),
       saveUserData: () => dispatch(saveUserData(store.getState().user.users))

    }
}

if (document.getElementById('editprofileoutput')) {
    ReactDOM.render(<EditProfile userid = {userid}/>, document.getElementById('editprofileoutput'));
}
export default connect(mapStateToProps,mapDispatchToProps)(EditProfile)
