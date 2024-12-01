import "./WelcomePage.scss";

import Button from "../../components/Button/Button";
import { Link } from "react-router-dom";

const WelcomePage = () => {
    return ( 
        <div className="welcome-page">

            <h2 className="welcome-page__title">Welcome to <span>WoofMeet</span></h2>

            <div className="welcome-page__btns">
                <Link to="/login">
                    <Button text="Log In" style="primary"/>
                </Link>
                <Link to="/signup">
                    <Button text="Sign Up" style="primary"/>
                </Link>
            </div>
        </div>
     );
}
 
export default WelcomePage;
