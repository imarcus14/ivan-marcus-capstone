import "./MenuTab.scss";

import { Link, useNavigate } from "react-router-dom";

const MenuTab = () => {

    const navigate = useNavigate();

    const handleLogout = () =>{
        localStorage.removeItem("signupData");

        navigate("/")
    }
    return ( 
        <div className="menu-tab">
            <Link className="menu-tab__options" to="">
                <p>Profile</p>
            </Link>
            <Link className="menu-tab__options" to="">
                <p>Chats</p>
            </Link>
            
            <p className="menu-tab__options" onClick={handleLogout}>Log Out</p>
            
        </div>
     );
}
 
export default MenuTab;