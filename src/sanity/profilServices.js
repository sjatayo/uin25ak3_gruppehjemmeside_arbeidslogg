import client from "./client";

export async function getProfiles() {
    const data = await client.fetch(
        `*[_type == "profil"] {
  name,
  description,
  interesse1,
  interesse2,
  interesse3,
  "imageUrl": image.asset->url,
  slug
}
`
    )
    return data;
}