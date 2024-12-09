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
        passwordCheck: '',
        name: '',
        dogName: '',
        dogAge: '',
        dogBreed: '',
        dogPersonality: '',
        city: '',
        photo: null
    });


    const navigate = useNavigate();


    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0]; 
        if (file) {
            setFormData((prevData) => ({
                ...prevData,
                photo: file, 
            }));
        }
    };


    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!formData.name || !formData.dogName || !formData.password || !formData.username || !formData.email || !formData.dogAge || !formData.dogBreed || !formData.dogPersonality || !formData.city ) {
            alert("A field is missing please double check inputs");
            return; 
        }
        if (formData.passwordCheck != formData.password){
            alert("Passwords do not match, please try again")
            return;
        }

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(formData.email)){
            alert("Please enter a proper email!")
            return;
        }

        try{
            const userData = {
                name: formData.name,
                username: formData.username,
                email: formData.email,
                password: formData.password,
                city: formData.city
            }

            const userResponse = await axios.post(`${URL}/users`, userData);
            const userId = userResponse.data.id;

            const dogFormData = new FormData();
            dogFormData.append('name', formData.dogName);
            dogFormData.append('age', formData.dogAge);
            dogFormData.append('breed', formData.dogBreed);
            dogFormData.append('personality', formData.dogPersonality);
            dogFormData.append('user_id', userId);
            if (formData.photo) {
                dogFormData.append('photo', formData.photo);
            } else {
                console.warn("No photo uploaded.");
            }

            const dogResponse = await axios.post(`${URL}/dogs`, dogFormData, { 
                headers: {
                    'Content-Type': 'multipart/form-data',
                }
            });
            const completeData = {
                user: userData,
                dog: {
                    name: formData.dogName,
                    age: formData.dogAge,
                    breed: formData.dogBreed,
                    personality: formData.dogPersonality,
                    photo: dogResponse.data.photo, 
                },
            };

            localStorage.setItem("signupData", JSON.stringify(completeData));

            
   
            navigate("/main");
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
            <InputField text="Please re-enter your desired password" name="passwordCheck" type="password" style="secondary" value={formData.passwordCheck} onChange={handleChange}/>
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
            <input type="file" name="photo" onChange={handleFileChange}/>

           <Button type="submit" text="Sign Up" style="tertiary" />

        </form>
     );
}
 
export default SignupPage;