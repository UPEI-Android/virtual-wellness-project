import ReactDOM from "react-dom";
import {useEffect} from "react";
import {getUser, saveUserData} from "../../store/actions/UserActions";
import store from "../../store/store";
import {connect} from "react-redux";


function EditProfile({ userState, getUser, saveUserData}){
    useEffect(()=> {
        saveUserData()
    })
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
