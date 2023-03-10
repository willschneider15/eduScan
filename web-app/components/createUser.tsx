import React from 'react';
import styles from '../styles/Home.module.css'
import { PublicKey } from '@solana/web3.js';
import { useWallet } from '@solana/wallet-adapter-react';
import { SDK } from '@gumhq/react-sdk';
import { useCreateUser} from "../hooks/useCreateUsers";

interface Props {
  sdk: SDK;
}

// Use this function if you want to create a user without using the react-sdk
export const handleCreateUser = async (
  user: PublicKey,
  sdk: SDK
) => {
  const program = await sdk.user.create(user);
  await program.instructionMethodBuilder.rpc();
};

const CreateUser = ({sdk}: Props) => {
  const wallet = useWallet();
  const { create, userPDA} = useCreateUser(sdk);

  return (
    <div>
      <h1 className={`${styles.title}`}>Create New User</h1>
      <button
        className="bg-purple-700 text-white font-bold text-xl text-center h-auto m-auto border rounded-xl py-4 px-10"
        onClick={(event) => {
          event.preventDefault();
          create(wallet.publicKey as PublicKey);
        }}
      >
        Create User
      </button>
    </div>
  );
};

export default CreateUser;
