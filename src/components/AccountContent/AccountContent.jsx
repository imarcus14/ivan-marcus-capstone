import "./AccountContent.scss";

import { useEffect, useState } from "react";

import axios from 'axios';
import ball from "../../assets/icons/dog-ball.jpg"

const AccountContent = () => {

    const URL = import.meta.env.VITE_API_URL; 

    const [profile, setProfile] = useState(null);

    useEffect(() => {
        const storedFormData = localStorage.getItem("signupData");
        if (storedFormData) {
            const parsedData = JSON.parse(storedFormData)
            
            setProfile({
                user: parsedData.user,
                dog: parsedData.dog
            });
            
        }
    }, []);
   
  
    if (!profile || !profile.user || !profile.dog) {
        return <p>Failed to load profile. Please try again later.</p>;
    }

    console.log(profile.dog.id);
    console.log(JSON.parse(localStorage.getItem("signupData")));
    const imageURL = !profile.dog.photo.startsWith('http')  ? `${URL}/${profile.dog.photo}` : profile.dog.photo;
    
    return ( 
        <div className="account">
            <img className="account-content__ball-one" src={ball} alt="tennis ball"/>

            <div className="account-content">
                <img  className="account-content__photo" src={imageURL} alt={`${profile.dog.name} the dog`}/>
                <div className="account-content__info">
                    <p className="account-content__specifics">Username: {profile.user.username}</p>
                    <p className="account-content__specifics">Dog's Name: {profile.dog.name}</p>
                    <p className="account-content__specifics">Breed: {profile.dog.breed}</p>
                    <p className="account-content__specifics">Dog Age: {profile.dog.age}</p>
                    <p className="account-content__specifics">Personality: {profile.dog.personality}</p>
                    <p className="account-content__specifics">City: {profile.user.city}</p>
                </div>
                {/* <img className="account_content__ball-one" src={ball} alt="tennis ball"/> */}
                {/* <img className="account_content__ball-two" src={ball} alt="tennis ball"/> */}
            </div> 
            <img className="account-content__ball-two" src={ball} alt="tennis ball"/>

       </div>
     );
}
 
export default AccountContent;