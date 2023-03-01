import type { GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { Link as ScrollLink} from 'react-scroll';
import Header from '../../components/header'
import Footer from '../../components/footer'
import Events from '../../components/events'
import groq from 'groq'
import { getClient } from "../../lib/sanity.server"
import Link from 'next/link';

const Home: NextPage<{ posts: any[] }> = ({ posts }) => {


  return (
    <>

      <div className='bg-zinc-50 px-10'>
            <div className="justify-between mx-auto flex min-h-screen max-w-7xl flex-col">
                  
              <Head>
                <title> eduScan | Events </title>
                <link rel="icon" href="/eduScan.png" />
              </Head>
            
              <Header/>
             
              <div id="events" className="flex flex-col gap-5">


              <h1 className="text-purple-700 font-bold text-xl py-10 md:text-4xl  ">
                    Upcoming Events
                </h1>
            
                  <Events posts={posts}/>

              </div>

              
              <Footer/>
              
            </div>
            
          </div>
    </>
    
    
  )
}
export const getStaticProps = async ({ preview = false}) => {
  const posts = await getClient(preview).fetch(groq`
    *[_type == "post" && publishedAt < now()] | order(publishedAt desc) {
     _id,
     title,
     host,
     location,
     link,
     startDate,endDate,
     "username": author->username,
     "categories": categories[]->{id, title},
     "authorImage": author->avatar,
     body,
     mainImage,
     slug,
     publishedAt
     }`)
  return {
    props: {
      posts,
    },
  }
}


export default Home;