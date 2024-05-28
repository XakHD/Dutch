import { buffer } from 'micro';
import Cors from 'micro-cors';
import { ethers } from 'ethers';
import abi from '@/contractABI';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: '2023-10-16',
});

const contractAddress = '0x321B29FeD4c7bEBfe564C5A1512d65A4a278d73F';

export const config = {
  api: {
    bodyParser: false,
  },
};

const cors = Cors({
  allowMethods: ['POST', 'HEAD'],
});

const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;

const handler = async (req, res) => {
  if (req.method === 'POST') {
    const buf = await buffer(req);
    const sig = req.headers['stripe-signature'];

    let event;

    try {
      event = stripe.webhooks.constructEvent(buf, sig, webhookSecret);
    } catch (err) {
      return res.status(400).send(`Webhook Error: ${err.message}`);
    }

    if (event.type === 'checkout.session.completed') {
      const session = event.data.object;

      const userAddress = session.client_reference_id; // Assuming you pass the user's address in client_reference_id

      try {
        await mintNFT(userAddress);
      } catch (err) {
        console.error('Error minting NFT:', err);
        return res.status(500).send('Internal Server Error');
      }
    }

    res.status(200).send('Success');
  } else {
    res.setHeader('Allow', 'POST');
    res.status(405).end('Method Not Allowed');
  }
};

const mintNFT = async (userAddress, amount = 1) => {
  if (!window.ethereum) throw new Error('No crypto wallet found');
  await window.ethereum.request({ method: 'eth_requestAccounts' });

  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const signer = provider.getSigner();
  const contract = new ethers.Contract(contractAddress, abi, signer);

  const tx = await contract.mint(amount);
  await tx.wait();
};

export default cors(handler);