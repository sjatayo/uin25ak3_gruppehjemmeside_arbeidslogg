import "../assets//styles/profilePage.scss"
import "../assets//styles/log.scss"
import { fetchProfiles } from "../sanity/profilServices"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { fetchLogByPerson } from "../sanity/loggServices"

export default function ProfilePage() {
  // Setter opp state for å lagre profiler
  const [profiles, setProfiles] = useState([])

  // Henter parameter "slug" fra URL ved hjelp av useParams
  const { slug } = useParams()

  // Setter opp state for å lagre logger
  const [logs, setLogs] = useState([])

  // Asynkron funksjon for å hente alle profiler fra profilServices.js (Sanity)
  const getAllProfiles = async () => {
    const data = await fetchProfiles()
    // Filtrerer ut profilen som matcher slug.
    const clickedProfile = data.filter((p) => p.slug.current === slug)
    // Logger til console for feedback
    console.log("Profiles:", data)
    // Oppdaterer staten med den filtrerte profilen
    setProfiles(clickedProfile)
  }

  // Asynkron funksjon for å hente logger basert på personId
  const getLogByPerson = async (personId) => {
    const data = await fetchLogByPerson(personId)
    console.log("Logs:", data)
    // Oppdaterer staten med loggene som hentes
    setLogs(data)
  }

  // useEffect som kjører når slug endres.
  useEffect(() => {
    getAllProfiles()
  }, [slug])

  useEffect(() => {
    // Venter til profiles er lastet og ikke er tom
    if (profiles.length > 0) {
      // Henter personId fra første profil i listen
      const personId = profiles[0].slug.current
      getLogByPerson(personId)
    }
  }, [profiles]) // useEffect Kjører på nytt hvis profiles endrer seg

  return (
    <>
      {/* Seksjon for profil -- Bruker .map for å skrive ut nødvendig data */}
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

      {/* Seksjon for logg -- Bruker .map for å skrive ut nødvendig data*/}
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
