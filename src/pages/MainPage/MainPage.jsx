import "./MainPage.scss"

import AccountContent from "../../components/AccountContent/AccountContent";
import Header from "../../components/Header/Header";
import MenuTab from "../../components/MenuTab/MenuTab";
import ProfileCards from "../../components/ProfileCards/ProfileCards";
import { useState } from "react";

const MainPage = () => {

    const [menuOpen, setMenuOpen] = useState(false);
    
    const toggleMenuTab = () => {
        setMenuOpen((past) => !past);
    
      }


    return ( 
        <>
        <Header toggleMenuTab={toggleMenuTab}/>
        {menuOpen && <MenuTab/>}
        {/* Need to add these props to component below: username, dogName, dogBreed, dogAge, dogPersonality, location */}
        <AccountContent/>
        <ProfileCards/>
        </>
     );
}
 
export default MainPage;