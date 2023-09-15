import React, { useRef } from "react";

import MessageList from "./MessageList";
import "./App.css"

const App = ({ classes }) => {
  const inputRef = useRef();
  const inputContainerRef = useRef();
  const messageListContainerRef = useRef();
  const navbarContainerRef = useRef();
  //const [isKeyboardOpen, setIsKeyboardOpen] = useState(false);


  const handleInputBlur = () => {
    //setIsKeyboardOpen(false);
    // hideInput();
    // showDummy();
    console.log('closed')
    inputContainerRef.current.style.top = "0px";
    messageListContainerRef.current.style.height = 'fit-content';
  };

  // const hideInput = () => {
  //   // inputContainerRef.current.style=
  //   // inputContainerRef.current.style.position = "absolute";
  //   // inputContainerRef.current.style.zIndex = 0;
  //   // inputContainerRef.current.style.left = "99999px";
  //   // inputContainerRef.current.style.top = "0px";
  //   inputContainerRef.current.removeEventListener("touchmove", e => {
  //     e.preventDefault();
  //   });
  //   messageListContainerRef.current.style.height = "calc(100vh - 128px)";
  //   if (navbarContainerRef.current) {
  //     navbarContainerRef.current.removeEventListener("touchmove", e => {
  //       e.preventDefault();
  //     });
  //   }
  // };

  const showInput = () => {
    console.log('opened ')
    // Moves the real input on-screen
    inputContainerRef.current.style.display='initial'
    // inputContainerRef.current.style.position = "absolute";
    // inputContainerRef.current.style.zIndex = 999;
    // inputContainerRef.current.style.left = "0px";
    // inputContainerRef.current.style.width = "100%";
    // inputContainerRef.current.style.height = "64px";
    inputContainerRef.current.addEventListener("touchmove", e => {
      e.preventDefault();
    });
    // Positions the real input at the right height for the type of iPhone
    switch (window.innerHeight) {
      case 798: // iPhone XR, Xs Max iOS 12.4
        inputContainerRef.current.style.top = "377px";
        messageListContainerRef.current.style.height = "312px";
        break;
      case 714: // iPhone X, Xs
        inputContainerRef.current.style.top = "304px";
        messageListContainerRef.current.style.height = "300px";
        break;
      case 696: // iPhone 6 Plus, 6s Plus, 7 Plus, 8 Plus
        inputContainerRef.current.style.top = "316px";
        messageListContainerRef.current.style.height = "300px";
        break;
      case 627: // iPhone 6, 6s, 7, 8
        inputContainerRef.current.style.top = "258px";
        messageListContainerRef.current.style.height = "300px";
        break;
      case 528: // iPhone 5s, SE, iOS 12.4
        inputContainerRef.current.style.top = "166px";
        messageListContainerRef.current.style.height = "300px";
        break;
      default:
        inputContainerRef.current.style.top = "356px";
        messageListContainerRef.current.style.height = "300px";
    }

    if (navbarContainerRef.current) {
      navbarContainerRef.current.addEventListener("touchmove", e => {
        e.preventDefault();
      });
    }

    if (messageListContainerRef.current) {
      messageListContainerRef.current.addEventListener("touchmove", e => {
        if (!e.currentTarget) {
          return;
        }
        if (e.currentTarget.scrollTop === 0) {
          e.currentTarget.scrollTop = 1;
        } else if (
          e.currentTarget.scrollHeight ===
          e.currentTarget.scrollTop + e.currentTarget.offsetHeight
        ) {
          e.currentTarget.scrollTop -= 1;
        }
      });
    }
  };

  // window.addEventListener("resize", (e) => {
  //  console.log('keyboard opened',e)
  // });
  return (
    <div className="app-body">
      <div style={{width:'100%'}}>
        <div ref={navbarContainerRef} style={{position:'fixed'}}>
          <header>Navbar</header>
        </div>
        <div ref={inputContainerRef} style={{position:'fixed', bottom:'10px'}}>
          <input
            inputRef={inputRef}
            variant="outlined"
            fullwidth="true"
            // onFocus={setIsKeyboardOpen(false)}
            onBlur={() => handleInputBlur()}
            onFocus={()=>showInput()}
            placeholder="real input"
            autoComplete="false"
          />
        </div>
        <div
          ref={messageListContainerRef}
          
        >
          <MessageList />
        </div>
       
      </div>
    </div>
  );
};

export default App;
