import React, { memo } from 'react';
import groq from 'groq'
import Card from './card'
import { getClient } from "../lib/sanity.server"
import Link from 'next/link'


const events = ({ posts }) => { 

  // console.log(posts)
  
  return(
    <div key={posts.id} className="grid w-full grid-cols-1 gap-10 md:grid-cols-2">

            <meta name="viewport" content="initial-scale=1.0, width=device-width"/>
            {posts?.map((post) => (

              <Card post={post}/>
      ))}
  </div>
); 


}




export default memo(events);