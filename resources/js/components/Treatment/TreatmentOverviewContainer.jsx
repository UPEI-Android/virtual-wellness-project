import ReactDOM from 'react-dom';
import store from '../store/store';
import {Provider} from 'react-redux';
import TreatmentOverview from "./TreatmentOverview";



export default function TreatmentOverviewContainer() {


    return (
        <Provider store={store}>
            <TreatmentOverview/>
        </Provider>
    );
}
if (document.getElementById('treatment-overview-container')) {
    ReactDOM.render(<TreatmentOverviewContainer />, document.getElementById('treatment-overview-container'));
}
