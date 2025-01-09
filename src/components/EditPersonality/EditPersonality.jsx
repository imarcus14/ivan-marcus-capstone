import "./EditPersonality.scss"

import Button from "../Button/Button";
import { useState } from "react";

const EditPersonality = ({label, value, onSave}) => {

     const [edit, setEdit] = useState(false);
        const [inputValue, setInputValue] = useState(value);
    
        const handleSave = () => {
            onSave(inputValue);
            setEdit(false);
        };
    
    return ( 

        <div className="edit-personality">
            <h3 className="edit-personality__title">{label}</h3>
            {edit ? (
                <div>
                    {/* <input className="edit-field__input" type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)}/> */}
                    <select className="edit-personality__input" value={inputValue} onChange={(e) => setInputValue(e.target.value)}>   
                        <option value="" disabled>Select a personality</option>
                        <option value="Excitable/Hyperattached">Excitable/Hyperattached</option>     
                        <option value="Anxious/Fearful">Anxious/Fearful</option>     
                        <option value="Aloof/Predatory">Aloof/Predatory</option>     
                        <option value="Reactive/Assertive">Reactive/Assertive</option>     
                        <option value="Calm/Agreeable">Calm/Agreeable</option>     
                    </select>
                    <div className="edit-field__buttons">
                        <Button onClick={handleSave} text="Save" style="six"/>
                        <Button onClick={() => setEdit(false)} text="Cancel" style="seven"/>
                    </div>

                </div>
            ) : (

                <div>
                    <span>{value}</span>
                    <Button onClick={() => setEdit(true)} text="Edit" style="eight"/>

                    
                </div>
            )}
        </div>

     );
}
 
export default EditPersonality;