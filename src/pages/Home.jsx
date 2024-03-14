import { Link } from "react-router-dom";
import image from '../images/picc.webp'
import Button from "../components/Button";

function Home() {
    return (
        <>
            <h1 className="header">Lorem ipsum dolor</h1>
            <img src={image} alt="Picture" className="home-pic" />
            <p className="home-p">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam laudantium nulla reiciendis, fugit ullam assumenda fugiat voluptas, ipsam excepturi adipisci omnis consequatur aperiam nostrum blanditiis velit aliquid. Officia, fuga ullam!</p>
            <div className="button-div">
                <Button>
                    <Link to="/registration">Go to Registration Form</Link >
                </Button>
            </div>
        </>
    )
}

export default Home;