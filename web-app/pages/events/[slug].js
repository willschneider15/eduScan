import groq from 'groq'
import Tag from '../../components/tag'
import {PortableText} from '@portabletext/react'
import {urlFor} from '../../lib/sanity'
import {getClient} from '../../lib/sanity.server'
import CountDown from '../../components/countdown-timer'
import Header from '../../components/header'
import Footer from '../../components/footer'
import Head from 'next/head'
import { User , Card} from "@nextui-org/react";


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

    if (!post) {
        return <div>Loading...</div>;
    }


    const {title, host, mainImage, location, link, categories, blurb, body, authorImage, username, about, startDate, endDate} = post

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

                <div className="grid w-full grid-cols-1 gap-10 md:grid-cols-2 my-10">
                    <h2 className="items-center m-auto font-bold text-xl ">
                        <>
                        Time: {new Date(startDate).toDateString()} - {new Date(endDate).toDateString()}
                        <br/>
                        Location: {location}
                        </>
                    </h2>
                
                    <div className="items-center m-auto text-center">
                    {post.categories?.map((category) => (
                        <>
                            {category && <Tag key={category.id} title={category.title}/>}
                        </>
                    ))}
                </div>

               

             </div>

             <div className='grid w-full grid-cols-1 items-stretch gap-10 md:grid-cols-2 my-10'>
                <CountDown date={new Date(startDate).toDateString()}/>

                <a href={link} 
                target="_blank"
                rel="noopener noreferrer"
                className='bg-purple-700 text-white font-bold text-xl text-center h-auto m-auto border shadow-xl rounded-xl py-8 px-20'>
                    Enter Event
                </a>
                
             </div>

                <hr/>
            <h2 className='font-bold text-xl'>
                About Event:
            </h2>
            <h2 className='font-bold'> {blurb} </h2>
            <br/>
            
            
            <PortableText value={body} components={PostComponents}/>

            <Card className='flex flex-col md:w-3/5 w-5/6 m-auto md:mx-0 flex-1   md:px-20 my-10 p-10'
            variant="bordered">

                    <User
                        className="pb-5"
                        src={urlFor(authorImage).url()}
                        name={username}
                        alt={`${username} avatar`}
                        color="secondary"
                        bordered
                    />
                    <Card.Divider />
                    <p className='pt-5'><b>About Author: </b>{about} </p>

            </Card>

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
  blurb,
  body,
  startDate, 
  endDate,
  link,
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
