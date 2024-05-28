"use client";

import React, { useState, useEffect } from 'react';
import Web3Modal from 'web3modal';
import { ethers } from 'ethers';
import CoinbaseWalletSDK from '@coinbase/wallet-sdk';
import WalletConnectProvider from "@walletconnect/web3-provider";

const providerOptions = {
  coinbasewallet: {
    package: CoinbaseWalletSDK,
    options: {
      appName: "Web3Modal Example",
      rpc: {
        137: "https://polygon-rpc.com",
      },
      chainId: 137,
    }
  },
  walletconnect: {
    package: WalletConnectProvider,
    options: {
      rpc: {
        137: "https://polygon-rpc.com",
      },
      chainId: 137,
    }
  },
  metamask: {
    package: true,
  },
};

function WalletButton({ setProvider }) {
  const [provider, setLocalProvider] = useState(null);
  const [signer, setLocalSigner] = useState(null);
  const [address, setAddress] = useState(null);

  useEffect(() => {
    if (window.ethereum) {
      console.log('MetaMask is installed');
    } else {
      console.error('MetaMask not detected');
      alert('Please install MetaMask to use this application.');
    }
  }, []);

  async function connectWallet() {
    try {
      let web3Modal = new Web3Modal({
        cacheProvider: true,
        providerOptions,
      });
      const web3ModalInstance = await web3Modal.connect();
      const web3ModalProvider = new ethers.providers.Web3Provider(web3ModalInstance);
      setLocalProvider(web3ModalProvider);

      // Get the signer and address
      const signer = web3ModalProvider.getSigner();
      setLocalSigner(signer);
      const userAddress = await signer.getAddress();
      setAddress(userAddress);

      // Pass provider and signer to parent
      setProvider(web3ModalProvider, signer);
    } catch (error) {
      console.log(error);
    }
  }

  function disconnectWallet() {
    setLocalProvider(null);
    setLocalSigner(null);
    setAddress(null);
    setProvider(null, null);
    localStorage.removeItem("WEB3_CONNECT_CACHED_PROVIDER");
  }

  return (
    <div>
      {address ? (
        <>
          <p>Connected Address: {address}</p>
          <button onClick={disconnectWallet}>Disconnect Wallet</button>
        </>
      ) : (
        <button onClick={connectWallet}>Connect Wallet</button>
      )}
    </div>
  );
}

export default WalletButton;