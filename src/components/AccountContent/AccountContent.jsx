import "./AccountContent.scss";

import { useEffect, useState } from "react";

import axios from 'axios';
import { useLocation } from "react-router-dom";

const AccountContent = () => {

    const URL = import.meta.env.VITE_API_URL; 

    const [profile, setProfile] = useState({
        username: "",
        name: "",
        dogName: "",
        dogAge: "",
        dogBreed: "",
        dogPersonality: "",
        city: "",
        photo: "",
    })

    console.log(profile.dogName)

    useEffect(() => {
        const fetchProfile = async () => {
            try{
                const profileResponse = await axios.get(`${URL}/dogs/latest`);
                setProfile(profileResponse.data);

                
            }catch(error){
                console.error(error);
            }
        };

        fetchProfile();
    }, [])
    
    return ( 
       <div className="account-content">
            <img  className="account-content__photo" src={profile.photo} alt=""/>
            <div className="account-content__info">
                <p className="account-content__specifics">Username: {profile.username}</p>
                <p className="account-content__specifics">Dog's Name: {profile.dogName}</p>
                <p className="account-content__specifics">Breed: {profile.breed}</p>
                <p className="account-content__specifics">Dog Age: {profile.age}</p>
                <p className="account-content__specifics">Personality: {profile.personality}</p>
                <p className="account-content__specifics">City: {profile.city}</p>
            </div>
       </div> 
     );
}
 
export default AccountContent;