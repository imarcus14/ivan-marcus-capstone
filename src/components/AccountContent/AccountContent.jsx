import "./AccountContent.scss";

import { useEffect, useState } from "react";

import axios from 'axios';

const AccountContent = ({username}) => {

    const URL = import.meta.env.VITE_API_URL; 

    const [profile, setProfile] = useState(null);
   
    const [isLoading, setIsLoading] = useState(true);
    console.log("Received username in AccountContent:", username);
    if (profile) {
        console.log("Profile name:", profile.name);
    }

    useEffect(() => {
        const fetchProfile = async () => {

            if(!username) {
                console.error("Username isn't provided");
                setIsLoading(false);
                return;
            }

            try{
                console.log(`Fetching profile for username: ${username}`);
                const profileResponse = await axios.get(`${URL}/dogs/${username}`);
                console.log("API response:", profileResponse.data);
                setProfile(profileResponse.data);

                
            }catch(error){
                console.error(error);
            }finally {
                setIsLoading(false);
            }
            
        };

        fetchProfile();
    }, [username]);

    if (isLoading) return <p>Loading...</p>;
    if (!profile) return <p>Failed to load profile. Please try again later.</p>;
    
    return ( 
       <div className="account-content">
            <img  className="account-content__photo" src={profile.photo || "default-photo-url"} alt=""/>
            <div className="account-content__info">
                <p className="account-content__specifics">Username: {profile.username}</p>
                <p className="account-content__specifics">Dog's Name: {profile.dogName}</p>
                <p className="account-content__specifics">Breed: {profile.dogBreed}</p>
                <p className="account-content__specifics">Dog Age: {profile.dogAge}</p>
                <p className="account-content__specifics">Personality: {profile.dogPersonality}</p>
                <p className="account-content__specifics">City: {profile.city}</p>
            </div>
       </div> 
     );
}
 
export default AccountContent;