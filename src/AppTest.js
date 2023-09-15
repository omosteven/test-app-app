// // import Nav from './components/Nav/Nav';
// import { useRef } from "react";
// import "./App.css";
// // import BioData from './components/BioData/BioData';
// // import Gallery from './components/Gallery/Gallery';

// function App() {
//   const inputRef = useRef();
//   const inputContainerRef = useRef();
//   const dummyRef = useRef();
//   const messageListContainerRef = useRef();
//   const navbarContainerRef = useRef();
//   const dummyContainerRef = useRef();

//   const handleDummyFocus = () => {
//     inputRef.current.focus();
//     //setIsKeyboardOpen(true);
//     hideDummy();
//     showInput();
//   };

//   const handleInputBlur = () => {
//     dummyRef.current.focus();
//     //setIsKeyboardOpen(false);
//     hideInput();
//     showDummy();
//   };

//   const hideInput = () => {
//     inputContainerRef.current.style.position = "absolute";
//     inputContainerRef.current.style.zIndex = 0;
//     inputContainerRef.current.style.left = "99999px";
//     inputContainerRef.current.style.top = "0px";
//     inputContainerRef.current.removeEventListener("touchmove", (e) => {
//       e.preventDefault();
//     });
//     messageListContainerRef.current.style.height = "calc(100vh - 128px)";
//     if (navbarContainerRef.current) {
//       navbarContainerRef.current.removeEventListener("touchmove", (e) => {
//         e.preventDefault();
//       });
//     }
//   };

//   const showInput = () => {
//     // Moves the real input on-screen
//     inputContainerRef.current.style.position = "absolute";
//     inputContainerRef.current.style.zIndex = 999;
//     inputContainerRef.current.style.left = "0px";
//     inputContainerRef.current.style.width = "100%";
//     inputContainerRef.current.style.height = "64px";
//     inputContainerRef.current.addEventListener("touchmove", (e) => {
//       e.preventDefault();
//     });
//     // Positions the real input at the right height for the type of iPhone
//     switch (window.innerHeight) {
//       case 798: // iPhone XR, Xs Max iOS 12.4
//         inputContainerRef.current.style.top = "377px";
//         messageListContainerRef.current.style.height = "312px";
//         break;
//       case 714: // iPhone X, Xs
//         inputContainerRef.current.style.top = "304px";
//         messageListContainerRef.current.style.height = "300px";
//         break;
//       case 696: // iPhone 6 Plus, 6s Plus, 7 Plus, 8 Plus
//         inputContainerRef.current.style.top = "316px";
//         messageListContainerRef.current.style.height = "300px";
//         break;
//       case 627: // iPhone 6, 6s, 7, 8
//         inputContainerRef.current.style.top = "258px";
//         messageListContainerRef.current.style.height = "300px";
//         break;
//       case 528: // iPhone 5s, SE, iOS 12.4
//         inputContainerRef.current.style.top = "166px";
//         messageListContainerRef.current.style.height = "300px";
//         break;
//       default:
//         inputContainerRef.current.style.top = "356px";
//         messageListContainerRef.current.style.height = "300px";
//     }

//     if (navbarContainerRef.current) {
//       navbarContainerRef.current.addEventListener("touchmove", (e) => {
//         e.preventDefault();
//       });
//     }

//     if (messageListContainerRef.current) {
//       messageListContainerRef.current.addEventListener("touchmove", (e) => {
//         if (!e.currentTarget) {
//           return;
//         }
//         if (e.currentTarget.scrollTop === 0) {
//           e.currentTarget.scrollTop = 1;
//         } else if (
//           e.currentTarget.scrollHeight ===
//           e.currentTarget.scrollTop + e.currentTarget.offsetHeight
//         ) {
//           e.currentTarget.scrollTop -= 1;
//         }
//       });
//     }
//   };

//   const hideDummy = () => {
//     dummyContainerRef.current.style.display = "none";
//   };

//   const showDummy = () => {
//     dummyContainerRef.current.style.display = "block";
//   };

//   return (
//     <>
//       <div className="app-body">
//         <header>How are you</header>
//         <div ref={inputContainerRef}>
//           <input
//             inputRef={inputRef}
//             variant="outlined"
//             fullwidth="true"
//             // onFocus={setIsKeyboardOpen(false)}
//             onBlur={() => handleInputBlur()}
//             placeholder="real inputsss"
//             autoComplete="false"
//             style={{
//               position: "absolute",
//               left: 99999,
//               height: 64,
//             }}
//           />
//         </div>
//         <div ref={dummyContainerRef}>
//           <input inputRef={dummyRef} onFocus={() => handleDummyFocus()} placeholder="sds"
//           style={{
//             position: "absolute",
//             bottom: 0,
//             left: 0,
//             height: 64,
//             width: "100%",
//           }} />
//         </div>
//       </div>
//       {/* <Nav />
//     <div className="container">
//     <BioData />
//     <Gallery />
//     </div> */}
//     </>
//   );
// }

// export default App;

{/* <div className='app-body'>
<header>How are you</header>
<input />
</div> */}