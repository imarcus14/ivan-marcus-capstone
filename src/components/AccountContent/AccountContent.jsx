import "./AccountContent.scss";

const AccountContent = ({username, dogName, dogBreed, dogAge, dogPersonality, location}) => {
    return ( 
       <div className="account-content">
            <img  className="account-content__photo" src="" alt="profile photo of whos account it is"/>
            <div className="account-content__info">
                <p className="account-content__specifics">{username}</p>
                <p className="account-content__specifics">{dogName}</p>
                <p className="account-content__specifics">{dogBreed}</p>
                <p className="account-content__specifics">{dogAge}</p>
                <p className="account-content__specifics">{dogPersonality}</p>
                <p className="account-content__specifics">{location}</p>
            </div>
       </div> 
     );
}
 
export default AccountContent;