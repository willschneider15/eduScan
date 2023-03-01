import { urlFor }  from '../lib/sanity'
import Tag from './tag'
import { forwardRef } from 'react'
import {PortableText} from '@portabletext/react'
import Link from 'next/link'
import type { Post } from '../lib/sanity.queries'


const Card = (props:  Pick<Post, 
    "body" | "title" | "url" | "startDate" | "endDate" | "mainImage" | "categories" | "host" | "location" | "username" | "authorImage" | "publishedAt" | "slug" | "_id"
    >
    ) => {

    const { _id, title, url, startDate, endDate, body, mainImage, categories, host, location, username, authorImage, publishedAt, slug} = props
    const imageUrl = urlFor(mainImage).url()

    return (
        <div
        className="grid grid-cols-1 items-center justify-around gap-6 rounded-xl  py-8 px-8 md:grid-cols-2 md:gap-2
        border p-6 shadow-xl relative">
        
            <div className="flex flex-col pr-5">
        
                <h3 className="text-xl font-bold text-zinc-900">{title}</h3>

                <h2 className='mb-4'>{new Date(startDate).toDateString()} - {new Date(endDate).toDateString()}</h2>
         
                    
                <div className="mt-4 font-medium text-zinc-500">
                    <PortableText 
                    value={body}/>
                </div>
               

                {/* <p>Published on: {new Date(publishedAt).toDateString()}</p> */}

                    <Link
                        key={_id}
                        href="/events/[slug]"
                        as={`/events/${slug}`}
                        passHref
                    >
                       <span className='mt-4 flex cursor-pointer items-center gap-2 font-medium hover:text-purple-700 text-black  '>
                       More Info
                         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="3" stroke="currentColor" aria-hidden="true" height="14"><path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                       </span>
                    </Link>

            </div>

      <div>      
        <div className='img_card_div'>
            <img className="img_card rounded-lg" src={imageUrl} alt={title + ' image'}/>
        </div>

        <div className="flex flex-row mt-4 gap-x-2 text-center tag-container text-black font-bold">
            {categories?.map((category) => (
                <>
                    {category && <Tag key={category.id} title={category.title}/>}
                </>
            ))}
        </div>

        {/* <div className="flex flex-row">
                <p>{username}</p>
                <img
                    className="avatar"
                    alt={username + ' avatar'}
                    src={urlFor(authorImage)}
                     width={50} height={20} 
                />
            </div> */}

        </div>
        
    </div>
)
}

export default Card

{/*
Live component           
<span className="absolute top-0 right-0 mt-2 mr-2">
<span className="text-center text-red-500 font-medium">LIVE </span>
    <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500 mr-2">
     <span className="absolute animate-ping h-full w-full rounded-full bg-red-500 opacity-75"></span>
    </span>

  </span> 
*/}
