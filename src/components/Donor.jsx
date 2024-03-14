function Donor({ donor }) {
  const { id, firstName, lastName, bloodType, age, image } = donor;

  return (
    <div className="donor">
      <div key={id} className="donor-box">
        <img src={image} alt={firstName} className="image" />
        <h4>
          {firstName} {lastName}
        </h4>
        <p>Blood type: {bloodType}</p>
        <p>Age: {age}</p>
      </div>
    </div>
  );
}

export default Donor;
