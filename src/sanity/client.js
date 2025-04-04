import { createClient } from "@sanity/client"

export const client = createClient({
  projectId: "mxyaj2a1",
  dataset: "production",
  apiVersion: "2025-04-04",
  useCdn: false,
})

export default client
