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

const Home: NextPage<{ posts: any[] }> = ({ posts }) => {


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
                  <h1 className="flex flex-col text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-700 to-teal-400 pb-3">
                    Onboarding the Next Wave of Web3 Builders
                  </h1>
                </div>
                <h2 className="text-black pt-3 font-medium">
                  powered by <img className="inline-block" src="/sol.png" alt="Solana Logo" width={150} height={150} />
                </h2>
                <div className="">


                <Link className="rounded-none px-7 font-bold bg-gradient-to-r from-purple-300 to-teal-400 pb-4"
                  href="/register"
                  >  
                  Enter App
                </Link>
                </div>

              </main>


             
              <div id="events" className="flex flex-col gap-5">


                  <h2 className="text-purple-700 font-bold text-4xl">Upcoming Events</h2>
            
                  <Events posts={posts}/>

              </div>

              
              <Footer/>
              
            </div>
            
          </div>
    </>
    
    
  )
}
export const getStaticProps: GetStaticProps = async () => {
  const posts = await getClient().fetch(groq`
    *[_type == "post" && publishedAt < now()] | order(publishedAt desc) {
      _id,
      title,
      startDate,
      endDate,
      "username": author->username,
      "categories": categories[]->{id, title},
      "authorImage": author->avatar,
      body,
      mainImage,
      slug,
      publishedAt
    }
  `);
  return { props: { posts } };
};

export default Home;