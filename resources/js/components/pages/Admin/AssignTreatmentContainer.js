import ReactDOM from 'react-dom';
import store from '../../store/store';
import {Provider} from 'react-redux';
import AssignTreatment from "./AssignTreatment";

export default function AssignTreatmentContainer(props) {

    return (
        <Provider store={store}>
            <AssignTreatment />
        </Provider>
    );
}
if (document.getElementById('assign-treatment-container')) {
    const element = document.getElementById('assign-treatment-container')
    const props = Object.assign({}, element.dataset )
    ReactDOM.render(<AssignTreatmentContainer {...props}/>, element);
}
