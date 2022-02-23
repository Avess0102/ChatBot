class MessageParser {
  constructor(actionProvider) {
    this.actionProvider = actionProvider;
  }

  parse(message) {
    
    const lowercase = message.toLowerCase()
    
    const arr = lowercase.split(" ").map(String);
    console.log(arr);

    const a = ["hi", "hello", "greetings", "hola", "hii", "hi,", "hii,", "hello,", "greeting", "hola,"];
    const b = ["show", "find", "roommate", "available", "room", "mate", "rooms"];
    const c = ["about"];
    const d = ["by", "tata", "thank", "thanks"];

    let find = 0;

    a.map((e) => {
      arr.find(function(x) {
        if(x == e) {
          find = 1; 
        }
      })
    })

    
    b.map((e) => {
      arr.find(function (x) {
        if (x == e) {
          find = 2;
        }
      });
    });
    
    c.map((e) => {
      arr.find(function (x) {
        if (x == e) {
          find = 3;
        }
      });
    });

    d.map((e) => {
      arr.find(function(x){
        if(x==e) {
          find = 6;
        }
      })
    });

    if(lowercase.includes("/help")) {
      find = 4;
    }

    if(lowercase.includes("how")) {
      find = 5;
    }

    console.log(find);
    
    switch (find) {
      case 1:
        this.actionProvider.hiHandler();
        break;

      case 2:
        this.actionProvider.roomHandler();
        break;

      case 3:
        this.actionProvider.aboutHandler();
        break;

      case 4:
        this.actionProvider.helpHandler();
        break;

      case 5:
        this.actionProvider.howHandler();
        break;

      case 6:
        this.actionProvider.byHandler();
        break;

      default:
        this.actionProvider.defaultHandler();
        break;
    }
  }
}

export default MessageParser;
