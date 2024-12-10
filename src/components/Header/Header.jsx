import "./Header.scss"

import BurgerMenu from "../BurgerMenu/BurgerMenu";
import { Link } from "react-router-dom";

const Header = ({toggleMenuTab}) => {
    return ( 
        <>
        <div className="header">
            <Link className="header__link" to="/main">
                <h1 className="header__logo"><span className="header__font">WOOF</span>meet</h1>
            </Link>
            <BurgerMenu toggleMenuTab={toggleMenuTab}/>
        </div>
        </>
     );
}
 
export default Header;