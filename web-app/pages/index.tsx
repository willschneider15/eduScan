import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { Link as ScrollLink} from 'react-scroll';

const Home: NextPage = () => {

  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2 font-mont bg-white">
      
      <Head>
        <title> eduScan | Home </title>
        <link rel="icon" href="/eduScan.png" />
      </Head>
    

      <nav className="flex h-24 w-full items-center justify-between">
        <a
          className="flex px-60 gap-2"
          href="/"
        >
          <Image className="object-contain" src="/eduScan-no-bg.svg" alt="eduScan Logo" width={200} height={200}/>
        </a>

        <div className="flex px-60 gap-2">

        <ScrollLink
                href="/"
                to="events" smooth={true} duration={500}                
                className="text-xl text-black hover:text-purple-700 transition-in duration-1000 ease-out 
                border-b-2 border-transparent hover:border-purple-700 px-3">
                
                  Events
                
              </ScrollLink>
          
          <button className="text-xl text-black hover:text-purple-700 transition-in duration-1000 ease-out 
            border-b-2 border-transparent hover:border-purple-700 px-3"> Jobs </button>
          <button className="text-xl text-black hover:text-purple-700 transition-in duration-1000 ease-out 
            border-b-2 border-transparent hover:border-purple-700 px-3"> Profile </button>
          <button className="text-xl text-black hover:text-purple-700 transition-in duration-1000 ease-out 
            border-b-2 border-transparent hover:border-purple-700 px-3"> Settings </button>
        </div>

    </nav>

      <main className="flex flex-col w-full flex-1 items-center justify-center px-20 text-center my-60">
        
        <div className="flex w-full flex-row items-center justify-center">
        
        <h1 className="flex flex-col text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-700 to-teal-400">
        Stay Connected with the Crypto Community on Campus and Beyond
        
        <h2 className="text-black mt-3 text-2xl">
        powered by <img className="inline-block" src="/sol.png" alt="Solana Logo" width={150} height={150} />
        </h2>

        </h1>
        
        </div>

      </main>

      <div id="events" className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center my-40">

      <h2 className="text-purple-700 font-bold text-4xl mb-20">
        Events
        </h2>

      
      <div className="flex max-w-4xl flex-wrap items-center justify-around sm:w-full">

      <a
            href="https://www.outeredge.live/"
            className="flex flex-row mt-0 w-30 rounded-xl border p-6 my-20 text-center hover:text-purple-700 focus:text-blue-600 shadow-xl"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div>
            <h3 className="text-2xl font-bold">NFT LA</h3>
            <p className="mt-4 text-xl">
            For four days on March 20-23, 2023 get connected, co-create and experience the Web3 and NFT Community with thousands of the world's leaders, 
            investors, brands, enthusiasts, and experts at NFT LA — an event like no other.
            </p>
            </div>

            <Image className="object-contain flex flex-row" src="/nftLA.png" alt="eduScan Logo" width={200} height={200}/>
          </a>

          <a
            href="https://www.outeredge.live/"
            className="flex flex-row mt-0 w-30 rounded-xl border p-6 my-20 text-center hover:text-purple-700 focus:text-blue-600 shadow-xl"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div>
            <h3 className="text-2xl font-bold">NFT LA</h3>
            <p className="mt-4 text-xl">
            For four days on March 20-23, 2023 get connected, co-create and experience the Web3 and NFT Community with thousands of the world's leaders, 
            investors, brands, enthusiasts, and experts at NFT LA — an event like no other.
            </p>
            </div>

            <Image className="object-contain flex flex-row" src="/nftLA.png" alt="eduScan Logo" width={200} height={200}/>
          </a>

          <a
            href="https://www.outeredge.live/"
            className="flex flex-row mt-0 w-30 rounded-xl border p-6 my-20 text-center hover:text-purple-700 focus:text-blue-600 shadow-xl"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div>
            <h3 className="text-2xl font-bold">NFT LA</h3>
            <p className="mt-4 text-xl">
            For four days on March 20-23, 2023 get connected, co-create and experience the Web3 and NFT Community with thousands of the world's leaders, 
            investors, brands, enthusiasts, and experts at NFT LA — an event like no other.
            </p>
            </div>

            <Image className="object-contain flex flex-row" src="/nftLA.png" alt="eduScan Logo" width={200} height={200}/>
          </a>

          <a
            href="https://www.outeredge.live/"
            className="flex flex-row mt-0 w-30 rounded-xl border p-6 my-20 text-center hover:text-purple-700 focus:text-blue-600 shadow-xl"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div>
            <h3 className="text-2xl font-bold">NFT LA</h3>
            <p className="mt-4 text-xl">
            For four days on March 20-23, 2023 get connected, co-create and experience the Web3 and NFT Community with thousands of the world's leaders, 
            investors, brands, enthusiasts, and experts at NFT LA — an event like no other.
            </p>
            </div>

            <Image className="object-contain flex flex-row" src="/nftLA.png" alt="eduScan Logo" width={200} height={200}/>
          </a>

      </div>

      </div>

      <footer className="flex h-24 w-full items-center justify-between">

        <div className="flex flex-col px-60">
        <a
          className="flex gap-2"
          href="/"
        >
          <Image className="object-contain" src="/eduScan_black.png" alt="eduScan Logo" width={200} height={200}/>
        </a>

        <h2 className="text-black font-bold mt-3 text-1xl">
        Built by Chads
        </h2>

        </div>

        <div className="flex flex-row px-60">

        <a
          className="flex items-center justify-center gap-2 px-5"
          href="https://twitter.com/eduscan_xyz"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image className="hover:scale-125" src="/twitter.png" alt="Twitter Logo" width={40} height={40} />
        </a>

        <a
          className="flex items-center justify-center gap-2 px-5"
          href="https://discord.gg/U4gbtPU5"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image className="hover:scale-125" src="/discord.png" alt="Discord Logo" width={40} height={40} />
        </a>

        <a
          className="flex items-center justify-center gap-2 px-5"
          href="https://medium.com/@eduScan.xyz"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image className="hover:scale-125" src="/medium.png" alt="Medium Logo" width={40} height={40} />
        </a>

        </div>

      </footer>
    </div>
  )
}

export default Home
