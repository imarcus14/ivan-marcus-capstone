import "./Button.scss"

const Button = ({text, style}) => {
    return ( 
        <button className={`button button--${style}`}>{text}</button>
     );
}
 
export default Button;