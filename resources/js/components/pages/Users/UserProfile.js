
import axios from "axios";
import ReactDOM from 'react-dom';



export default class UserProfile extends Component {
    constructor(props) {
        super(props)

        // State
        this.state = {
            user: [],
        }
    }

    componentDidMount() {

        axios.get('http://127.0.0.1:8000/api/userprofile/1/', )
            .then((data) => {
                this.setState({
                    user: data.data,

                });
            })
            .catch((error) => {
                console.log(error);
            })
    }

    render() {
        const data = this.state.user;

        return (


            <div className="student-profile py-4">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="card shadow-sm">
                                <div className="card-header bg-transparent text-center">
                                    <h3>{data.name}</h3>
                                </div>
                                <div className="card-body">
                                    <p className="mb-0"><strong className="pr-1">Patient ID:</strong>{data.id}</p>
                                    <p className="mb-0"><strong className="pr-1">Treatment:</strong>Diabetes</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-8">
                            <div className="card shadow-sm">
                                <div className="card-header bg-transparent border-0">
                                    <h3 className="mb-0"><i className="far fa-clone pr-1"></i>General Information</h3>
                                </div>
                                <div className="card-body pt-0">
                                    <table className="table table-bordered">
                                        <tbody>
                                        <tr>
                                            <th width="30%">Email</th>
                                            <td width="2%">:</td>
                                            <td>{data.email}</td>
                                        </tr>
                                        <tr>
                                            <th width="30%">Phone</th>
                                            <td width="2%">:</td>
                                            <td>2020</td>
                                        </tr>
                                        <tr>
                                            <th width="30%">Age</th>
                                            <td width="2%">:</td>
                                            <td>125</td>
                                        </tr>
                                        <tr>
                                            <th width="30%">Year Joined</th>
                                            <td width="2%">:</td>
                                            <td>2020</td>
                                        </tr>
                                        <tr>
                                            <th width="30%">Gender</th>
                                            <td width="2%">:</td>
                                            <td>Male</td>
                                        </tr>
                                        <tr>
                                            <th width="30%">Blood Type</th>
                                            <td width="2%">:</td>
                                            <td>B+</td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>

                            <div className="card shadow-sm">
                                <div className="card-header bg-transparent border-0">
                                    <h3 className="mb-0"><i className="far fa-clone pr-1"></i>Other Information</h3>
                                </div>
                                <div className="card-body pt-0">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                                        nostrud
                                        exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}



if (document.getElementById('userProf')) {
    ReactDOM.render(<UserProfile />, document.getElementById('userProf'));
}
