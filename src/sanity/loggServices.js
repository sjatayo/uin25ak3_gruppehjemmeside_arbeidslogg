import client from "./client"

export async function fetchAllLogs() {
  const data = await client.fetch(
    `*[_type == "logg"] | order(date desc) {
      _id,
      date,
      personId,
      description,
      tidbrukt
    }`
  )
  return data
}

export async function fetchLogByPerson(personId) {
  const data = await client.fetch(
    `*[_type == "logg" && personId == $personId] | order(date desc) {
      _id,
      date,
      description,
      tidbrukt
    }`,
    { personId }  
  )
  return data
}