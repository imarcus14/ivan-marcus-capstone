import "./ProfileCards.scss";

import { createContext, useEffect, useState } from "react";

import Button from "../Button/Button";
import { Link } from "react-router-dom";
import axios from 'axios';
import { motion } from "motion/react"

const ProfileCards = ({city}) => {

    const URL = import.meta.env.VITE_API_URL; 
    const [userInfo, setUserInfo] = useState([]);
    const [selectedCard, setSelectedCard] = useState(null);
   
    const userCity = JSON.parse(localStorage.getItem("signupData"))?.user?.city;

    const fetchUserInfo = async () => {
        try{
            const response = await axios.get(`${URL}/dogs`)
            setUserInfo(response.data);
        }catch(e){
            console.error(e);
        }
    }

    useEffect(() =>{
        fetchUserInfo();
    },[]);

    const filteredUserLocation = userInfo.filter((user) => user.city === userCity);

    return ( 
        <div className="profile-card__container">
            {filteredUserLocation.map((user) => (
                    <motion.div 
                    className="profile-card" 
                    key={user.id}
                    onClick={() => setSelectedCard((prev) => (prev === user.id ? null : user.id))}
                    initial={{ scale: 1 }}
                    animate={{
                        scale: selectedCard === user.id ? 1.2 : 1, 
                        zIndex: selectedCard === user.id ? 1 : 0, 
                    }}
                    whileHover={{ scale: selectedCard === user.id ? 1.2 : 1.1 }}
                    transition={{ duration: 0.3 }}>
                        <div className="profile-card__left">
                            <img src={user.photo} alt="Other peoples profile images"/>
                            <Link to={`/chat/${user.username}`}>
                                <Button text="Chat" style="quaternary"/>
                            </Link>
                        </div>
                        <div className="profile-card__right">
                            <p className="profile-card__info"> User: {user.username}</p>
                            <p className="profile-card__info"> Dog's Name: {user.dogName}</p>
                            <p className="profile-card__info"> Breed: {user.breed}</p>
                            <p className="profile-card__info"> Age: {user.age}</p>
                            <p className="profile-card__info"> Personality: {user.personality}</p>
                            <p className="profile-card__info"> Location: {user.city}</p>
                        </div>
                    </motion.div>
            ))}
            
        </div>
     );
}
 
export default ProfileCards;