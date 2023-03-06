import { memo, useState, useMemo } from 'react';
import Image from 'next/image';
import Link from "next/link";
import CreateUser from "./createUser";
import dynamic from 'next/dynamic'
import { AnchorWallet, useAnchorWallet, useWallet } from '@solana/wallet-adapter-react'
import { PublicKey, Connection } from "@solana/web3.js";
import { useGumSDK } from '../hooks/useGumSDK';

const WalletMultiButtonDynamic = dynamic(
    async () => (await import('@solana/wallet-adapter-react-ui')).WalletMultiButton,
    { ssr: false }
);


function header() {
    const [active, setActive] = useState(false);

    const wallet = useWallet();
    const userPublicKey = wallet?.publicKey as PublicKey;
    const connection = useMemo(() => new Connection("https://api.devnet.solana.com", "confirmed"), []);
    const sdk = useGumSDK(connection, { preflightCommitment: "confirmed" }, "devnet");

    const handleClick = () => {
        setActive(!active);
    };
    return(
        <nav className="flex items-center flex-wrap pb-10 pt-2  max-w-7xl ">
            <div className='relative flex h-16 items-center justify-between'>
                <Link
                    className="flex items-center gap-4 lg:px-0"
                    href="/"
                >
                    <div className='flex'>
                        <Image className="" src="/eduScan-no-bg.svg" alt="eduScan Logo" width={200} height={200}/>
                    </div>
                    
                </Link>
            </div>
            <button
            className='inline-flex p-3 bg-purple-700 hover:bg-purple-800 rounded lg:hidden text-white ml-auto hover:text-white outline-none'
            onClick={handleClick}
            >
                <svg
                    className='w-6 h-6'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'
                    xmlns='http://www.w3.org/2000/svg'
                >
                    <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M4 6h16M4 12h16M4 18h16'
                    />
                </svg>
            </button>
            {/*Note that in this div we will use a ternary operator to decide whether or not to display the content of the div  */}
            <div
            className={`${
                active ? '' : 'hidden'
            }   w-full lg:inline-flex lg:flex-grow lg:w-auto md:pt-0 mt-4 bg-zinc-300 md:bg-zinc-50 p-4 rounded-xl `}
            >
                <div className='lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start  flex flex-col lg:h-auto pt-2'>
                    
                    <Link href="/leadership">
                        <h1 className="font-medium text-black hover:text-purple-700 transition-in duration-500 ease-out 
                      border-b-2 border-transparent hover:border-purple-700 px-3 mr-6 mb-3 md:mb-0">
                            Leadership
                        </h1>
                    </Link>
                    <Link href="https://medium.com/@eduScan.xyz/introducing-eduscan-blockchain-networking-for-higher-education-e58d05ddd35b"
                        target="_blank"
                        rel="noopener noreferrer">
                        <h1 className="font-medium text-black hover:text-purple-700 transition-in duration-500 ease-out 
                      border-b-2 border-transparent hover:border-purple-700 px-3 mr-6 mb-3 md:mb-0">
                            About
                        </h1>
                    </Link>
                    { sdk && (
                        <div className='bg-purple-700 text-white rounded-xl font-medium'>
                            <WalletMultiButtonDynamic  />
                        </div>
                   
                    )}
                </div>
            </div>

        </nav>
    );
}


export default memo(header);