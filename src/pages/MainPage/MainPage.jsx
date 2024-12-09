import "./MainPage.scss"

import AccountContent from "../../components/AccountContent/AccountContent";
import Header from "../../components/Header/Header";
import MenuTab from "../../components/MenuTab/MenuTab";
import ProfileCards from "../../components/ProfileCards/ProfileCards";
import { useLocation } from "react-router-dom";
import { useState } from "react";

const MainPage = () => {

    const location = useLocation();
    const {username, city} = location.state || {};
   

    const [menuOpen, setMenuOpen] = useState(false);
    
    const toggleMenuTab = () => {
        setMenuOpen((past) => !past);
    
      }

    return ( 
        <>
        <Header toggleMenuTab={toggleMenuTab}/>
        {menuOpen && <MenuTab/>}
        <AccountContent username={username}/>
        
        <ProfileCards/>
        </>
     );
}
 
export default MainPage;