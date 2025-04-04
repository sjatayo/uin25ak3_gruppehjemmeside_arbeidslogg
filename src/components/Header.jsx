import "../assets//styles/header.scss"
import { NavLink } from "react-router-dom"

export default function Header() {
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
          <li>
            <NavLink to="1">Samuel</NavLink>
          </li>
          <li>
            <NavLink to="2">Jonas</NavLink>
          </li>
          <li>
            <NavLink to="3">Kristian</NavLink>
          </li>
          <li>
            <NavLink to="4">Victor</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}
