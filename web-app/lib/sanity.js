import { createPreviewSubscriptionHook, createCurrentUserHook } from 'next-sanity'
import createImageUrlBuilder from '@sanity/image-url'
import { config } from './config'

export const urlFor = ( source ) => createImageUrlBuilder(config).image(source) //display images on browser

// export const usePreviewSubscription = createPreviewSubscriptionHook(config)

// export const useCurrentUser = createCurrentUserHook(config)