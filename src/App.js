import React, {useState} from "react";
import Login from "./components/pages/Login";
import useToken from "./components/useToken";

function App() {
  const [token, setToken] = useToken(); //define the tokens for login checking

  if(!token) { //check if the user is logged in
    return <Login setToken={setToken} />  //direct to login page
  }

  return (
    <>
    </>
  );

}

export default App;
