import "./AccountContent.scss";

import { useEffect, useState } from "react";

import axios from 'axios';

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

    const imageURL = profile.dog.photo ? `${URL}/${profile.dog.photo}` : 'default-photo-url'
    
    return ( 
       <div className="account-content">
            <img  className="account-content__photo" src={imageURL} alt={`${profile.dog.name}`}/>
            <div className="account-content__info">
                <p className="account-content__specifics">Username: {profile.user.username}</p>
                <p className="account-content__specifics">Dog's Name: {profile.dog.name}</p>
                <p className="account-content__specifics">Breed: {profile.dog.breed}</p>
                <p className="account-content__specifics">Dog Age: {profile.dog.age}</p>
                <p className="account-content__specifics">Personality: {profile.dog.personality}</p>
                <p className="account-content__specifics">City: {profile.user.city}</p>
            </div>
       </div> 
     );
}
 
export default AccountContent;