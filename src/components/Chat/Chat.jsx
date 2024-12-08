import "./Chat.scss";

import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import arrow from '../../assets/icons/left-arrow.svg'
import {io} from 'socket.io-client';

const Chat = () => {

    const URL = import.meta.env.VITE_API_URL;
    const socket = io(URL);

    const {username} = useParams();
    const currentUser = "currentUsername";
    const room = [currentUser, username].join("-");

    const [message, setMessage] = useState("");
    const [messages,setMessages] = useState([]);

    useEffect(() => {

        socket.emit("join room", {room});

        socket.on("chat history", (history) => {
            setMessages(history);
        })

        socket.on("chat message", ({sender, msg}) => {
            setMessages((prevMessages) => [...prevMessages, {sender, msg}]);
        });

        return() => {
            socket.disconnect();
        };
    }, [room]);

    const sendMesage = (e) => {
        e.preventDefault();
        if(!message.trim()){
            alert("Please input a valid message");
            return;
        }
        console.log("Emitting message:", { room, message, sender: currentUser });
        socket.emit("chat message", { room, message, sender: currentUser });
        setMessage("");
    };

    
    return ( 
        <div className="chat">
            <div className="chat__container">
                <Link to="/main">
                    <img className="chat__arrow" src={arrow} alt="Left arrow"/>
                </Link>
           
                    <h2 className="chat__title">Chat with {username}</h2>
                
            </div>
            <div className="chat__messages">
                {messages.map((message, index) => (
                    <div className="chat__message" key={index}>
                        <p>{message.sender}:{message.msg}</p>
                        
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