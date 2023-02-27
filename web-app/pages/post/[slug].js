import groq from 'groq'
import Tag from '../../components/Tag'
import {PortableText} from '@portabletext/react'
import {urlFor} from '../../lib/sanity'
import {getClient} from '../../lib/sanity.server'


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

    const {title, mainImage, categories, body, authorImage, username, about, startDate, endDate} = post

    return (
        <>
            {post && <article>
                <h1>{title}</h1>
                <hr/>

                <h2 className='mb-4'>{new Date(startDate).toDateString()} - {new Date(endDate).toDateString()}</h2>
                
                <div>
                    {categories?.map((category) => (
                        <>
                            {category && <Tag key={category.id} title={category.title}/>}
                        </>
                    ))}
                </div>
                
                <PortableText value={body} components={PostComponents}/>
              
                <div className='img_card_div'>
                  <img className="img_card rounded-lg" src={urlFor(mainImage)} alt={title + ' image'} width={200} height={200}/>
                </div>

                
                <hr/>

                <div>
                    <div>
                        <h3>Author: <strong>{username}</strong></h3>
                        <img
                          className="w-24 h-24"
                          src={urlFor(authorImage).url()}
                          alt={`${username} avatar`}
                        />
                        <p>About Author</p>
                        <p>{about}</p>

                    </div>
                </div>

            </article>}
        </>
    )
}

const query = groq`*[_type == "post" && slug.current == $slug][0]
{
  title,
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
