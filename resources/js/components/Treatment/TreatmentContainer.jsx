import ReactDOM from 'react-dom';
import store from '../store/store';
import {Provider} from 'react-redux';
import Treatment from "./Treatment";
import { checkPropTypes } from 'prop-types';



export default function TreatmentContainer(props) {


    return (
        <Provider store={store}>
            <Treatment id={props.id} />
        </Provider>
    );
}
if (document.getElementById('treatment-container')) {
    const element = document.getElementById('treatment-container')
    const props = Object.assign({}, element.dataset )
    ReactDOM.render(<TreatmentContainer {...props} />, element);
}