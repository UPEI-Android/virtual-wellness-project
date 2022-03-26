import ReactDOM from "react-dom";
import UserProfile from "./UserProfile";


if (document.getElementById('edituserpro')) {
    ReactDOM.render(<UserProfile />, document.getElementById('edituserpro'));
}
