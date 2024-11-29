import "./WelcomePage.scss";

import Button from "../../components/Button/Button";

const WelcomePage = () => {
    return ( 
        <div className="welcome-page">

            <h2 className="welcome-page__title">Welcome to <span>WoofMeet</span></h2>

            <div className="welcome-page__btns">
                <Button text="Log In" style="primary"/>
                <Button text="Sign Up" style="primary"/>
            </div>
        </div>
     );
}
 
export default WelcomePage;
