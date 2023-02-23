import { urlFor }  from '../lib/sanity'
import Tag from './Tag'
import { forwardRef } from 'react'
import imageUrlBuilder from '@sanity/image-url'
import {PortableText} from '@portabletext/react'


const Card = forwardRef(({ onClick, href, post }, ref) => {
    const { title, eventDate, publishedAt, body, mainImage, username, authorImage, categories} = post

    return (
        <div
        className="grid grid-cols-1 items-center justify-around gap-6 rounded-xl  py-8 px-8 md:grid-cols-2 md:gap-2
        border p-6 shadow-xl relative" href={href} onClick={onClick} ref={ref}>
        
        <h3 className="text-xl font-bold text-zinc-900">{title}</h3>
        <h2>Event Date: {new Date(eventDate).toDateString()}</h2>

        <PortableText className="mt-4 font-medium text-zinc-500"
        value={body}
      />
      
        <div className='img_card_div'>
            <img className="img_card rounded-lg" src={urlFor(mainImage)} alt={title + ' image'} width={200} height={200}/>
        </div>

            {/* <hr/> */}

            {/* <div className="info-container">
                <p>Posted by: {username}</p>
                <img
                    className="avatar"
                    alt={username + ' avatar'}
                    src={urlFor(authorImage)}
                />
            </div> */}

            <p>Published on: {new Date(publishedAt).toDateString()}</p>

            <div className="tag-container">
                {categories.map((category) => (
                    <>
                    { category && <Tag key={category} title={category?.title}/>}
                    </>
                    ))}
            </div>

        </div>
    )
})

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

        {/* <a  
            href="/"
            target="_blank"
            rel="noopener noreferrer">
                <span className='mt-4 flex cursor-pointer items-center gap-2 font-medium hover:text-purple-700 text-black  '>
                Read More
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3" stroke="currentColor" aria-hidden="true" height="14"><path stroke-linecap="round" stroke-linejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                </span>
        </a> */}
