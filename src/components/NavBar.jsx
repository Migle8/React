import { NavLink } from "react-router-dom";

function NavBar() {
    return (
        <nav className="navbar">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/registration">Registration</NavLink>
            <NavLink to="/donors">Donors List</NavLink>
        </nav>
    );
}

export default NavBar;