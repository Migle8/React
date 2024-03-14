import Donor from "./Donor.jsx";

function DonorsList({ donors }) {
    return (
        <>
            {donors.map((donor) => (
                <Donor donor={donor} key={donor.id} />
            ))}
        </>
    );
}

export default DonorsList;