import ReactDOM from "react-dom";
import React, {useEffect} from "react";
import {getUser, saveUserData} from "../../store/actions/UserActions";
import store from "../../store/store";
import {connect} from "react-redux";


function EditProfile({ userState, getUser, saveUserData}){
    useEffect(()=> {
        saveUserData()
    })

    return (
        <div>
            <form className="form-control" action="#" onSubmit={(handleSubmit)}>*/}
                <div className="form-group">
                    <label className="form-input-label">Title</label>
                    <input
                        type="text"
                        defaultValue={todoInput}
                        className="form-input-block"
                        placeholder="Enter Treatment Title Here..."
                    />
                </div>
            </form>
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
        getUser: () => dispatch(getUser()),
        saveUserData: () => dispatch(saveUserData(store.getState().user.users))

    }
}

if (document.getElementById('editprofileoutput')) {
    ReactDOM.render(<EditProfile />, document.getElementById('editprofileoutput'));
}
export default connect(mapStateToProps,mapDispatchToProps)(EditProfile)
