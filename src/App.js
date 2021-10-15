import React, {useState} from "react";

function App() {
  const [token, setToken] = useState(); //define the tokens for login checking

  if(!token) { //check if the user is logged in, if not, direct to login page
    //return; TODO: Add login component
  }

  return (
    <>
    </>
  );

}

export default App;
