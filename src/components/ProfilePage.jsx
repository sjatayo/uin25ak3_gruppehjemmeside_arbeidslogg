import "../assets//styles/profilePage.scss"
import "../assets//styles/log.scss"
import { fetchProfiles } from "../sanity/profilServices"
import { useEffect, useState } from "react"

export default function ProfilePage() {
  const [profiles, setProfiles] = useState([])

  const getAllProfiles = async () => {
    const data = await fetchProfiles()
    console.log(data)
    setProfiles(data)
  }

  useEffect(() => {
    getAllProfiles()
  }, [])

  return (
    <>
      {profiles?.map((profile, index) => (
        <section key={index} className="profile-page">
          <img
            src={profile.imageUrl}
            alt={`Portrettbilde av: ${profile.name}`}
          ></img>
          <h1 key={index}>{profile.name}</h1>
          <article className="bio">
            <p>{profile.description}</p>
          </article>
          <article className="interests">
            <h2>Interesser</h2>
            <ul className="interest-li"></ul>
            {profile.interests.map((interest, index) => (
              <li key={index} className="interest-tag">
                {interest}
              </li>
            ))}
          </article>
        </section>
      ))}
    </>
  )
}
