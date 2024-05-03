import React from 'react'
import SomeThing from './components/SomeThing';
import Header from './components/Header';
import './App.css'
import 'bootstrap/dist/css/bootstrap.css';
import ModalIs from './components/Modal/Modal';
import ContextProvider from './components/Context/ContextProvider';


function App() {
 

  return (
    <ContextProvider>
      <Header/>
      <ModalIs/>
      <SomeThing/>

    </ContextProvider>
  )
}

export default App
