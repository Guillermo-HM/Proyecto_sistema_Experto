import { useState } from "react";
import '@chatscope/chat-ui-kit-styles/dist/default/styles.min.css';
import {
    MainContainer,
    ChatContainer,
    MessageList,
    Message,
    MessageInput,
    TypingIndicator,
} from "@chatscope/chat-ui-kit-react";

const ChatBot = () => {
    const [messages, setMessages] = useState([
        {
            message: "Hola  Buen dia",
            sender: "Bot",
        }
    ]);

    const [typing, setTyping] = useState(false);

    const handleSend = async (message) => {
        const newMessage = {
            message,
            sender: "user"
        };

        const newMessages = [...messages, newMessage];
        setMessages(newMessages);
        setTyping(true);


        //simulacion de respuesta
        setTimeout(() => {
            setMessages([...newMessages, {
                message: "Respuesta simulada desde prolog.",
                sender: "Bot"
            }]);
            setTyping(false);

        }, 1000);

    };

    return (
        <MainContainer>
            <ChatContainer>
                <MessageList typingIndicator={typing ? <TypingIndicator content="prensando..." /> : null}>
                    {messages.map((msg, i) => (
                        <Message key={i} model={{
                            message: msg.message,
                            sentTime: "just now",
                            sender: msg.sender
                        }} />
                    ))}
                </MessageList>
                <MessageInput placeholder="Escribe tu consulta..." onSend={handleSend} />
            </ChatContainer>
        </MainContainer>
    )

}

export default ChatBot;

