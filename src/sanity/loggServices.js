import client from "./client"

export async function fetchAllLogs() {
  const data = await client.fetch(
    `*[_type == "logg"] | order(date desc) {
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
    personId,
    description,
    tidbrukt
}`,
    { personId }
  )
  return data
}

// For fetchLogByPerson må man sende med parameter så vi henter ut riktig personId. Må se på hvordan dette kan gjøres videre.
