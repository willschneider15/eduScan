// import sanityClient from '@sanity/client'

// export default sanityClient({
//   projectId: '7z4zxlaa', // you can find this in sanity.json
//   dataset: 'production', // or the name you chose in step 1
//   useCdn: true // `false` if you want to ensure fresh data
// })


import { createClient } from "@sanity/client"; 

export const client = createClient({
    projectId: "7z4zxlaa",
    dataset: "production",
    useCdn: true // `false` if you want to ensure fresh data
})