import React from "react";
import Header from "./Header";
import ModalIs from "./Modal/Modal";
import SomeThing from "./SomeThing";
import ContextProvider from "./Context/ContextProvider";

const Store = () => {
  return (
    <ContextProvider>
      <SomeThing />
      <ModalIs />
    </ContextProvider>
  );
};

export default Store;
