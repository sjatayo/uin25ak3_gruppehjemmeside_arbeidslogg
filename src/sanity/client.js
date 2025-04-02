import { SanityClient } from "@sanity/client"

export const client = SanityClient({
  projectId: "mxyaj2a1",
  dataset: "production",
  apiVersion: "v2025-03-24",
  useCdn: false,
})

export default client
