import "./Chat.scss";

import { useEffect, useState } from "react";

import { Link } from "react-router-dom";
import arrow from '../../assets/icons/left-arrow.svg'
import {io} from 'socket.io-client';

const Chat = () => {

    const URL = import.meta.env.VITE_API_URL;
    const socket = io(URL);

    const [message, setMessage] = useState("");
    const [messages,setMessages] = useState([]);

    useEffect(() => {
        socket.on("chat message", (msg) => {
            setMessages((prevMessages) => [...prevMessages, msg]);
        });

        return() => {
            socket.off("chat message");
        };
    }, []);

    const sendMesage = (e) => {
        e.preventDefault();
        if(!message.trim()){
            alert("Please input a valid message");
            return;
        }
        socket.emit("chat message", message.trim());
        setMessage("");
    };

    
    return ( 
        <div className="chat">
            <div className="chat__container">
                <Link to="/main">
                    <img className="chat__arrow" src={arrow} alt="Left arrow"/>
                </Link>
                <h2 className="chat__title">Your Chat with ...</h2>
            </div>
            <div className="chat__messages">
                {messages.map((message, index) => (
                    <div className="chat__message" key={index}>
                        {message}
                        
                    </div>
                ))}
            </div>
            <form className="chat__form" onSubmit={sendMesage}>
                <input type="text" className="chat__input" value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Message"></input>
                <button type="submit" className="chat__btn">Send</button>
            </form>

        </div>
     )
}
 
export default Chat;