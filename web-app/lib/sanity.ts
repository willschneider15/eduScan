import createImageUrlBuilder from '@sanity/image-url'
import { SanityImageSource } from '@sanity/image-url/lib/types/types'
import { config } from './config'

export const urlFor = ( source: SanityImageSource ) => createImageUrlBuilder(config).image(source) //display images on browser

// export const usePreviewSubscription = createPreviewSubscriptionHook(config)

// export const useCurrentUser = createCurrentUserHook(config)