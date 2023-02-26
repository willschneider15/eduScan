import Head from 'next/head'
import styles from '../../styles/Home.module.css'
import dynamic from 'next/dynamic'
import { AnchorWallet, useAnchorWallet, useWallet } from '@solana/wallet-adapter-react'
import { PublicKey, Connection } from "@solana/web3.js";
import { useEffect, useMemo, useState } from 'react';
import CreatePost from '../../components/createPost';
import CreateProfile from '../../components/createProfile';
import CreateUser from '../../components/createUser';
import { useGumSDK } from '../../hooks/useGumSDK';

const WalletMultiButtonDynamic = dynamic(
    async () => (await import('@solana/wallet-adapter-react-ui')).WalletMultiButton,
    { ssr: false }
);

export default function Home() {
  const wallet = useWallet();
  const userPublicKey = wallet?.publicKey as PublicKey;
  
  const [usersList, setUsersList] = useState<any[]>([]);
  const [profilesList, setProfilesList] = useState<any[]>([]);
  const [profileMetadataList, setProfileMetadataList] = useState<any[]>([]);
  const [postsList, setPostsList] = useState<any[]>([]);

  const connection = useMemo(() => new Connection("https://api.devnet.solana.com", "confirmed"), []);
  const sdk = useGumSDK(connection, { preflightCommitment: "confirmed" }, "devnet");

  useEffect(() => {
    if (!wallet.connected) return;
    if (!sdk) return;
    const getData = async () => {
        const profileMetadataList = await sdk.profileMetadata.getProfileMetadataAccountsByUser(userPublicKey);
        setUsersList(await sdk.user.getUserAccountsByUser(userPublicKey));
        setProfilesList(await sdk.profile.getProfileAccountsByUser(userPublicKey));
        setProfileMetadataList(profileMetadataList as any);
        setPostsList( await sdk.post.getPostAccountsByUser(userPublicKey));
    };
    getData();
  }, [wallet.connected]);

  return (
    <>
      <Head>
        <title></title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        { sdk && (
            <div className={styles.leftContainer}>
                <div className={styles.walletButtons}>
                    <WalletMultiButtonDynamic />
                </div>
                <div className={styles.componentContainer}>
                    <CreateUser sdk={sdk} />
                </div>
                <div className={styles.componentContainer}>
                    <CreateProfile sdk={sdk} />
                </div>
                <div className={styles.componentContainer}>
                    <CreatePost sdk={sdk} />
                </div>
            </div>
        )}
        <div className={styles.rightContainer}>
            <div className={styles.listContainer}>
                <h2 className={styles.title}>Your User Accounts</h2>
                    {usersList.map((user, index) => (
                        <div key={index} className={styles.userCard}>
                            <div className={styles.userNumber}>
                                {index + 1}
                            </div>
                            <div className={styles.userInfo}>
                                <p className={styles.userEmail}>User Account: {user.publicKey.toBase58()}</p>
                                <p className={styles.userAuthority}>Authority: {user.account.authority.toBase58()}</p>
                            </div>
                        </div>
                    ))}
            </div>
            <div className={styles.listContainer}>
            <h2 className={styles.title}>Your Profile Accounts</h2>
                {profilesList.map((user, index) => (
                    <div key={index} className={styles.userCard}>
                        <div className={styles.userNumber}>
                            {index + 1}
                        </div>
                        <div className={styles.userInfo}>
                            <p className={styles.userEmail}>Profile Account: {user.publicKey.toBase58()}</p>
                            <p className={styles.userAuthority}>User Account: {user.account.user.toBase58()}</p>
                            <p className={styles.userAuthority}>Namespace: {JSON.stringify(user.account.namespace)}</p>
                        </div>
                    </div>
                ))}
            </div>
            <div className={styles.listContainer}>
                <h2 className={styles.title}>Your Profile Metadata Accounts</h2>
                {profileMetadataList.map((user, index) => (
                    <div key={index} className={styles.userCard}>
                        <div className={styles.userNumber}>
                            {index + 1}
                        </div>
                        <div className={styles.userInfo}>
                            <p className={styles.userEmail}>Profile Metadata Account: {user[0].publicKey.toBase58()}</p>
                            <p className={styles.userAuthority}>Profile Account: {user[0].account.profile.toBase58()}</p>
                            <p className={styles.userAuthority}>MetadataUri: {JSON.stringify(user[0].account.metadataUri)}</p>
                        </div>
                    </div>
                ))}
            </div>
            <div className={styles.listContainer}>
                <h2 className={styles.title}>Your Post Accounts</h2>
                {postsList.map((user, index) => (
                    <div key={index} className={styles.userCard}>
                        <div className={styles.userNumber}>
                            {index + 1}
                        </div>
                        <div className={styles.userInfo}>
                            <p className={styles.userEmail}>Post Account: {user.publicKey.toBase58()}</p>
                            <p className={styles.userAuthority}>Profile Account: {user.account.profile.toBase58()}</p>
                            <p className={styles.userAuthority}>MetadataUri: {JSON.stringify(user.account.metadataUri)}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
      </main>
    </>
  )
}