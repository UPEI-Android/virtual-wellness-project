import ReactDOM from 'react-dom';
import store from '../../store/store';
import {Provider} from 'react-redux';
import UserIndex from "./UserIndex";


export default function UserOverviewContainer(props) {


    return (
        <Provider store={store}>
            <UserIndex userid={props.userid}/>
        </Provider>
    );
}
if (document.getElementById('useroverview')) {
    let userid = document.getElementById('useroverview').getAttribute('userid');
    ReactDOM.render(<UserOverviewContainer userid={userid}/>, document.getElementById('useroverview'));
}
