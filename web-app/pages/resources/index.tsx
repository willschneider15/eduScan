import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Header from '../../components/header'
import Footer from '../../components/footer'


const Resources: NextPage = () => {

    return (
        
    <div className='bg-zinc-50 px-10'>
        <div className="justify-between mx-auto flex min-h-screen max-w-7xl flex-col">

      <Head>  
        <title> eduScan | Resources </title>
        <link rel="icon" href="/eduScan.png" />
      </Head>
        
    <Header/>


    <main className="grid w-full grid-cols-1 gap-10 md:grid-cols-2">

   
        
    <div className="grid grid-cols-1 items-center justify-around  rounded-xl  py-8 px-8 
                border p-6 shadow-xl text-center hover:bg-purple-300 hover:translate-x-2 hover:translate-y-2 transition-all duration-300 group">

        <h2 className="text-purple-700 font-bold text-3xl mb-10 group-hover:text-black">
            Documentations 📚
        </h2>

        <ul id="documents" className="text-black">
            
            <li className="my-4 text-xl">
                <a
                className="hover:text-white"
                href="https://spl.solana.com/"
                target="_blank"
                rel="noopener noreferrer"> 
                Introduction to Solana Program Library </a>
            </li>

            <li className="my-4 text-xl">
                <a
                className="hover:text-white"
                href="https://doc.rust-lang.org/book/title-page.html"
                target="_blank"
                rel="noopener noreferrer"> 
                The Rust Programming Language </a>
            </li>

            <li className="my-4 text-xl">
            <a
                className="hover:text-white"
                href="https://www.anchor-lang.com/"
                target="_blank"
                rel="noopener noreferrer"> 
                Introduction to the Anchor Framework </a>
            </li>

            <li className="my-4 text-xl">
            <a
                className="hover:text-white"
                href="https://solanacookbook.com/"
                target="_blank"
                rel="noopener noreferrer"> 
                The Solana Cookbook </a>
            </li>

            <li className="my-4 text-xl">
            <a
                className="hover:text-white"
                href="https://docs.xnfts.dev/getting-started/getting-started"
                target="_blank"
                rel="noopener noreferrer"> 
                Build your first xNFT </a>
            </li>

                    
        </ul>

    </div>

        <div className="grid grid-cols-1 items-center justify-around  rounded-xl  py-8 px-8 
                border p-6 shadow-xl text-center hover:bg-purple-300 hover:translate-x-2 hover:translate-y-2 transition-all duration-300 group">
        
        <h2 className="text-purple-700 font-bold text-3xl mb-10 group-hover:text-black">
            Videos 📹
        </h2>

        <ul id="videos" className="text-black">

        <li className="my-4 text-xl">        
        <a
            className="hover:text-white"
            href="https://www.youtube.com/watch?v=1jzROE6EhxM"
            target="_blank"
            rel="noopener noreferrer"> 
            What is Solana? </a>
        </li>

        <li className="my-4 text-xl">        
        <a
            className="hover:text-white"
            href="https://www.youtube.com/playlist?list=PLilwLeBwGuK4k6nrPXilUASArEF46LHOd"
            target="_blank"
            rel="noopener noreferrer"> 
            Getting Started on Solana | 3 Episodes</a>
        </li>

        <li className="my-4 text-xl">
            <a
            className="hover:text-white"
            href="https://www.youtube.com/watch?v=pNzT3hgFbpg"
            target="_blank"
            rel="noopener noreferrer"> 
            Learn the Solana CLI </a>

        </li>

        <li className="my-4 text-xl">
            <a
            className="hover:text-white"
            href="https://www.youtube.com/playlist?list=PLilwLeBwGuK4k6nrPXilUASArEF46LHOd"
            target="_blank"
            rel="noopener noreferrer"> 
            Solana Bytes | 12 Episodes</a>

        </li>

        <li className="my-4 text-xl">
            <a
            className="hover:text-white"
            href="https://www.youtube.com/playlist?list=PLUBKxx7QjtVnU3hkPc8GF1Jh4DE7cf4n1"
            target="_blank"
            rel="noopener noreferrer"> 
            Rust Solana Tutorial | 10 Episodes</a>

        </li>
          
        </ul>

        </div>

        <div className="grid grid-cols-1 items-center justify-around  rounded-xl  py-8 px-8 
                border p-6 shadow-xl text-center hover:bg-purple-300 hover:translate-x-2 hover:translate-y-2 transition-all duration-300 group">
        
        <h2 className="text-purple-700 font-bold text-3xl mb-10 group-hover:text-black">
            Podcasts 🎙️
        </h2>

        <ul id="videos" className="text-black">

        <li className="my-4 text-xl">        
        <a
            className="hover:text-white"
            href="https://www.youtube.com/playlist?list=PLilwLeBwGuK4H0t-tYR3C1KQFGmyZLNMG"
            target="_blank"
            rel="noopener noreferrer"> 
            VALIDATED Podcast | 9 Episodes </a>
        </li>

        <li className="my-4 text-xl">        
        <a
            className="hover:text-white"
            href="https://www.youtube.com/watch?v=ZyIxWutfZ-U&t=1360s"
            target="_blank"
            rel="noopener noreferrer"> 
            Bankless Shows | Will Solana Make It With Anatoly Yakovenko</a>
        </li>

        <li className="my-4 text-xl">
            <a
            className="hover:text-white"
            href="https://www.youtube.com/watch?v=ZyIxWutfZ-U&t=1360s"
            target="_blank"
            rel="noopener noreferrer"> 
            NEAR Protocol | Sharding vs No Sharding Fireside Chat </a>

        </li>

        <li className="my-4 text-xl">
            <a
            className="hover:text-white"
            href="https://youtu.be/L7JmgQNdCE8"
            target="_blank"
            rel="noopener noreferrer"> 
            Coinbase | Building for the Future with Solana </a>

        </li>

        <li className="my-4 text-xl">
            <a
            className="hover:text-white"
            href="https://youtu.be/rKGhbC6Uync"
            target="_blank"
            rel="noopener noreferrer"> 
            NEAR Protocol | Whiteboard Series with NEAR </a>

        </li>
          
        </ul>

        </div>

        <div className="grid grid-cols-1 items-center justify-around  rounded-xl  py-8 px-8 
                border p-6 shadow-xl text-center hover:bg-purple-300 hover:translate-x-2 hover:translate-y-2 transition-all duration-300 group">
        <h2 className="text-purple-700 font-bold text-3xl mb-10 group-hover:text-black">
            More 🛸
        </h2>

        <ul id="others" className="text-black">
        <li className="my-4 text-xl">
            <a
            className="hover:text-white"
            href="https://soldev.app/course"
            target="_blank"
            rel="noopener noreferrer"> 
            Solana Development Course </a>

        </li>

        <li className="my-4 text-xl">
            <a
            className="hover:text-white"
            href="https://beta.solpg.io/"
            target="_blank"
            rel="noopener noreferrer"> 
            Solana Playground </a>

        </li>    

        <li className="my-4 text-xl">
            <a
            className="hover:text-white"
            href="https://solana.stackexchange.com/"
            target="_blank"
            rel="noopener noreferrer"> 
            Solana Stack Exchange | Stack Overflow for Solana </a>

        </li>  

        <li className="my-4 text-xl">
            <a
            className="hover:text-white"
            href="https://docs.gum.fun/"
            target="_blank"
            rel="noopener noreferrer"> 
            Build a decentralized social media protocol | Gum </a>

        </li>

        </ul>

        </div>

    </main>

    <Footer/>

    </div>

    </div> 

    );

}

export default Resources