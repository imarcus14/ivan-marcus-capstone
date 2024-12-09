import "./LoginPage.scss";

import Button from "../../components/Button/Button";
import InputField from "../../components/InputField/InputField";
import { Link } from "react-router-dom";
import axios from'axios';
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const LoginPage = () => {

    const URL = import.meta.env.VITE_API_URL; 

    const [username, setUsername] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
    
            const loginResponse = await axios.get(`${URL}/dogs/${username}`);
            const backendData = loginResponse.data;
    
    

            const userData = {
                user: {
                    username: backendData.username,
                    city: backendData.city,
                },
                dog: {
                    name: backendData.dogName,
                    age: backendData.dogAge,
                    breed: backendData.dogBreed,
                    personality: backendData.dogPersonality,
                    photo: backendData.photo,
                },
            };
    
            localStorage.setItem("signupData", JSON.stringify(userData));
    
            navigate("/main");
        } catch (error) {
            console.error("Error during login process:", error);
            alert("An error occurred while logging in. Please try again.");
        }

    };

    return ( 
        <form className="login" onSubmit={handleSubmit}>
            <h3 className="login__title">We are so glad you're back! Please enter your login details.</h3>
            <InputField text="Please enter your Username:" name="username" style="secondary" value={username} onChange={(e) => setUsername(e.target.value)}/>
            <InputField text="Please enter your Password:" name="password" style="secondary" type="password" />
           
            <Button type="submit" text="Login" style="secondary"/>
     
        </form>

     );
}
 
export default LoginPage;