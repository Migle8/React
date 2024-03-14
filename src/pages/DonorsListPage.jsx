import DonorsList from "../components/DonorsList";
import { Link } from "react-router-dom";
import Button from "../components/Button";

function DonorsListPage({donors}) {
    
    return (
        <>
            <h1 className="header">Donors List</h1>
            <DonorsList donors={donors} />
            <div className="button-div">
            <Button>
                <Link to="/">Go to Home Page</Link>
            </Button>
            </div>
        </>
    );
}

export default DonorsListPage;