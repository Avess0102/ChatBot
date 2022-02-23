import React from "react";
import { createChatBotMessage } from "react-chatbot-kit";
import BotAvatar from "./Components/BotAvatar/BotAvatar";

const botName = "Avess_Bot";

const config = {
  initialMessages: [createChatBotMessage(`Hey There!`)],
  botName: botName,
  customComponents: {
    botAvatar: (props) => <BotAvatar {...props} />,
  },
  customStyles: {
    
    botMessageBox: {
      backgroundColor: "#3E215D",
    },
    chatButton: {
      backgroundColor: "#284E78",
    },
    userMessageBox: {
      backgroundColor: "#5aff15",
    },
    state: {

    }
  },
};

export default config;
