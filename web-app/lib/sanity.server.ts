// // sanity.js
// import {createClient} from '@sanity/client'
// // Import using ESM URL imports in environments that supports it:
// // import {createClient} from 'https://esm.sh/@sanity/client'

// export const client = createClient({
//   projectId: 'your-project-id',
//   dataset: 'your-dataset-name',
//   useCdn: false, // set to `true` to fetch from edge cache
//   apiVersion: '2022-01-12', // use current date (YYYY-MM-DD) to target the latest API version
//   // token: process.env.SANITY_SECRET_TOKEN // Only if you want to update content with the client
// })

// // uses GROQ to query content: https://www.sanity.io/docs/groq
// export async function getPosts() {
//   const posts = await client.fetch('*[_type == "post"]')
//   return posts
// }

// export async function createPost(post: Post) {
//   const result = client.create(post)
//   return result
// }

// export async function updateDocumentTitle(_id, title) {
//   const result = client.patch(_id).set({title})
//   return result
//}

//client.ts
// import sanityClient from '@sanity/client'
// export default sanityClient(
// {
//     dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
//     projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
//     useCdn: true // `false` if you want to ensure fresh data
// })
import { createClient } from 'next-sanity'

import {
    indexQuery,
    type Post,
    postAndMoreStoriesQuery,
    postBySlugQuery,
    postSlugsQuery,
    type Settings,
    settingsQuery,
  } from '../lib/sanity.queries'

// Just testing stuff to try to make vercel work with pulling sanity data
// import { apiVersion, dataset, projectId} from './sanity.api'

// const client = projectId
//     ? createClient({ projectId, dataset, apiVersion, useCdn: false })
//   : null
export const client = createClient({
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION,
    useCdn: true, // Unless we want data to be refreshed every request
    token: process.env.NEXT_PUBLIC_SANITY
}
)

export async function getSettings(): Promise<Settings> {
    if (client) {
      return (await client.fetch(settingsQuery)) || {}
    }
    return {}
  }
  
  export async function getAllPosts(): Promise<Post[]> {
    if (client) {
      return (await client.fetch(indexQuery)) || []
    }
    return []
  }
  
  export async function getAllPostsSlugs(): Promise<Pick<Post, 'slug'>[]> {
    if (client) {
      const slugs = (await client.fetch<string[]>(postSlugsQuery)) || []
      return slugs.map((slug) => ({ slug }))
    }
    return []
  }

  export async function getPostAndMoreStories(
    slug: string,
    token?: string | null
  ): Promise<{ post: Post; morePosts: Post[] }> {
    if (process.env.NEXT_PUBLIC_SANITY_PROJECT_ID) {
      const client = createClient({
        dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
        projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
        apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION,
        useCdn: true, // Unless we want data to be refreshed every request
        token: process.env.NEXT_PUBLIC_SANITY
      })
      return await client.fetch(postAndMoreStoriesQuery, { slug })
    }
  return { post: null, morePosts: [] }
}

// Wrap the cache function in a way that reuses the TypeScript definitions
// const clientFetch = cache(client.fetch.bind(client))

// // Now use it just like before, fully deduped, cached and optimized by react
// const data = await clientFetch(groq`*[]`)
// // You can use the same generics as before
// const total = await clientFetch<number>(groq`count*()`)


// export const sanityClient = createClient({
//     dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
//     projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
//     apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION,
//     useCdn: true, // Unless we want data to be refreshed every request
//     token: process.env.NEXT_PUBLIC_SANITY
// }
// )

// export const previewClient = createClient({
//     dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
//     projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
//     apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION,
//     useCdn: true, // Unless we want data to be refreshed every request
//     token: process.env.NEXT_PUBLIC_SANITY
// })

// export const getClient = ( usePreview: boolean ) => usePreview ? previewClient : sanityClient