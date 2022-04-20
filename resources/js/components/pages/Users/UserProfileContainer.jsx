import ReactDOM from 'react-dom';
import store from '../../store/store';
import {Provider} from 'react-redux';
import UserProfile from "./UserProfile";


export default function UserProfileContainer(props) {

    return (
        <Provider store={store}>
            <UserProfile userid={props.userid}/>
        </Provider>
    );
}
if (document.getElementById('userProf')) {
    let userid = document.getElementById('userProf').getAttribute('userid');
    ReactDOM.render(<UserProfileContainer userid={userid}/>, document.getElementById('userProf'));
}
