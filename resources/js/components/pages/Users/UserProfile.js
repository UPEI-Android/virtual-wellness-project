import ReactDOM from 'react-dom';
import store from '../../store/store';
import {Provider} from 'react-redux';
import UserContainer from "./UserProfileContainer";


export default function UserProfile () {


        return (
            <Provider store={store}>
                <UserContainer/>

            </Provider>
        );
}
if (document.getElementById('userProf')) {
    ReactDOM.render(<UserProfile />, document.getElementById('userProf'));
}
