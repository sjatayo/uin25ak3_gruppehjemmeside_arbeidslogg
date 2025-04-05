import { useEffect, useState } from "react"
import "../assets//styles/header.scss"
import { NavLink } from "react-router-dom"
import { fetchProfiles } from "../sanity/profilServices"

export default function Header() {
  const [profiles, setProfiles] = useState([])

  useEffect(() => {
    const getAllProfiles = async () => {
      const data = await fetchProfiles()
      setProfiles(data)
    }
    getAllProfiles()
  }, [])

  return (
    <header className="globalheader">
      <NavLink to="/" className="logo">
        Gruppe 7
      </NavLink>
      <nav className="global-nav">
        <ul>
          <li className="header-home">
            <NavLink to="/">Hjem</NavLink>
          </li>

          {profiles.map((profile) => (
            <li key={profile._id}>
              <NavLink to={`/${profile.slug.current}`}>{profile.name}</NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
