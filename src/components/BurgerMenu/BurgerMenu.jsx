import "./BurgerMenu.scss"

import BurgerSvg from "../BurgerSvg/BurgerSvg";
const BurgerMenu = () => {
    return ( 

        <div className="burger-menu">
            <p className="burger-menu__text">Menu</p>
            <BurgerSvg/>
        </div>
     );
}
 
export default BurgerMenu;