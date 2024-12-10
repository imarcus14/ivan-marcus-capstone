import "./Button.scss"

import { motion } from "motion/react";

const Button = ({text, style}) => {
    return ( 
        <motion.button className={`button button--${style}`}
        initial={{scale: 1}}
        whileHover={{scale: 1.1}}
        whileTap={{scale: 0.9}}
        transition={{duration: 0.2}}>
            {text}
        </motion.button>
     );
}
 
export default Button;