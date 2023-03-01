import React, { memo } from 'react';
import groq from 'groq'
import Card from './card'
import { client } from "../lib/sanity.server"
import Link from 'next/link'
import type { Post } from '../lib/sanity.queries'


const events = ({ posts }: { posts: Post[] }) => { 

  // console.log(posts)

  return(
    <div className="grid w-full grid-cols-1 gap-10 md:grid-cols-2">

            <meta name="viewport" content="initial-scale=1.0, width=device-width"/>
            {posts.map((post) => (
               
              <Card 
              title={post.title}
           
              startDate={post.startDate}
              endDate={post.endDate}
              body={post.body}
              mainImage={post.mainImage}
              categories={post.categories}
              slug={post.slug}
              />
      ))}
  </div>
); 


}




export default memo(events);