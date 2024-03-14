import { Link } from "react-router-dom";
import Button from "../components/Button";
import Form from "../components/Form";

function Registration({onAddDonor, setUpdate}) {
    return (
        <>
            <h1 className="header">Registration Form</h1>
            <Form onAddDonor={onAddDonor} setUpdate={setUpdate} />
            <div className="button-div">
                <Button><Link to="/donors">Go to Donors List</Link></Button>
            </div>
        </>
    );
}

export default Registration;