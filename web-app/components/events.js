import React, { memo } from 'react';
import groq from 'groq'
import Card from './card'
import { getClient } from "../lib/sanity.server"
import Link from 'next/link'


const events = ({ posts }) => { 

  // console.log(posts)
  
  return(
    <div className="grid w-full grid-cols-1 gap-10 md:grid-cols-2">

            <meta name="viewport" content="initial-scale=1.0, width=device-width"/>
            {posts?.map((post) => (

              <Card post={post}/>
      ))}
  </div>
); 


}

export const getStaticProps = async ({ preview = false}) => {
  const posts = await getClient(preview).fetch(groq`
    *[_type == "post" && publishedAt < now()] | order(publishedAt desc) {
     _id,
     title,
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


export default memo(events);