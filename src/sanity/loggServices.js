import client from "./client";

export async function fetchloggs() {
  const data = await client.fetch(
    `*[_type == "logg"] {
    date,
    name,
    description,
    tidBrukt,
    "slug": loggslug.current
  }`
  );
  return data;
}
