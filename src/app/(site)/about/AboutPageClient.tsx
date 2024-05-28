// "use client";

// import React, { useState, useEffect } from 'react';
// import { useSession, signIn } from 'next-auth/react';
// import Breadcrumb from "@/components/Common/Breadcrumb";
// import NewsLatter from "@/components/Newslatter";
// import Video from "@/components/Video";
// import { ethers } from 'ethers';



// const AboutPageClient: React.FC = () => {
//   const [provider, setProvider] = useState<ethers.providers.Web3Provider | null>(null);
//   const [signer, setSigner] = useState<ethers.providers.JsonRpcSigner | null>(null);
//   const { data: session, status } = useSession();

//   useEffect(() => {
//     if (status === 'unauthenticated') {
//       signIn();
//     }
//   }, [status]);

//   if (status === 'loading') {
//     return <div>Loading...</div>; // You can add a loading spinner here
//   }

//   if (status === 'unauthenticated') {
//     return null;
//   }


//   const handleProviderChange = (newProvider: ethers.providers.Web3Provider | null, newSigner: ethers.providers.JsonRpcSigner | null) => {
//     setProvider(newProvider);
//     setSigner(newSigner);
//   };

//   return (
//     <>
//     <Breadcrumb
//       pageName="Dashboard"
//       description="Your Wallet is currently empty, this stores your nft and purchase packages"
//     />
//     <div className="py-16 md:py-20 lg:py-24">
//       <NewsLatter />
//     </div>
 
//   </>
//   );
// };

// export default AboutPageClient;
"use client";

import React, { useState, useEffect } from 'react';
import { useSession, signIn } from 'next-auth/react';
import Breadcrumb from "@/components/Common/Breadcrumb";
import NewsLatter from "@/components/Newslatter";
import { ethers } from 'ethers';
import WalletButton from "@/components/AboutStyleThree/index"; // Ensure correct import
import abi from "@/contractABI";

const AboutPageClient: React.FC = () => {
  const [provider, setProvider] = useState<ethers.providers.Web3Provider | null>(null);
  const [signer, setSigner] = useState<ethers.providers.JsonRpcSigner | null>(null);
  const [nfts, setNfts] = useState<string[]>([]);
  const { data: session, status } = useSession();

  useEffect(() => {
    if (status === 'unauthenticated') {
      signIn();
    }
  }, [status]);

  useEffect(() => {
    if (signer && provider) {
      loadOwnedNFTs();
    }
  }, [signer, provider]);

  if (status === 'loading') {
    return <div>Loading...</div>; // You can add a loading spinner here
  }

  if (status === 'unauthenticated') {
    return null;
  }

  const handleProviderChange = (newProvider: ethers.providers.Web3Provider | null, newSigner: ethers.providers.JsonRpcSigner | null) => {
    setProvider(newProvider);
    setSigner(newSigner);
  };

  const loadOwnedNFTs = async () => {
    if (!signer || !provider) return;
    try {
      const contract = new ethers.Contract('0x321B29FeD4c7bEBfe564C5A1512d65A4a278d73F', abi, signer);
      const address = await signer.getAddress();
      const balance = await contract.balanceOf(address);
      let ownedNfts = [];
      for (let i = 0; i < balance; i++) {
        const tokenId = await contract.tokenOfOwnerByIndex(address, i);
        const tokenURI = await contract.tokenURI(tokenId);
        const metadata = await fetch(tokenURI).then((response) => response.json());
        ownedNfts.push(metadata.image);
      }
      setNfts(ownedNfts);
    } catch (error) {
      console.error('Error loading NFTs:', error);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <Breadcrumb
        pageName="Dashboard"
        description="Your Wallet is currently empty, this stores your nft and purchase packages"
      />
      <WalletButton setProvider={handleProviderChange} /> {/* Pass setProvider */}
      <div className="flex justify-between items-start mt-4">
        <div>
          <h2 className="mt-4">Your NFTs</h2>
          <div className="flex flex-wrap">
            {nfts.map((nft, index) => (
              <img 
                key={index} 
                src={nft} 
                alt="NFT" 
                className="w-24 h-24 m-2"
              />
            ))}
          </div>
        </div>
      </div>
      <div className="py-16 md:py-20 lg:py-24">
        <NewsLatter />
      </div>
    </div>
  );
};

export default AboutPageClient;