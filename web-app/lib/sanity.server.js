import { createClient } from 'next-sanity'
import { config } from './config'

export const sanityClient = createClient(config)

export const previewClient = createClient({
    ...config,
    useCdn: false,
    token: 'skvn4d1qasWaEppSfgCIEP35lznzgrCDhgnj3P7922KecbOJ8PEf1RFFptNIuMFyHfImUvjmUmwPQEM6ULXxSmgrTDmVGDQOUiLrqCUh6xiK4L30E3QTmvN2bLWXhaP2c4hEKDrGaOzg0byoarxxnauy2xlBieoNBD4B9YXuFCCsabHPIZVg'
})

export const getClient = ( usePreview ) => usePreview ? previewClient : sanityClient