import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'



const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2 font-mont">
      <Head>
        <title> eduScan | Home </title>
        <link rel="icon" href="/eduScan.png" />
      </Head>
    

      <nav className="flex h-24 w-full items-center border-b justify-between">
        <a
          className="flex px-60 gap-2"
          href="https://twitter.com/eduscan_xyz"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image className="object-contain " src="/eduScan-no-bg.svg" alt="Vercel Logo" width={250} height={250} />
        </a>

        <div className="flex px-60 gap-2">
          
          <button className="text-xl hover:text-purple-700 transition-in duration-500 ease-out 
            border-b-2 border-transparent hover:border-purple-700 px-3"> Messages </button>
          <button className="text-xl hover:text-purple-700 transition-in duration-500 ease-out 
            border-b-2 border-transparent hover:border-purple-700 px-3"> Profile </button>
          <button className="text-xl hover:text-purple-700 transition-in duration-500 ease-out 
            border-b-2 border-transparent hover:border-purple-700 px-3"> Settings </button>
        </div>

    </nav>

      <main className="flex w-full flex-1 items-center justify-center px-20 text-center my-60">
        
        <div className="flex w-full flex-row items-center justify-center">
        
        <h1 className="flex flex-col text-5xl text-purple-700 font-bold">
        Stay Connected with the Crypto Community on Campus and Beyond
        
        <h2 className="text-black mt-3 text-2xl">
        powered by <img className="inline-block" src="/sol.png" alt="Solana Logo" width={150} height={150} />
        </h2>

        </h1>
        
        </div>
        
      </main>

      <div id="events" className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center my-60">
      
      <div>
      <h2 className="text-purple-700 mt-3 text-4xl">
        Events
        </h2>
      </div>
      
      <div className="mt-6 flex max-w-4xl flex-wrap items-center justify-around sm:w-full">
          <a
            href="https://nextjs.org/docs"
            className="mt-6 w-96 rounded-xl border p-6 my-20 text-center hover:text-purple-700 focus:text-blue-600 shadow-xl"
          >
            <h3 className="text-2xl font-bold">Event 1</h3>
            <p className="mt-4 text-xl">
              What is Blockchain?
            </p>
          </a>

          <a
            href="https://nextjs.org/learn"
            className="mt-6 w-96 rounded-xl border p-6 my-20 text-center hover:text-purple-700 focus:text-blue-600 shadow-xl"
          >
            <h3 className="text-2xl font-bold">Event 2</h3>
            <p className="mt-4 text-xl">
              Tools and Technologies in Web3 Development
            </p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/canary/examples"
            className="mt-6 w-96 rounded-xl border p-6 my-20 text-center hover:text-purple-700 focus:text-blue-600 shadow-xl"
          >
            <h3 className="text-2xl font-bold">Event 3 </h3>
            <p className="mt-4 text-xl">
              Are NFT's worth getting into? Find out tomorrow at 3:30 pm
            </p>
          </a>

          <a
            href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className="mt-6 w-96 rounded-xl border p-6 my-20 text-center hover:text-purple-700 focus:text-blue-600 shadow-xl"
          >
            <h3 className="text-2xl font-bold">Event 4</h3>
            <p className="mt-4 text-xl">
              Interested in a Solana Hackathon? Come to the interest session on Friday! 
            </p>
          </a>
        </div>
      </div>

      <footer className="flex h-24 w-full items-center justify-center border-t">
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

      </footer>
    </div>
  )
}

export default Home
