import ReactDOM from 'react-dom';
import store from '../../store/store';
import {Provider} from 'react-redux';
import UserProfile from "./UserProfile";


export default function UserProfileContainer() {


    return (
        <Provider store={store}>
            <UserProfile/>

        </Provider>
    );
}
if (document.getElementById('userProf')) {
    ReactDOM.render(<UserProfileContainer />, document.getElementById('userProf'));
}
