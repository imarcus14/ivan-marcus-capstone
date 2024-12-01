import "./MainPage.scss"

import AccountContent from "../../components/AccountContent/AccountContent";
import Header from "../../components/Header/Header";
import ProfileCards from "../../components/ProfileCards/ProfileCards";

const MainPage = () => {
    return ( 
        <>
        <Header/>
        {/* Need to add these props to component below: username, dogName, dogBreed, dogAge, dogPersonality, location */}
        <AccountContent/>
        <ProfileCards/>
        </>
     );
}
 
export default MainPage;