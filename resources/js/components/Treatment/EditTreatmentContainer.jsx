import ReactDOM from 'react-dom';
import store from '../store/store';
import {Provider} from 'react-redux';
import EditTreatment from "./EditTreatment";

export default function EditTreatmentContainer(props) {

    return (
        <Provider store={store}>
            <EditTreatment />
        </Provider>
    );
}
if (document.getElementById('edit-treatment-container')) {
    const element = document.getElementById('edit-treatment-container')
    const props = Object.assign({}, element.dataset )
    ReactDOM.render(<EditTreatmentContainer {...props}/>, element);
}
