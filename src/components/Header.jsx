import { useEffect, useState } from "react"
import "../assets//styles/header.scss"
import { Link, NavLink } from "react-router-dom"
import { fetchProfiles } from "../sanity/profilServices"

export default function Header() {
  // State for å lagre profiler
  const [profiles, setProfiles] = useState([])

  // Asynkron funksjon for å hente alle profiler fra profilServices.js (Sanity)
  useEffect(() => {
    const getAllProfiles = async () => {
      // Henter profiler fra profilServices.js (Sanity)
      const data = await fetchProfiles()
      // Oppdaterer state med profilene som er hentet
      setProfiles(data)
    }
    // Kaller funksjonen når komponentet rendres for første gang.
    getAllProfiles()
  }, [])

  return (
    <header className="globalheader">
      <Link to="/" className="logo">
        Gruppe 7
      </Link>
      <nav className="global-nav">
        <ul>
          <li className="header-home">
            <Link to="/">Hjem</Link>
          </li>

          {/* Dynamisk genererte lenker basert på profilene som er hentet fra Sanity */}
          {profiles.map((profile) => (
            <li key={profile._id}>
              <Link to={`/${profile.slug.current}`}>{profile.name}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
