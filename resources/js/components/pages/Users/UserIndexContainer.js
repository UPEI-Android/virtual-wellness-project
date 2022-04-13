import ReactDOM from 'react-dom';
import store from '../../store/store';
import {Provider} from 'react-redux';
import UserIndex from "./UserIndex";


export default function UserIndexContainer(props) {


    return (
        <Provider store={store}>
            <UserIndex userid={props.userid}/>
        </Provider>
    );
}
if (document.getElementById('userindex')) {
    let userid = document.getElementById('userindex').getAttribute('userid');
    ReactDOM.render(<UserIndexContainer userid={userid}/>, document.getElementById('userindex'));
}
