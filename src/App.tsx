import React from "react";
import MainRouter from "./navigation/mainRouter";
import "./App.css";

const App = () => {
  return (
    <React.Fragment>
      <MainRouter />
    </React.Fragment>
  );
};

// import React, {useState} from 'react';
// import './styles.css'
// import LoginForm from "./login/LoginForm";

// function App() {
//     const [showLogin,setShowLogin] = useState(false)

//   const handleClick = () =>{
//     setShowLogin((showLogin) => !showLogin);
//   }
//   return (
//     <div className="App">
//       <div>
//           { !showLogin &&
//         <span onClick={handleClick} className="loginIcon" > Log In</span>}
//           { showLogin &&
//           <LoginForm showLogin={showLogin}/>}
//       </div>
//     </div>
//   );
// };

export default App;
