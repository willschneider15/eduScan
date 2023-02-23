import React, { memo, useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link'
import groq from 'groq'
import Card from './card'
import { getClient } from "../lib/sanity.server"


const events = ({ posts }) => { 

  console.log(posts)
  
    return(
        <div className="grid w-full grid-cols-1 gap-10 md:grid-cols-2">

                <meta name="viewport" content="initial-scale=1.0, width=device-width"/>
                {posts?.map((post) => (
              <Link
                key={post._id}
                href="/posts/[slug]"
                as={`/posts/${post.slug.current}`}
                passHref
              >
                  <Card post={post}/>
              </Link>
          ))}
      </div>
    ); 

}

export async function getStaticProps({ preview = false }) {
  const posts = await getClient(preview).fetch(groq`
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
  return {
    props: {
      posts,
    },
  };
}

export default memo(events);