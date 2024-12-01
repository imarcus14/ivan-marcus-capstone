import "./SignupPage.scss";

import { useEffect, useState } from "react";

import Button from "../../components/Button/Button";
import InputField from "../../components/InputField/InputField";
import axios from 'axios';

const SignupPage = () => {




    return ( 
        <form className="sign-up">
            <p className="sign-up__title">Get ready to change your puppies life! Just fill out the information below to get started!</p>
            <InputField text="Please enter a Username" name="username" style="secondary"/>
            <InputField text="Please enter a Password" name="password" style="secondary"/>
            <InputField text="Please re-enter your desired password" name="password-check" style="secondary"/>
            <InputField text=" What is the owner's name?" name="owner-name" style="secondary"/>
            <InputField text="What is your dog's name?" name="dog-name" style="secondary"/>
            <InputField text="How old is your dog?" name="dog-age" style="secondary"/>
            <InputField text="What breed is your dog?" name="dog-breed" style="secondary"/>
           <label className="sign-up__dropdown-label">
                What kind of personality does your dog have?
                <select className="sign-up__dropdown" defaultValue="none">   
                    <option value="Excitable/Hyperattached">Excitable/Hyperattached</option>     
                    <option value="Anxious/Fearful">Anxious/Fearful</option>     
                    <option value="Aloof/Predatory">Aloof/Predatory</option>     
                    <option value="Reactive/Assertive">Reactive/Assertive</option>     
                    <option value="Calm/Agreeable">Calm/Agreeable</option>     
                </select>
                {/* The types of personalities were found from this link https://www.uel.ac.uk/about-uel/news/2024/february/ai-finds-five-dog-personality-types#:~:text=The%20results%20revealed%20five%20distinct,and%20%E2%80%9CCalm%2FAgreeable.%E2%80%9D */}
           </label>
           <InputField text="Where are you located? (City/Province)" name="location" style="secondary"/>


           <Button type="submit" text="Sign Up" style="tertiary" />

        </form>
     );
}
 
export default SignupPage;