import { Box } from "grommet";
import React, {useState} from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Login from "./components/pages/Login";
import NavBar from "./components/parts/NavBar";

function setToken(userToken) {
  sessionStorage.setItem('token', JSON.stringify(userToken));
}

function getToken() {
  const tokenString = sessionStorage.getItem('token');
  const userToken = JSON.parse(tokenString);
  return userToken?.token
}

function App() {
  const token = getToken(); //define the tokens for login checking

  if(!token) { //check if the user is logged in
    return <Login setToken={setToken} />  //direct to login page
  }

  return (
    <Router>
      <NavBar />
      <Box fill align='center' justify='center'>
        <p>BOOP</p>
      </Box>
    </Router>
  );

}

export default App;
