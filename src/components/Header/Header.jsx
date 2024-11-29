import "./Header.scss"

import BurgerMenu from "../BurgerMenu/BurgerMenu";

const Header = () => {
    return ( 
        <>
        <div className="header">
            <h1 className="header__logo">WoofMeet</h1>
            <BurgerMenu/>
        </div>
        </>
     );
}
 
export default Header;