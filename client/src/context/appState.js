import appContext from "./appContext";
import React from "react";
const appState = (props) => {

  return (
    <>
      <appContext.Provider >{props.children}</appContext.Provider>
    </>
  );
};

export default appState;
