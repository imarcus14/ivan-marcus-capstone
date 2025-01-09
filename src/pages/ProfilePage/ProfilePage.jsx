import "./ProfilePage.scss"

import { useEffect, useState } from "react";

import Button from "../../components/Button/Button";
import EditPersonality from "../../components/EditPersonality/EditPersonality";
import EditProfile from "../../components/EditProfile/EditProfile";
import Header from "../../components/Header/Header";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const ProfilePage = () => {

    const URL = import.meta.env.VITE_API_URL; 
    
        const [profile, setProfile] = useState({
            user: { username:"", city: ""},
            dog: {name: "", breed: "", age: "", personality: "", photo: ""},
        });
        const navigate = useNavigate();
    
        useEffect(() => {
            const storedFormData = localStorage.getItem("signupData");
            if (storedFormData) {
              setProfile(JSON.parse(storedFormData));
            }
          }, []);

        const handleSave = (category, field, newValue) => {
        setProfile((prevProfile) => ({
          ...prevProfile,
          [category]: {
            ...prevProfile[category],
            [field]: newValue,
          },
        }));
        };

        const handleSubmit = async () => {
            try{
                await axios.put(`${URL}/update-profile`, profile);
                localStorage.setItem("signupData", JSON.stringify(profile));
                alert("Profile Updated Successfully!")
                navigate("/main")

            }catch(error){
                console.error(error);
            }
        }

    return ( 
        <>
        <Header/>
        <div className="profile-page">
            <h2 className="profile-page__title">Edit Profile Information</h2>
            <div className="profile-page__edit">
                <div className="profile-page__section">
                    <h3 className="profile-page__section-title">User Information:</h3>
                    <EditProfile label="Username:" value={profile.user.username} onSave={(newValue) => handleSave("user", "username", newValue)}/>
                    <EditProfile label="Password:" value={profile.user.password} onSave={(newValue) => handleSave("user", "password", newValue)}/>
                    <EditProfile label="City:" value={profile.user.city} onSave={(newValue) => handleSave("user", "city", newValue)}/>
                </div>
                <div className="profile-page__section">
                    <h3 className="profile-page__section-title">Dog Information:</h3>
                    <EditProfile label="Dog Name:" value={profile.dog.name} onSave={(newValue) => handleSave("dog", "username", newValue)}/>
                    <EditProfile label="Dog Age:" value={profile.dog.age} onSave={(newValue) => handleSave("dog", "username", newValue)}/>
                    <EditProfile label="Dog Breed:" value={profile.dog.breed} onSave={(newValue) => handleSave("dog", "username", newValue)}/>
                    <EditPersonality label="Dog Personality:" value={profile.dog.personality} onSave={(newValue) => handleSave("dog", "username", newValue)}/>
                    <EditProfile label="Dog Picture:" value={profile.dog.photo} onSave={(newValue) => handleSave("dog", "username", newValue)}/>
                </div>
            </div>
            {/* <button onClick={handleSubmit}>Save All Changes</button> */}
            <Button onClick={handleSubmit} text="Save All Changes" style="five"/>
            
        </div>
        </>
     );
}
 
export default ProfilePage;