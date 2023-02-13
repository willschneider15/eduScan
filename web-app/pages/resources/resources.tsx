import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'


const Resources: NextPage = () => {

    return (
        
    <div className="font-mont bg-[#f0f0fb]">

      <Head>  
        <title> eduScan | Resources </title>
        <link rel="icon" href="/eduScan.png" />
      </Head>

      <nav className="relative container mx-auto p-6">
        <div className="flex items-center justify-between">

        <a href="/">
          <Image className="pt-1" src="/eduScan-no-bg.svg" alt="eduScan Logo" width={220} height={250}/>
        </a>
        {/*
            header 
        */}
        <div className="hidden space-x-6 md:flex text-black">
        {/*
            needs to be refactored to use next/link 
        */}
          <a href=""className="hover:text-purple-700 font-bold text-xl bg-clip-text bg-black p-3"> Jobs </a> 
          <a href="/resources"className="hover:text-purple-700 font-bold text-xl bg-clip-text bg-black p-3"> Resources </a>
          <a href=""className="hover:text-purple-700 font-bold text-xl bg-clip-text bg-black p-3"> Settings </a>
        </div>
        {/*
            button 
        */}
        <a href="" className="hidden p-2 px-5 pt-3 text-white hover:font-bold bg-purple-700 rounded-[16px] baseline bg-gradient-to-r from-purple-700 to-teal-400 md:block"
        >
          Get Started
        </a>
      </div>
        
    </nav>

    <main className="flex flex-row w-full flex-1 items-center justify-center px-20 text-center my-60">
        
        <div className="w-full items-center justify-center">
        <h2 className="text-purple-700 font-bold text-3xl mb-10">
        Documents
        </h2>

        <ul id="documents" className="text-black">
        
        <li className="my-4 text-xl">
            <a
            className="hover:text-purple-700"
            href="https://spl.solana.com/"
            target="_blank"
            rel="noopener noreferrer"> 
            Introduction to Solana Program Library </a>
        </li>

        <li className="my-4 text-xl">
            <a
            className="hover:text-purple-700"
            href="https://doc.rust-lang.org/book/title-page.html"
            target="_blank"
            rel="noopener noreferrer"> 
            The Rust Programming Language </a>
        </li>

        <li className="my-4 text-xl">
        <a
            className="hover:text-purple-700"
            href="https://www.anchor-lang.com/"
            target="_blank"
            rel="noopener noreferrer"> 
            Introduction to the Anchor Framework </a>
        </li>

        <li className="my-4 text-xl">
        <a
            className="hover:text-purple-700"
            href="https://solanacookbook.com/"
            target="_blank"
            rel="noopener noreferrer"> 
            The Solana Cookbook </a>
        </li>

        <li className="my-4 text-xl">
        <a
            className="hover:text-purple-700"
            href="https://docs.xnfts.dev/getting-started/getting-started"
            target="_blank"
            rel="noopener noreferrer"> 
            Building your first xNFT </a>
        </li>

                
        </ul>

        </div>

        <div className="w-full items-center justify-center">
        <h2 className="text-purple-700 font-bold text-3xl mb-10">
            Videos
        </h2>

        <ul id="videos" className="text-black">

        <li className="my-4 text-xl">        
        <a
            className="hover:text-purple-700"
            href="https://www.youtube.com/watch?v=1jzROE6EhxM"
            target="_blank"
            rel="noopener noreferrer"> 
            What is Solana? </a>
        </li>

        <li className="my-4 text-xl">        
        <a
            className="hover:text-purple-700"
            href="https://www.youtube.com/playlist?list=PLilwLeBwGuK4k6nrPXilUASArEF46LHOd"
            target="_blank"
            rel="noopener noreferrer"> 
            Getting Started on Solana (3 videos)</a>
        </li>

        <li className="my-4 text-xl">
            <a
            className="hover:text-purple-700"
            href="https://www.youtube.com/watch?v=pNzT3hgFbpg"
            target="_blank"
            rel="noopener noreferrer"> 
            Learn the Solana CLI </a>

        </li>

        <li className="my-4 text-xl">
            <a
            className="hover:text-purple-700"
            href="https://www.youtube.com/playlist?list=PLilwLeBwGuK4k6nrPXilUASArEF46LHOd"
            target="_blank"
            rel="noopener noreferrer"> 
            Solana Bytes (12 videos)</a>

        </li>

        <li className="my-4 text-xl">
            <a
            className="hover:text-purple-700"
            href="https://www.youtube.com/playlist?list=PLUBKxx7QjtVnU3hkPc8GF1Jh4DE7cf4n1"
            target="_blank"
            rel="noopener noreferrer"> 
            Rust Solana Tutorial (10 videos)</a>

        </li>
          
        </ul>

        </div>

        <div className="w-full items-center justify-center">
        <h2 className="text-purple-700 font-bold text-3xl mb-10">
            Others
        </h2>

        <ul id="others" className="text-black">
        <li className="my-4 text-xl">
            <a
            className="hover:text-purple-700"
            href="https://soldev.app/course"
            target="_blank"
            rel="noopener noreferrer"> 
            Solana Development Course </a>

        </li>

        <li className="my-4 text-xl">
            <a
            className="hover:text-purple-700"
            href="https://beta.solpg.io/"
            target="_blank"
            rel="noopener noreferrer"> 
            Solana Playground </a>

        </li>    

        <li className="my-4 text-xl">
            <a
            className="hover:text-purple-700"
            href="https://solana.stackexchange.com/"
            target="_blank"
            rel="noopener noreferrer"> 
            Solana Stack Exchange (Stack Overflow for Solana) </a>

        </li> 

         <li className="my-4 text-xl">
            <a
            className="hover:text-purple-700"
            href="https://docs.clockwork.xyz/about/readme"
            target="_blank"
            rel="noopener noreferrer"> 
            Introduction to Clockwork (Smart Contract Automation) </a>

        </li>   

        <li className="my-4 text-xl">
            <a
            className="hover:text-purple-700"
            href="https://docs.gum.fun/"
            target="_blank"
            rel="noopener noreferrer"> 
            Build your own decentralized social media protocol on Solana </a>

        </li>

        </ul>

        </div>

    </main>

    <footer className="flex h-24 w-full items-center justify-between">

        <div className="flex flex-col px-80">
            <a
            className="flex gap-2"
            href="/"
            >
            <Image className="object-contain  " src="/eduscan_black.png" alt="eduScan Logo" width={150} height={100}/>
            </a>


        </div>

        <div className="flex flex-row px-80 space-x-6">

            <a
            className="flex items-center justify-center gap-2 px-1"
            href="https://twitter.com/eduscan_xyz"
            target="_blank"
            rel="noopener noreferrer"
            >
            <Image className="hover:scale-125" src="/twitter.png" alt="Twitter Logo" width={40} height={40} />
            </a>

            <a
            className="flex items-center justify-center gap-2 px-1"
            href="https://discord.gg/U4gbtPU5"
            target="_blank"
            rel="noopener noreferrer"
            >
            <Image className="hover:scale-125" src="/discord.png" alt="Discord Logo" width={40} height={40} />
            </a>

            <a
            className="flex items-center justify-center gap-2 px-1"
            href="https://medium.com/@eduScan.xyz"
            target="_blank"
            rel="noopener noreferrer"
            >
            <Image className="hover:scale-125" src="/medium.png" alt="Medium Logo" width={40} height={40} />
            </a>

        </div>

    </footer>

    </div>

    );

}

export default Resources