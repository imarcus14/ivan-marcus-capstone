import "./SignupPage.scss";

import { useEffect, useState } from "react";

import Button from "../../components/Button/Button";
import InputField from "../../components/InputField/InputField";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

const SignupPage = () => {
    const URL = import.meta.env.VITE_API_URL; 
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        name: '',
        dogName: '',
        dogAge: '',
        dogBreed: '',
        dogPersonality: '',
        city: ''
    });


    const navigate = useNavigate();


    const handleChange = (e) => {
        const { name, value } = e.target;
        console.log(`Updating ${name} with value: ${value}`); 
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        localStorage.setItem("formData", JSON.stringify(formData));
        console.log("Form Data before sending:", formData);
        const userData = {
            name: formData.name,
            username: formData.username,
            email: formData.email,
            password: formData.password,
            city: formData.city
        }

        
        
        const dogData = {
            name: formData.dogName,
            age: formData.dogAge,
            breed: formData.dogBreed,
            personality: formData.dogPersonality,
            photo: "default-photo-url"   
        }
        

        try{

            const userResponse = await axios.post(`${URL}/users`, userData);
            const userId = userResponse.data.id;
            console.log("User created successfully:", userResponse.data);

            await axios.post(`${URL}/dogs`, { ...dogData, user_id: userId });
            
            console.log("User Data:", userData);
            console.log("Dog Data:", dogData);
            console.log("Navigating with username:", formData.username);
            console.log("Navigating with city:", formData.city);
            navigate("/main");
            console.log("Navigation triggered");
        }catch(error){
            console.error(error);
        }

    }
   


    return ( 
        <form className="sign-up" onSubmit={handleSubmit}>
            <p className="sign-up__title">Get ready to change your puppies life! Just fill out the information below to get started!</p>
            <InputField text="Please enter a Username" name="username" style="secondary" value={formData.username} onChange={handleChange}/>
            <InputField text="Please enter a Email" name="email" style="secondary" value={formData.email} onChange={handleChange}/>
            <InputField text="Please enter a Password" name="password" style="secondary" type="password" value={formData.password} onChange={handleChange}/>
            <InputField text="Please re-enter your desired password" name="password-check" type="password" style="secondary"/>
            <InputField text=" What is the owner's name?" name="name" style="secondary" value={formData.name} onChange={handleChange}/>
            <InputField text="What is your dog's name?" name="dogName" style="secondary" value={formData.dogName} onChange={handleChange}/>
            <InputField text="How old is your dog?" name="dogAge" style="secondary" value={formData.dogAge} onChange={handleChange}/>
            <InputField text="What breed is your dog?" name="dogBreed" style="secondary" value={formData.dogBreed} onChange={handleChange}/>
            <label className="sign-up__dropdown-label">
                What kind of personality does your dog have?
                <select className="sign-up__dropdown" name="dogPersonality" value={formData.dogPersonality} onChange={handleChange}>   
                    <option value="" disabled>Select a personality</option>
                    <option value="Excitable/Hyperattached">Excitable/Hyperattached</option>     
                    <option value="Anxious/Fearful">Anxious/Fearful</option>     
                    <option value="Aloof/Predatory">Aloof/Predatory</option>     
                    <option value="Reactive/Assertive">Reactive/Assertive</option>     
                    <option value="Calm/Agreeable">Calm/Agreeable</option>     
                </select>
                {/* The types of personalities were found from this link https://www.uel.ac.uk/about-uel/news/2024/february/ai-finds-five-dog-personality-types#:~:text=The%20results%20revealed%20five%20distinct,and%20%E2%80%9CCalm%2FAgreeable.%E2%80%9D */}
           </label>
           <InputField text="Where are you located? (City)" name="city" style="secondary" value={formData.city} onChange={handleChange}/>


           <Button type="submit" text="Sign Up" style="tertiary" />

        </form>
     );
}
 
export default SignupPage;