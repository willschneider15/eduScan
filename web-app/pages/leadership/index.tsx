import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { Link as ScrollLink} from 'react-scroll';
import Header from '../../components/header'
import Footer from '../../components/footer'
import { Profile, ProfileMetadata } from '@gumhq/ui-components';
const Home: NextPage = () => {
    const OSU: ProfileMetadata = {
        name: "William Schneider",
        bio: "Blockchain Club President @ Ohio State University",
        username: "suppaGPT",
        following: 5,
        followers: 500,
        avatar: "https://pbs.twimg.com/profile_images/1623235582972334088/d-o_TqVO_400x400.jpg",
        // connect: followData // Optional
      }
    
      const CAL: ProfileMetadata = {
        name: "Byung",
        bio: "Blockchain Club President @ Cal Poly Pomona",
        username: "byungcool",
        following: 5,
        followers: 500,
        avatar: "https://pbs.twimg.com/profile_images/1560343807975047168/07wpqAME_400x400.jpg",
        // connect: followData // Optional
      }

      const Texas: ProfileMetadata = {
        name: "Jake Levy",
        bio: "Blockchain Club President @ Unviersity of Texas",
        username: "jakelevy",
        following: 5,
        followers: 500,
        avatar: "https://pbs.twimg.com/profile_images/1479099613772599296/E6Ly6th4_400x400.jpg",
        // connect: followData // Optional
      }

      const Michigan: ProfileMetadata = {
        name: "Nicholas Harness",
        bio: "Founder of the University Blockchain Alliance",
        username: "nicholasharnes1",
        following: 5,
        followers: 500,
        avatar: "https://pbs.twimg.com/profile_images/1477107648952778752/4bkW9gBY_400x400.jpg",
        // connect: followData // Optional
      }

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
                     Social Graph Coming Soon!
                    </h1>
                </div>
                
                <div className='m-auto '>
                    <Profile data={OSU}/>
                </div>
                <div className='m-auto '>
                    <Profile data={CAL} />
                </div>
                <div className='m-auto '>
                    <Profile data={Texas} />
                </div>
              
                <div className='m-auto '>
                    <Profile data={Michigan} />
                </div>
               
             </div>
           
              
              <Footer/>
            </div>
            
          </div>
    </>
    
    
  )
}

export default Home