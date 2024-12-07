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
    console.log("Username received in MainPage:", username);
    console.log("City received in MainPage:", city);

    const [menuOpen, setMenuOpen] = useState(false);
    
    const toggleMenuTab = () => {
        setMenuOpen((past) => !past);
    
      }
    console.log("Username received in MainPage:", username);

    return ( 
        <>
        <Header toggleMenuTab={toggleMenuTab}/>
        {menuOpen && <MenuTab/>}
        {/* Need to add these props to component below: username, dogName, dogBreed, dogAge, dogPersonality, location */}
        <AccountContent username={username}/>
        
        <ProfileCards city={city}/>
        </>
     );
}
 
export default MainPage;