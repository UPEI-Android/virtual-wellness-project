import ReactDOM from 'react-dom';
import store from '../store/store';
import {Provider} from 'react-redux';
import Treatment from "./Treatment";



export default function TreatmentContainer() {


    return (
        <Provider store={store}>
            <Treatment/>
        </Provider>
    );
}
if (document.getElementById('treatment-container')) {
    ReactDOM.render(<TreatmentContainer />, document.getElementById('treatment-container'));
}
