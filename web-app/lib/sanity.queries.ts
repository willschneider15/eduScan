import { groq } from 'next-sanity'
import { Url } from 'next/dist/shared/lib/router/router'

const postFields = groq`
  _id,
  title,
  date,
  excerpt,
  coverImage,
  "slug": slug.current,
  "author": author->{name, picture},
`

export const settingsQuery = groq`*[_type == "settings"][0]`

export const indexQuery = groq`
*[_type == "post"] | order(date desc, _updatedAt desc) {
  ${postFields}
}`

export const postAndMoreStoriesQuery = groq`
{
  "post": *[_type == "post" && slug.current == $slug] | order(_updatedAt desc) [0] {
    content,
    ${postFields}
  },
  "morePosts": *[_type == "post" && slug.current != $slug] | order(date desc, _updatedAt desc) [0...2] {
    content,
    ${postFields}
  }
}`

export const postSlugsQuery = groq`
*[_type == "post" && defined(slug.current)][].slug.current
`

export const postBySlugQuery = groq`
*[_type == "post" && slug.current == $slug][0] {
  ${postFields}
}
`

export interface Author {
  name?: string
  picture?: any
}

export interface Post {
  _id: string
  title?: string
  url?: any
  mainImage?: any
  date?: string
  excerpt?: string
  author?: Author
  slug?: string
  content?: any
  body?: any
  startDate?: any
  endDate?: any
  location?: any
  categories?: any[]
  host?: any
  authorImage?: any
  username?:any
  publishedAt?: any
}



export interface Settings {
  title?: string
  description?: any[]
  ogImage?: {
    title?: string
  }
}