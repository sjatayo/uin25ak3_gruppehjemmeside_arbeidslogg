import "../assets//styles/profilePage.scss"
import "../assets//styles/log.scss"
import { fetchProfiles } from "../sanity/profilServices"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { fetchLogByPerson } from "../sanity/loggServices"

export default function ProfilePage() {
  const [profiles, setProfiles] = useState([])
  const { slug } = useParams()
  const [logs, setLogs] = useState([])

  const getAllProfiles = async () => {
    const data = await fetchProfiles()
    const clickedProfile = data.filter((p) => p.slug.current === slug)
    console.log("Profiles:", data)
    setProfiles(clickedProfile)
  }

  const getLogByPerson = async (personId) => {
    const data = await fetchLogByPerson(personId)
    console.log("Logs:", data)
    setLogs(data)
  }

  useEffect(() => {
    getAllProfiles()
  }, [slug])

  useEffect(() => {
    // Venter til profiles er lastet og ikke er tom
    if (profiles.length > 0) {
      const personId = profiles[0].slug.current
      getLogByPerson(personId)
    }
  }, [profiles]) // Kjør på nytt når profiles endrer seg

  return (
    <>
      {/* Seksjon for profil */}
      {profiles?.map((profile) => (
        <section key={profile._id} className="profile-page">
          <img
            src={profile.imageUrl}
            alt={`Portrettbilde av: ${profile.name}`}
          ></img>
          <div className="flex-column">
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
          </div>
        </section>
      ))}

      {/* Seksjon for logg */}
      <section className="logs">
        <h2>Arbeidslogg</h2>
        {logs?.map((log) => (
          <article key={log._id} className="log-single">
            <p>{log.date}</p>
            <p className="firstname">{log.personId}</p>
            <p>{log.description}</p>
            <p>{log.tidbrukt}</p>
          </article>
        ))}
      </section>
    </>
  )
}
