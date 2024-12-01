import "./MainPage.scss"

import AccountContent from "../../components/AccountContent/AccountContent";
import Header from "../../components/Header/Header";

const MainPage = () => {
    return ( 
        <>
        <Header/>
        {/* Need to add these props to component below: username, dogName, dogBreed, dogAge, dogPersonality, location */}
        <AccountContent/>
        </>
     );
}
 
export default MainPage;