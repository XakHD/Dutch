// "use client";

// import React, { useState, useEffect } from 'react';
// import Web3Modal from 'web3modal';
// import { Web3Provider, JsonRpcSigner } from '@ethersproject/providers';
// import { ethers } from 'ethers';
// import CoinbaseWalletSDK from '@coinbase/wallet-sdk';
// import WalletConnectProvider from "@walletconnect/web3-provider";

// const providerOptions = {
//   coinbasewallet: {
//     package: CoinbaseWalletSDK,
//     options: {
//       appName: "Web3Modal Example",
//       rpc: {
//         137: "https://polygon-rpc.com",
//       },
//       chainId: 137,
//     }
//   },
//   walletconnect: {
//     package: WalletConnectProvider,
//     options: {
//       rpc: {
//         137: "https://polygon-rpc.com",
//       },
//       chainId: 137,
//     }
//   },
//   metamask: {
//     package: true,
//   },
// };

// interface WalletButtonProps {
//   setProvider: (provider: Web3Provider | null, signer: JsonRpcSigner | null) => void;
// }

// const WalletButton: React.FC<WalletButtonProps> = ({ setProvider }) => {
//   const [provider, setLocalProvider] = useState<Web3Provider | null>(null);
//   const [signer, setLocalSigner] = useState<JsonRpcSigner | null>(null);
//   const [address, setAddress] = useState<string | null>(null);
//   const [web3Modal, setWeb3Modal] = useState<Web3Modal | null>(null);

//   useEffect(() => {
//     if (window.ethereum) {
//       console.log('MetaMask is installed');
//     } else {
//       console.error('MetaMask not detected');
//       alert('Please install MetaMask to use this application.');
//     }

//     // Initialize Web3Modal
//     const web3ModalInstance = new Web3Modal({
//       cacheProvider: true,
//       providerOptions,
//     });
//     setWeb3Modal(web3ModalInstance);

//     // Reconnect if already connected
//     if (web3ModalInstance.cachedProvider) {
//       connectWallet(web3ModalInstance);
//     }
//   }, []);

//   const connectWallet = async (web3ModalInstance: Web3Modal) => {
//     try {
//       const web3ModalProvider = await web3ModalInstance.connect();
//       const provider = new ethers.providers.Web3Provider(web3ModalProvider);
//       const signer = provider.getSigner();
//       const userAddress = await signer.getAddress();

//       setLocalProvider(provider);
//       setLocalSigner(signer);
//       setAddress(userAddress);

//       // Pass provider and signer to parent
//       setProvider(provider, signer);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   const disconnectWallet = () => {
//     web3Modal?.clearCachedProvider();
//     setLocalProvider(null);
//     setLocalSigner(null);
//     setAddress(null);
//     setProvider(null, null);
//   };

//   return (
//     <div>
//       {address ? (
//         <>
//           <p>Connected Address: {address}</p>
//           <button onClick={disconnectWallet}>Disconnect Wallet</button>
//         </>
//       ) : (
//         <button onClick={() => connectWallet(web3Modal!)}>Connect Wallet</button>
//       )}
//     </div>
//   );
// };

// export default WalletButton;

"use client";

import React, { useState, useEffect } from 'react';
import Web3Modal from 'web3modal';
import { ethers, providers } from 'ethers';
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

interface WalletButtonProps {
  setProvider: (provider: providers.Web3Provider | null, signer: providers.JsonRpcSigner | null) => void;
}

const WalletButton: React.FC<WalletButtonProps> = ({ setProvider }) => {
  const [provider, setLocalProvider] = useState<providers.Web3Provider | null>(null);
  const [signer, setLocalSigner] = useState<providers.JsonRpcSigner | null>(null);
  const [address, setAddress] = useState<string | null>(null);
  const [web3Modal, setWeb3Modal] = useState<Web3Modal | null>(null);

  useEffect(() => {
    if (window.ethereum) {
      console.log('MetaMask is installed');
    } else {
      console.error('MetaMask not detected');
      alert('Please install MetaMask to use this application.');
    }

    // Initialize Web3Modal
    const web3ModalInstance = new Web3Modal({
      cacheProvider: true,
      providerOptions,
    });
    setWeb3Modal(web3ModalInstance);

    // Reconnect if already connected
    if (web3ModalInstance.cachedProvider) {
      connectWallet(web3ModalInstance);
    }
  }, []);

  const connectWallet = async (web3ModalInstance: Web3Modal) => {
    try {
      const web3ModalProvider = await web3ModalInstance.connect();
      const provider = new ethers.providers.Web3Provider(web3ModalProvider);
      const signer = provider.getSigner();
      const userAddress = await signer.getAddress();

      setLocalProvider(provider);
      setLocalSigner(signer);
      setAddress(userAddress);

      // Pass provider and signer to parent
      setProvider(provider, signer);
    } catch (error) {
      console.log(error);
    }
  };

  const disconnectWallet = () => {
    web3Modal?.clearCachedProvider();
    setLocalProvider(null);
    setLocalSigner(null);
    setAddress(null);
    setProvider(null, null);
  };

  return (
    <div>
      {address ? (
        <>
          <p>Connected Address: {address}</p>
          <button onClick={disconnectWallet}>Disconnect Wallet</button>
        </>
      ) : (
        <button onClick={() => connectWallet(web3Modal!)}>Connect Wallet</button>
      )}
    </div>
  );
};

export default WalletButton;