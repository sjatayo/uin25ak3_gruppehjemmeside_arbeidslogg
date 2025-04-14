import "../assets/styles/home.scss"
import "../assets/styles/log.scss"
import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { fetchProfiles } from "../sanity/profilServices"
import { fetchAllLogs } from "../sanity/loggServices"

export default function Home() {
  const [profiles, setProfiles] = useState([])
  const [combinedLogs, setCombinedLogs] = useState([])
  const [loadingProfiles, setLoadingProfiles] = useState(true)
  const [loadingLogs, setLoadingLogs] = useState(true)

  useEffect(() => {
    async function loadProfiles() {
      try {
        const data = await fetchProfiles()
        setProfiles(data)
      } catch (error) {
        console.error("Error fetching profiles:", error)
      } finally {
        setLoadingProfiles(false)
      }
    }
    loadProfiles()
  }, [])

  useEffect(() => {
    async function loadAllLogs() {
      try {
        const logs = await fetchAllLogs()
        setCombinedLogs(logs)
      } catch (error) {
        console.error("Error fetching logs:", error)
      } finally {
        setLoadingLogs(false)
      }
    }
    loadAllLogs()
  }, [])

  const getProfileName = (log) => {
    const matchedProfile = profiles.find(
      (profile) => profile.slug.current === log.personId
    )
    return matchedProfile ? matchedProfile.name : "Ukjent bruker"
  }

  return (
    <div className="home">
      <h1>Hjem</h1>
      <section className="home-members">
        <h2>Medlemmer</h2>
        {loadingProfiles ? (
          <p>Laster medlemmer…</p>
        ) : (
          profiles.map((profile) => (
            <Link
              key={profile._id}
              to={`/${profile.slug.current}`}
              className="home-profile-card"
            >
              <img
                src={profile.imageUrl}
                alt={`Portrettbilde av: ${profile.name}`}
              />
              <header className="home-card-content">
                <h1>{profile.name}</h1>
                <p>{profile.email}</p>
              </header>
            </Link>
          ))
        )}
      </section>

      <section className="logs">
        <h2 className="center-heading">Arbeidslogg</h2>
        {loadingLogs ? (
          <p>Laster logger…</p>
        ) : combinedLogs.length > 0 ? (
          combinedLogs.map((log) => (
            <article key={log._id} className="log-single">
              <p>{log.date}</p>
              <p className="firstname">{getProfileName(log)}</p>
              <p>{log.description}</p>
              <p>{log.tidbrukt}</p>
            </article>
          ))
        ) : (
          <p>Ingen logger funnet</p>
        )}
      </section>
    </div>
  )
}
