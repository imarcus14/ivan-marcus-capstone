import "./InputField.scss";

const InputField = ({text, name, style}) => {
    return ( 
        <>
            <label className="input-field">
                {text}
                <input name={name} className={`input-field__input--${style}`}/>
            </label>
        </>
     );
}
 
export default InputField;