import { createClient } from 'next-sanity'
import { config } from './config'

// Just testing stuff to try to make vercel work with pulling sanity data
// import { apiVersion, dataset, projectId} from './sanity.api'

// const client = projectId
//     ? createClient({ projectId, dataset, apiVersion, useCdn: false })
//   : null

export const sanityClient = createClient({
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION,
    useCdn: false,
    token: process.env.NEXT_PUBLIC_SANITY
}
)

export const previewClient = createClient({
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION,
    useCdn: false,
    token: process.env.NEXT_PUBLIC_SANITY
})

export const getClient = ( usePreview: boolean ) => usePreview ? previewClient : sanityClient