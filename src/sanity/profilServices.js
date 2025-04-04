import client from "./client"

export async function fetchProfiles() {
  const data = await client.fetch(
    `*[_type == "profile"] {
  name,
  description,
  interests,
  "imageUrl": image.asset->url,
  slug
}
`
  )
  return data
}
