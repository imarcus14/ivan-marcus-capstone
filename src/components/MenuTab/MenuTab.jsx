import "./MenuTab.scss";

import { Link } from "react-router-dom";

const MenuTab = () => {
    return ( 
        <div className="menu-tab">
            <Link className="menu-tab__options" to="">
                <p>Profile</p>
            </Link>
            <Link className="menu-tab__options" to="">
                <p>Chats</p>
            </Link>
            <Link className="menu-tab__options" to="/">
                <p>Log Out</p>
            </Link>
        </div>
     );
}
 
export default MenuTab;