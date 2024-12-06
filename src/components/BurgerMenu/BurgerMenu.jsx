import "./BurgerMenu.scss"

import BurgerSvg from "../BurgerSvg/BurgerSvg";
import { useState } from "react";

const BurgerMenu = ({toggleMenuTab}) => {

    const [isActive, setIsActive] = useState(false);

    const menuClick= () => {
        setIsActive((prev) => !prev);
        toggleMenuTab();
    }
    return ( 

        <div className="burger-menu" onClick={menuClick}>
            <p className="burger-menu__text">Menu</p>
            <BurgerSvg/>
        </div>
     );
}
 
export default BurgerMenu;