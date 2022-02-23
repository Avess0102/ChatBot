// import HelpList from "./Components/HelpList";

class ActionProvider {
  constructor(createChatBotMessage, setStateFunc) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
  }

  hiHandler = () => {
    const message = this.createChatBotMessage(
      "Hii, there! Nice To Meet you...😀"
    );
    this.setChatbotMessage(message);
  };

  roomHandler = () => {
    const message = this.createChatBotMessage(("Please Visit: roommate.techmihirnaik.in")
    );
    this.setChatbotMessage(message);
  };

  defaultHandler = () => {
    const message = this.createChatBotMessage("Oops, that's not within my commands, you can try '/help' for available commands/related words.");
    this.setChatbotMessage(message);
  }

  helpHandler = () => {
    // const 
    const message = this.createChatBotMessage("Currently available commands are for finding room, roommate and to get help and about the me..");
    this.setChatbotMessage(message);
  }

  aboutHandler = () => {
    const message = this.createChatBotMessage("Hii, I am a bot developed on react. I hope you are safe and good. Stay tuned to see me developed..");
    this.setChatbotMessage(message);
  }

  howHandler = () => {
    const message = this.createChatBotMessage("I am fine. 😀 How can I help you? If you are confused type '/help");
    this.setChatbotMessage(message);
  }

  byHandler = () => {
    const message = this.createChatBotMessage("Ok, thank you for you time.")
    this.setChatbotMessage(message);
  }

  setChatbotMessage = (message) => {
    this.setState((state) => ({
      ...state,
      messages: [...state.messages, message],
    }));
  };
}

export default ActionProvider;
