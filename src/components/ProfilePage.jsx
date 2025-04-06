import "../assets//styles/profilePage.scss"
import "../assets//styles/log.scss"
import { fetchProfiles } from "../sanity/profilServices"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

export default function ProfilePage() {
  const [profiles, setProfiles] = useState([])
  const { slug } = useParams()

  const getAllProfiles = async () => {
    const data = await fetchProfiles()
    const clickedProfile = data.filter((p) => p.slug.current === slug)
    console.log(data)
    setProfiles(clickedProfile)
  }

  useEffect(() => {
    getAllProfiles()
  }, [slug])

  return (
    <>
      {profiles?.map((profile) => (
        <section key={profile._id} className="profile-page">
          <img
            src={profile.imageUrl}
            alt={`Portrettbilde av: ${profile.name}`}
          ></img>
          <h1>{profile.name}</h1>
          <article className="bio">
            <p>{profile.description}</p>
          </article>
          <article className="interests">
            <h2>Interesser</h2>
            <ul className="interest-li">
              {profile.interests.map((interest, index) => (
                <li key={index} className="interest-tag">
                  {interest}
                </li>
              ))}
            </ul>
          </article>
        </section>
      ))}
    </>
  )
}
