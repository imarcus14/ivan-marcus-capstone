import "./EditProfile.scss";

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
            <h3>{label}</h3>
            {edit ? (
                <div>
                    <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)}/>
                    <button onClick={handleSave}>Save</button>
                    <button onClick={() => setEdit(false)}>Cancel</button>
                </div>
            ) : (

                <div>
                    <span>{value}</span>
                    <button onClick={() => setEdit(true)}>Edit</button>
                </div>
            )}
        </div>

     );
}
 
export default EditProfile;