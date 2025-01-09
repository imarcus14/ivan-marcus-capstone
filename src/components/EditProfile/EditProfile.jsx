import "./EditProfile.scss";

import Button from "../../components/Button/Button";
import { useState } from "react";

const EditProfile = ({label, value, onSave}) => {

    const [edit, setEdit] = useState(false);
    const [inputValue, setInputValue] = useState(value);

    const handleSave = () => {
        onSave(inputValue);
        setEdit(false);
    };



    return ( 
        <div className="edit-field">
            <h3 className="edit-field__title">{label}</h3>
            {edit ? (
                <div>
                    <input className="edit-field__input" type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)}/>
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
 
export default EditProfile;