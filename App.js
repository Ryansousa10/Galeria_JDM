// import { useState } from "react";


// import styles from "./App.module.css"


import Header from './Components/Header/Header';
import ContainerCard from './Components/ContainerCard/ContainerCard';


const App = () => {

  return (
    <>
        <Header />
        <div className="flex justify-content-center" style={{ marginTop: "50px", padding: '50px' }}>

          <ContainerCard />
          
        </div>
    </>
  )
}

export default App