import ReactDOM from 'react-dom';
import store from '../store/store';
import {Provider} from 'react-redux';
import CreateTreatment from "./CreateTreatment";

export default function CreateTreatmentContainer(props) {

    return (
        <Provider store={store}>
            <CreateTreatment />
        </Provider>
    );
}
if (document.getElementById('create-treatment-container')) {
    const element = document.getElementById('create-treatment-container')
    const props = Object.assign({}, element.dataset )
    ReactDOM.render(<CreateTreatmentContainer {...props}/>, element);
}
