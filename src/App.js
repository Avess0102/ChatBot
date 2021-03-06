import { Chatbot } from 'react-chatbot-kit'
import 'react-chatbot-kit/build/main.css';
import config from './config';
import MessageParser from './MessageParser';
import ActionProvider from './ActionProvider';
import './App.css';

function App() {
  return (
    <div className="App">
      <div style={{ maxWidth: "300px" }}>
        <Chatbot
          config={config}
          actionProvider={ActionProvider}
          messageParser={MessageParser}
        />
      </div>
    </div>
  );
}

export default App;
