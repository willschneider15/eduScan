import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { Link as ScrollLink} from 'react-scroll';
import Header from '../../../components/header'
import Footer from '../../../components/footer'
import CountDown from '../../../components/countdown-timer'
import { useState } from 'react';

const Ottersec: NextPage = () => {




  return (
    <>

      <div className='bg-zinc-50 px-10'>
            <div className="justify-between mx-auto flex min-h-screen max-w-7xl flex-col">
                  
                <Head>
                <title> eduScan | OtterSec </title>
                <link rel="icon" href="/eduScan.png" />
                </Head>
            
                <Header/>
                
                <h1 className="text-purple-700 font-bold text-xl pt-10 md:text-4xl">
                    Blockchain Security Talk With OtterSec
                </h1>
                <h2 className='text-purple-700 text-l md:text-3xl'>
                    Hosted By: Ohio State
                </h2>
              <main className="flex flex-col w-full flex-1 items-center justify-center md:px-20 text-center my-10 ">
                
                <div className="flex w-full flex-row items-center justify-center">
                    <div className='image_container md:w-4/6 lg:w-3/6 w-full border shadow-xl'>
                     <Image className="image" src="/events/ottersec.png" alt="ottersec" layout="fill" />
                   </div>
                </div>
               
              </main>


              <div className="grid w-full grid-cols-1 gap-10 md:grid-cols-2">
                <h2 className=" font-bold text-xl text-center">
                    Time: Febuary 20th @7:30PM EST
                </h2>

                <h2 className=" font-bold text-xl text-center">
                    Location: ZOOM
                </h2>
                
             </div>

             <div className='grid w-full grid-cols-1 gap-10 md:grid-cols-2 my-10'>
                <CountDown date="2/20/2023 19:30:00"/>
                <a href="https://osu.zoom.us/j/9068957286?pwd=bkhtRlNxL3E3SnZCTU1oSFNHcHJNQT09" className='font-bold text-xl text-center btn btn-primary h-auto border shadow-xl'>
                    Enter Event
                </a>
             </div>


            <div>
                <h2 className='text-purple-700 text-2xl md:text-3xl py-10 font-bold'>
                    About The Event: 
                </h2>
                <p className='text-black'>
                 Robert Chen specializes in sandbox research and web pentesting. He founded OtterSec which is a Security Audits company. His clients have included and are not limited to Solana Foundation, Aptos, and Layer Zero.
                 <br/>
                 <br/>
                 He will be speaking on the importance of blockchain security and his experiences in the space.
                 <br/>
                 <br/>
                 This virtual event is hosted by the Ohio State Blockchain club and is open to the public.
                 <br/>
                 <br/>
                 Robert: <a className="text-purple-700 underline" href="https://robertchen.cc/">https://robertchen.cc/</a>
                 <br/>
                 OtterSec: <a className="text-purple-700 underline" href="https://osec.io/">https://osec.io/</a>
                 <br/>
                 Ohio State Blockchain Club: <a className="text-purple-700 underline" href="https://activities.osu.edu/involvement/student_organizations/find_a_student_org?i=7664885a-ea59-4af4-a36e-5e5d6f9542b6&l=C&c=Columbus&page=10">Ohio State Club Website</a>
                </p>

            </div>

            
            
              
              <Footer/>
            </div>
            
          </div>
    </>
    
    
  )
}

export default Ottersec