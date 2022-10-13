import React, { useEffect, useState } from "react";
import "./App.css";

const getEthereumObject = () => window.ethereum;

/*
 * This function returns the first linked account found.
 * If there is no account linked, it will return null.
 */
const findMetaMaskAccount = async () => {
  try {
    const ethereum = getEthereumObject();

    /*
    * First make sure we have access to the Ethereum object.
    */
    if (!ethereum) {
      console.error("Make sure you have Metamask!");
      return null;
    }

    console.log("We have the Ethereum object", ethereum);
    const accounts = await ethereum.request({ method: "eth_accounts" });

    if (accounts.length !== 0) {
      const account = accounts[0];
      console.log("Found an authorized account:", account);
      return account;
    } else {
      console.error("No authorized account found");
      return null;
    }
  } catch (error) {
    console.error(error);
    return null;
  }
};

const App = () => {
  /*
   * The passed callback function will be run when the page loads.
   * More technically, when the App component "mounts".
   */
  const [currentAccount, setCurrentAccount] = useState("");


  const connectWallet = async () => {
    try {
      const ethereum = getEthereumObject();
      if (!ethereum) {
        alert("Get MetaMask!");
        return;
      }

      const accounts = await ethereum.request({
        method: "eth_requestAccounts",
      });

      console.log("Connected", account[0]);
      setCurrentAccount(account[0]);
    } catch (error) {
      console.error(error);
    }
  };

  /*
   * The passed callback function will be run when the page loads.
   * More technically, when the App component "mounts".
   */
  useEffect(async () => {
    const account = await findMetaMaskAccount();
    if (account !== null) {
      setCurrentAccount(account);
    }
  }, []);


  
  return (
    <div className="mainContainer">

      <div className="dataContainer">
        <div className="header">
          <span>🔥</span> Hola!
        </div>

        <div className="bio">
          Encorage the community with a message.    
        </div>

        <button className="waveButton" onClick={null}>
        <span>🔥</span> at starkdevs
        </button>
        {/*
        * If there is no currentAccount render this button
        */}
       {!currentAccount && (
          <button className="waveButton" onClick={connectWallet}>
            Connect Wallet
          </button>
        )}
      </div>
    </div>
  );
};

export default App;
