import ReactDOM from 'react-dom';
import store from '../../store/store';
import {Provider} from 'react-redux';
import UserOverview from "./UserOverview";


export default function UserOverviewContainer() {

    return (
        <Provider store={store}>
            <UserOverview/>

        </Provider>
    );
}
if (document.getElementById('user-overview-container')) {
    ReactDOM.render(<UserOverviewContainer />, document.getElementById('user-overview-container'));
}
