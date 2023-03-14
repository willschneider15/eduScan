import type { GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { Link as ScrollLink} from 'react-scroll';
import Header from '../components/header'
import Footer from '../components/footer'
import Events from '../components/events'
import groq from 'groq'
import { getClient } from "../lib/sanity.server"
import Link from 'next/link';

const Home: NextPage < { upcoming: any[], previous : any[] }> = ({ upcoming, previous }) => {


  return (
    <>

      <div className='bg-zinc-50 px-10'>
            <div className="justify-between mx-auto flex min-h-screen max-w-7xl flex-col">
                  
              <Head>
                <title> eduScan | Home </title>
                <link rel="icon" href="/eduScan.png" />
              </Head>
            
              <Header/>             

              <main className="flex flex-col w-full flex-1 items-center justify-center px-20 text-center my-40 md:my-60">
                <div className="flex w-full flex-row items-center justify-center">
                  <h1 className="flex flex-col text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-700 to-teal-400 pb-3">
                  Connecting Universities to Web3
                  </h1>
                </div>
                <h2 className="text-black pt-3 font-medium">
                  powered by <img className="inline-block" src="/sol.png" alt="Solana Logo" width={150} height={150} />
                </h2>
               

              </main>


             
              <div id="events" className="flex flex-col gap-5">


                  <h2 className="text-purple-700 font-bold text-2xl">Upcoming Events</h2>
            
                  <Events posts={upcoming}/>

                  
                  <h2 className="text-purple-700 font-bold text-2xl pt-10">Previous Events</h2>
            
                  <Events posts={previous}/>

                  

              </div>

              <div id="partners" className=''>
                <h2 className="text-purple-700 font-bold text-2xl py-10">Partners</h2>
                <div className='m-auto'>
                  <div className='grid w-full grid-cols-2 gap-2 md:grid-cols-3 '>
                    <div className="grid grid-cols-1 items-center  justify-around gap-6 rounded-xl  py-8 px-8 
                border p-6 shadow-xl text-center bg-purple-300">
                      <img className="w-5/6 md:w-1/2 m-auto" src='./partners/spawn.svg'/>
                    </div>
                  <div className="grid grid-cols-1 items-center justify-around gap-6 rounded-xl  py-8 px-8 
                border p-6 shadow-xl text-center bg-purple-300">
                      <img className="w-5/6 md:w-1/2 m-auto" src='./partners/underdog.svg'/>
                    </div>
                    <div className="grid grid-cols-1 items-center justify-around gap-6 rounded-xl  py-8 px-8 
                border p-6 shadow-xl text-center bg-purple-300">
                      <img className="w-5/6 md:w-1/2 m-auto" src='./partners/backpack.svg'/>
                    </div>
                    <div className="grid grid-cols-1 items-center justify-around gap-6 rounded-xl  py-8 px-8 
                border p-6 shadow-xl text-center bg-purple-300">
                      <img className="w-5/6 md:w-1/2 m-auto" src='./gum.svg'/>
                    </div>
                    <div className="grid grid-cols-1 items-center justify-around gap-6 rounded-xl  py-8 px-8 
                border p-6 shadow-xl text-center bg-purple-300">
                      <img className="w-5/6 md:w-1/2 m-auto" src='./partners/uba.png'/>
                    </div>
                    <div className="grid grid-cols-1 items-center justify-around gap-6 rounded-xl  py-8 px-8 
                border p-6 shadow-xl text-center bg-purple-300">
                      <img className="w-5/6 md:w-1/2 m-auto" src='./partners/ohio-state.webp'/>
                    </div>
                    <div className="grid grid-cols-1 items-center justify-around gap-6 rounded-xl  py-8 px-8 
                border p-6 shadow-xl text-center bg-purple-300">
                      <img className="w-5/6 md:w-1/2 m-auto" src='./partners/cpp.png'/>
                    </div>
                    <div className="grid grid-cols-1 items-center justify-around gap-6 rounded-xl  py-8 px-8 
                border p-6 shadow-xl text-center bg-purple-300">
                      <img className="w-5/6 md:w-1/2 m-auto" src='./partners/nyit.png'/>
                    </div>
                    <div className="grid grid-cols-1 items-center justify-around gap-6 rounded-xl  py-8 px-8 
                border p-6 shadow-xl text-center bg-purple-300">
                      <img className="w-5/6 md:w-1/2 m-auto" src='./partners/texas.png'/>
                    </div>
                    <div className="grid grid-cols-1 items-center justify-around gap-6 rounded-xl  py-8 px-8 
                border p-6 shadow-xl text-center bg-purple-300">
                      <img className="w-5/6 md:w-1/2 m-auto" src='./partners/michigan.webp'/>
                    </div>
                    
                  </div>

                </div>
                
                
              </div>
              
              <Footer/>
              
            </div>
            
          </div>
    </>
    
    
  )
}
export const getStaticProps = async ({ preview = false }) => {

  const upcoming = await getClient(preview).fetch(groq`
    *[_type == "post" && endDate > now()] | order(startDate asc) {
     _id,
     title,
     host,
     location,
     link,
     startDate,endDate,
     "username": author->username,
     "categories": categories[]->{id, title},
     "authorImage": author->avatar,
     blurb,
     body,
     mainImage,
     slug,
     publishedAt
     }`)
     
  const previous = await getClient(preview).fetch(groq`
    *[_type == "post" && endDate < now()] | order(startDate asc) {
     _id,
     title,
     host,
     location,
     link,
     startDate,endDate,
     "username": author->username,
     "categories": categories[]->{id, title},
     "authorImage": author->avatar,
     blurb,
     body,
     mainImage,
     slug,
     publishedAt
     }`)
  return {
    props: {
      upcoming,
      previous,
    },
    revalidate: 10,
  }
}


export default Home;