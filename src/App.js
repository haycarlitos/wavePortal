import * as React from "react";
import { ethers } from "ethers";
import './App.css';

export default function App() {

  const wave = () => {
    
  }
  
  return (
    <div className="mainContainer">

      <div className="dataContainer">
        <div className="header">
          🔥 Hola!
        </div>

        <div className="bio">
          Encorage the community with a message.    
        </div>

        <button className="waveButton" onClick={wave}>
          🔥 at starkdevs
        </button>
      </div>
    </div>
  );
}
