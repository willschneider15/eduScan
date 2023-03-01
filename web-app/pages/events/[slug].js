import groq from 'groq'
import Tag from '../../components/tag'
import {PortableText} from '@portabletext/react'
import {urlFor} from '../../lib/sanity'
import {getClient} from '../../lib/sanity.server'
import CountDown from '../../components/countdown-timer'
import Header from '../../components/header'
import Footer from '../../components/footer'
import Head from 'next/head'


const PostComponents = {
    types: {
        image: ({value}) => {
            return (
                <img
                    className="post-image"
                    alt={value.alt || ' '}
                    src={urlFor(value)}
                />
            )
        }
    }
}

const Post = ({post}) => {

    console.log(post)

    const {title, host, mainImage, location, categories, body, authorImage, username, about, startDate, endDate} = post

    return (
        <div className='bg-zinc-50 px-10'>
            
            <div className="justify-between mx-auto flex min-h-screen max-w-7xl flex-col">

                <Head>
                <title> eduScan |  {title} </title>
                <link rel="icon" href="/eduScan.png" />
              </Head>
            
              <Header/>

              {post && <article>

                <h1 className="text-purple-700 font-bold text-xl pt-10 md:text-4xl">
                    {title}
                </h1>

                <h2 className='text-purple-700 text-l md:text-3xl'>
                    Hosted By: {host}
                </h2>

                <main className="flex flex-col w-full flex-1 items-center justify-center md:px-20 text-center my-10 ">  

                <div className="flex w-full flex-row items-center justify-center">
                    <div className='image_container md:w-4/6 lg:w-3/6 w-full border shadow-xl'>
              
                  <img className="image" src={urlFor(mainImage)} alt={title + ' image'} layout="fill"/>
                
                </div>
            </div>

                </main>

                <div className="grid w-full grid-cols-1 gap-10 md:grid-cols-3">
                    <h2 className=" font-bold text-xl text-center">
                        Time: {new Date(startDate).toDateString()} - {new Date(endDate).toDateString()}
                    </h2>

                    <div className="flex flex-rom gap-x-4 items-center m-auto text-center">
                    {categories?.map((category) => (
                        <>
                            {category && <Tag key={category.id} title={category.title}/>}
                        </>
                    ))}
                </div>

                <h2 className="font-bold text-xl text-center">
                    Location: {location}
                </h2>

             </div>

             <div className='grid w-full grid-cols-1 gap-10 md:grid-cols-2 my-10'>
                <CountDown date={new Date(startDate).toDateString()}/>
                <a href="" className='bg-purple-700 text-white font-bold text-xl text-center h-auto border shadow-xl rounded-xl py-4'>
                    Enter Event
                </a>
             </div>

                <hr/>
            
            <PortableText value={body} components={PostComponents}/>

                <div>

                    <div className="flex flex-rowS">
                        <h3>Author: <strong>{username}</strong> </h3>

                        <img
                          className="w-10 h-10 ml-2"
                          src={urlFor(authorImage).url()}
                          alt={`${username} avatar`}
                        />
                    </div>

                        <p>About Author: {about} </p>

                    </div>

            </article>}

            <Footer/>
        </div>
    </div>
    )
}

const query = groq`*[_type == "post" && slug.current == $slug][0]
{
  title,
  host,
  location,
  "username": author -> username, 
  "about": author-> bio,
  "categories": categories[]->{id, title}, 
  "authorImage": author-> avatar,
  body,
  startDate, 
  endDate,
  mainImage,
  postedAt
}`

export const getStaticPaths = async () =>
{
    const paths = await getClient().fetch(
        groq`*[_type == "post" && defined(slug.current)][].slug.current`
    )

    return {
        paths: paths.map((slug) => ({params: {slug}})),
        fallback: true,
    }
}

export const getStaticProps = async (
{
    params, preview = false
}
) =>
{
    const post = await getClient(preview).fetch(query, {slug: params.slug,})

    return {
        props: {
            post,
        }
    }
}

export default Post
