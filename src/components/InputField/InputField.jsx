import "./InputField.scss";

const InputField = ({text, name, style, value, onChange, type}) => {
    return ( 
        <>
            <label className="input-field">
                {text}
                <input name={name} className={`input-field__input--${style}`} type={type} value={value} onChange={onChange}/>
            </label>
        </>
     );
}
 
export default InputField;