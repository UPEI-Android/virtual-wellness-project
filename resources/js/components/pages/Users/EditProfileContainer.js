import ReactDOM from 'react-dom';
import store from '../../store/store';
import {Provider} from 'react-redux';
import EditProfile from "./EditProfile";


export default function EditProfileContainer () {


    return (
        <Provider store={store}>
            <EditProfile/>

        </Provider>
    );
}
if (document.getElementById('editprofile')) {
    ReactDOM.render(<EditProfileContainer />, document.getElementById('editprofile'));
}
