import type { GetStaticProps, NextPage } from 'next'
import Head from 'next/head'

import Events from '../../components/events'
import groq from 'groq'
import { getClient } from "../../lib/sanity.server"

const Spawn: NextPage < { upcoming: any[], previous : any[] }> = ({ upcoming, previous }) => {


  return (
    <>

      <div className='bg-spawn-white px-10 py-4'>
            <div className="justify-between mx-auto flex min-h-screen max-w-7xl flex-col">
                  
              <Head>
                <title> eduScan | Spawn </title>
                <link rel="icon" href="/eduScan.png" />
              </Head>
            

             
              <div id="events" className="flex flex-col gap-5">

              <h2 className="text-spawn-violet font-bold text-2xl">Upcoming Events</h2>
                
                <Events posts={upcoming}/>

                
                <h2 className="text-spawn-violet font-bold text-2xl pt-10">Previous Events</h2>
          
                <Events posts={previous}/>

              </div>


              
            </div>
            
          </div>
    </>
    
    
  )
}
export const getStaticProps = async ({ preview = false}) => {
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

export default Spawn;