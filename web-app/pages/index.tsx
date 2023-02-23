import type { GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { Link as ScrollLink} from 'react-scroll';
import Header from '../components/header'
import Footer from '../components/footer'
import Events from '../components/events'
import groq from 'groq'
import { getClient } from "../lib/sanity.server"

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
                  <h1 className="flex flex-col text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-700 to-teal-400 pb-3">
                    Connecting Universities to Web3
                  </h1>
                </div>
                <h2 className="text-black pt-3 font-medium">
                  powered by <img className="inline-block" src="/sol.png" alt="Solana Logo" width={150} height={150} />
                </h2>
              </main>

              <div id="events" className="flex flex-col gap-3">

              <h2 className="text-purple-700 font-bold text-xl">Upcoming Events</h2>
                
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
      eventDate,
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