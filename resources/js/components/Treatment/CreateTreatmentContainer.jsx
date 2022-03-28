import ReactDOM from 'react-dom';
import store from '../store/store';
import {Provider} from 'react-redux';
import CreateTreatment from "./CreateTreatment";



export default function CreateTreatmentContainer() {


    return (
        <Provider store={store}>
            <CreateTreatment/>
        </Provider>
    );
}
if (document.getElementById('create-treatment-container')) {
    ReactDOM.render(<CreateTreatmentContainer />, document.getElementById('create-treatment-container'));
}
