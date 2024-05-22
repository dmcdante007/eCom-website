import React, { useContext } from "react";
import ContextState from "./Context/ContextProvider";
import Header from "./Header";

const HeaderRoutes = (props) => {
  const ctx = useContext(ContextState)
  return (
    <>
      <Header></Header>
      {ctx.stateIs}
    </>
  );
};

export default HeaderRoutes;
