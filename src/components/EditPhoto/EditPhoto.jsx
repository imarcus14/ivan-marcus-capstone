import "./EditPhoto.scss"

import Button from "../Button/Button"
import { useState } from "react"

const EditPhoto = ({label, value, onSave}) => {

    const [edit, setEdit] = useState(false);
    const [inputValue, setInputValue] = useState(value);

    const handleSave = () => {
        onSave(inputValue);
        setEdit(false);
    };

    return ( 

        <div className="edit-photo">
            <h3 className="edit-photo__title">{label}</h3>
            {edit ? (
                <div>
                    <input className="edit-photo__input" type="file" value={inputValue} onChange={(e) => setInputValue(e.target.value)}/>
                    <div className="edit-photo__buttons">
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
 
export default EditPhoto;