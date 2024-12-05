import "./LoginPage.scss";

import Button from "../../components/Button/Button";
import { Link } from "react-router-dom";

const LoginPage = () => {
    return ( 
        <div className="login">
            <h3 className="login__title">We are so glad you're back! Please enter your login details.</h3>
            <div className="login__information">
                <div className="login__field">
                    <label className="login__label">
                        Username:
                        <input name="username" className="login__input"/>
                    </label>
                    <p>Forgot username?</p>
                </div>
                <div className="login__field">
                    <label className="login__label">
                        Password:
                        <input name="password" className="login__input"/>
                    </label>
                    <p>Forgot Password?</p>
                </div>
            </div>
            <Link to="/main">
                <Button text="Login" style="secondary"/>
            </Link>
        </div>

     );
}
 
export default LoginPage;