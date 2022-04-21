import ReactDOM from 'react-dom';
import store from '../../store/store';
import {Provider} from 'react-redux';
import EditProfile from "./EditProfile";


export default function EditProfileContainer (props) {


    return (
        <Provider store={store}>
            <EditProfile userid={props.userid}/>
        </Provider>
    );
}
if (document.getElementById('editprofile')) {
    let userid = document.getElementById('editprofile').getAttribute('userid');
    ReactDOM.render(<EditProfileContainer userid={userid}/>, document.getElementById('editprofile'));
}
