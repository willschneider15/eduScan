import groq from 'groq'
import Tag from '../../components/tag'
import {PortableText} from '@portabletext/react'
import {urlFor} from '../../lib/sanity'
import {getClient} from '../../lib/sanity.server'
import CountDown from '../../components/countdown-timer'
import Header from '../../components/header'
import Footer from '../../components/footer'
import Head from 'next/head'
import Link from 'next/link'
import type { Post, Settings } from '../../lib/sanity.queries'
import Image from 'next/image'

// const PostComponents = {
//     types: {
//         image: ({value}) => {
//             return (
//                 <img
//                     className="post-image"
//                     alt={value.alt || ' '}
//                     src={urlFor(value)}
//                 />
//             )
//         }
//     }
// }

const Post = (props:  Pick<Post, 
    "body" | "title" | "url" | "startDate" | "endDate" | "mainImage" | "categories" | "host" | "location" | "username" | "authorImage" | "publishedAt" | "slug" | "_id"
    >
    ) => {

    // console.log(post)

    const { _id, title, url, startDate, endDate, body, mainImage, categories, host, location, username, authorImage, publishedAt, slug} = props
    const imageUrl = urlFor(mainImage).url()

    return (
        <div className='bg-zinc-50 px-10'>
            
            <div className="justify-between mx-auto flex min-h-screen max-w-7xl flex-col">

                <Head>
                <title> eduScan |  {title} </title>
                <link rel="icon" href="/eduScan.png" />
              </Head>
            
              <Header/>

              {title && <article>

                <h1 className="text-purple-700 font-bold text-xl pt-10 md:text-4xl">
                    {title}
                </h1>

                <h2 className='text-purple-700 text-l md:text-3xl'>
                    Hosted By: {host}
                </h2>

                <main className="flex flex-col w-full flex-1 items-center justify-center md:px-20 text-center my-10 ">  

                <div className="flex w-full flex-row items-center justify-center">
                    <div className='image_container md:w-4/6 lg:w-3/6 w-full border shadow-xl'>
              
                  <Image className="image" src={imageUrl} alt={title + ' image'} objectFit="fill"/>
                
                </div>
            </div>

                </main>

                <div className="grid w-full grid-cols-1 gap-10 md:grid-cols-2 my-10">
                    <h2 className="items-center m-auto font-bold text-xl text-center">
                        Time: {new Date(startDate).toDateString()} - {new Date(endDate).toDateString()}
                        <br/>
                        Location: {location}
                    </h2>
                  
                    <div className="items-center m-auto text-center">
                    {categories?.map((category) => (
                        <>
                            {category && <Tag key={category.id} title={category.title}/>}
                        </>
                    ))}
                </div>

              

             </div>

             <div className='grid w-full grid-cols-1 gap-10 md:grid-cols-2 my-10'>
                <CountDown date={new Date(startDate).toDateString()}/>
                <a href={url} 
                target="_blank"
                rel="noopener noreferrer"
                className='bg-purple-700 text-white font-bold text-xl text-center h-auto m-auto border shadow-xl rounded-xl py-8 px-20'>
                    Enter Event
                </a>
             </div>

                <hr/>
            
            <PortableText value={body}/>

                <div>

                    <div className="flex flex-rowS">
                        <h3>Author: <strong>{username}</strong> </h3>

                        <img
                          className="w-10 h-10 ml-2"
                          src={urlFor(authorImage).url()}
                          alt={`${username} avatar`}
                        />
                    </div>

                         {/* <p>About Author: {about} </p>  */}

                    </div>

            </article>}

            <Footer/>
        </div>
    </div>
    )
}

// const query = groq`*[_type == "post" && slug.current == $slug][0]
// {
//   title,
//   url,
//   host,
//   location,
//   "username": author -> username, 
//   "about": author-> bio,
//   "categories": categories[]->{id, title}, 
//   "authorImage": author-> avatar,
//   body,
//   startDate, 
//   endDate,
//   mainImage,
//   postedAt
// }`

// export const getStaticPaths = async () =>
// {
//     const paths = await getClient().fetch(
//         groq`*[_type == "post" && defined(slug.current)][].slug.current`
//     )

//     return {
//         paths: paths.map((slug: any) => ({params: {slug}})),
//         fallback: true,
//     }
// }

// export const getStaticProps = async (
// {
//     params, preview = false
// }
// ) =>
// {
//     const post = await getClient(preview).fetch(query, {slug: params.slug,})

//     return {
//         props: {
//             post,
//         }
//     }
// }


// export const getStaticProps: GetStaticProps<
//   PageProps,
//   Query,
//   PreviewData
// > = async (ctx) => {
//   const { preview = false, previewData = {}, params = {} } = ctx

//   const token = previewData.token

//   const [settings, { post, morePosts }] = await Promise.all([
//     getSettings(),
//     getPostAndMoreStories(params.slug, token),
//   ])

//   if (!post) {
//     return {
//       notFound: true,
//     }
//   }

//   return {
//     props: {
//       post,
//       morePosts,
//       settings,
//       preview,
//       token: previewData.token ?? null,
//     },
//   }
// }

// export const getStaticPaths = async () => {
//   const slugs = await getAllPostsSlugs()

//   return {
//     paths: slugs?.map(({ slug }) => `/posts/${slug}`) || [],
//     fallback: false,
//   }
// }

export default Post
