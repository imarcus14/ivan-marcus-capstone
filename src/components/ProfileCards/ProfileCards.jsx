import "./ProfileCards.scss";

import { createContext, useEffect, useState } from "react";

import Button from "../Button/Button";
import { Link } from "react-router-dom";
import axios from 'axios';
import { motion } from "motion/react"

const ProfileCards = () => {

    const [userInfo, setUserInfo] = useState([]);
    const [selectedCard, setSelectedCard] = useState(null);
    

    const fetchUserInfo = async () => {
        try{
            const response = await fetch('/test.json')
            const data = await response.json();
            setUserInfo(data);
        }catch(e){
            console.error(e);
        }
    }

    useEffect(() =>{
        fetchUserInfo();
    },[]);



    return ( 
        <div className="profile-card__container">
            {userInfo.map((user) => (
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
                            <img src={user.profileImage} alt="Other peoples profile images"/>
                            <Link to={`/chat/${user.username}`}>
                                <Button text="Chat" style="quaternary"/>
                            </Link>
                        </div>
                        <div className="profile-card__right">
                            <p className="profile-card__info"> User: {user.username}</p>
                            <p className="profile-card__info"> Dog's Name: {user.dogName}</p>
                            <p className="profile-card__info"> Breed: {user.dogBreed}</p>
                            <p className="profile-card__info"> Age:{user.dogAge}</p>
                            <p className="profile-card__info"> Personality: {user.dogPersonality}</p>
                            <p className="profile-card__info"> Location: {user.location}</p>
                        </div>
                    </motion.div>
            ))}
            
        </div>
     );
}
 
export default ProfileCards;