import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { Link as ScrollLink} from 'react-scroll';
import Header from '../../components/header'
import Footer from '../../components/footer'
import { Profile, ProfileMetadata } from '@gumhq/ui-components';
import { useGumSDK } from '../../hooks/useGumSDK';
import { useEffect, useState, useMemo } from 'react';
import { useWallet } from '@solana/wallet-adapter-react'
import { PublicKey, Connection } from "@solana/web3.js";
import { request, gql } from 'graphql-request';

interface Metadata {
  name: string;
  bio: string;
  username: string;
  avatar: string;
}

interface GraphQLProfileMetadata {
  cl_pubkey: string;
  metadatauri: string;
  metadata: Metadata
  profile: string;
}

const Home: NextPage = () => {

  
  const wallet = useWallet();
  const userPublicKey = wallet?.publicKey as PublicKey;

  const [metadataContentList, setMetadataContentList] = useState<any[]>([]);
  const connection = useMemo(() => new Connection("https://api.devnet.solana.com", "confirmed"), []);
  const sdk = useGumSDK(connection, { preflightCommitment: "confirmed" }, "devnet");

  useEffect(() => {
    if (!wallet.connected) return;
    if (!sdk) return;
    const getData = async () => {
      const profileMetadatas= await sdk.profileMetadata.getProfileMetadataByUser(userPublicKey);
      const metadataContentList = profileMetadatas.map((profileMetadata: any) => {
      const { name, bio, username, avatar } = profileMetadata.metadata.data;
      return { name, bio, username, avatar };
     });
      setMetadataContentList(metadataContentList)

    };
    getData();
  }, [wallet.connected])
  
 


  const yourProfile: ProfileMetadata = metadataContentList.length > 0 ? {
    name: metadataContentList[0].name,
    bio: metadataContentList[0].bio,
    username: metadataContentList[0].username,
    following: 0,
    followers: 0,
    avatar: metadataContentList[0].avatar
    // connect: followData // Optional
  } : {
    name: "",
    bio: "",
    username: "",
    following: 0,
    followers: 0,
    avatar: ""
    // connect: followData // Optional
  };
    
  
  return (
    <>

      <div className='bg-zinc-50 px-10'>
            <div className="justify-between mx-auto flex min-h-screen max-w-7xl flex-col">
                  
              <Head>
                <title> eduScan | Home </title>
                <link rel="icon" href="/eduScan.png" />
              </Head>
            
              <Header/>
             <div className='m-auto flex-col space-y-2'>
                <div className='flex space-x-2 pb-10 '>
                    <img src='./gum.svg'/>
                    <h1 className="text-purple-700 font-bold text-xl text-center  md:text-4xl m-auto">
                     Your Profile
                    </h1>
                </div>
                
                <div className='m-auto '>
                  {wallet.connected ? (
                    <Profile data={yourProfile}/>
                  ) : (
                    <h2> Please Connect Your Wallet </h2>
                  )}  
                </div>
             </div>
              <Footer/>
            </div>
          </div>
    </>
    
    
  )
}

export default Home