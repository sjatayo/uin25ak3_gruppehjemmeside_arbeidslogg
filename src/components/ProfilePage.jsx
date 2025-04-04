import "../assets//styles/profilePage.scss"
import "../assets//styles/log.scss"

export default function ProfilePage() {
  const member = {
    id: "1",
    name: "Kari Nordmann",
    image: "https://placehold.co/400x400",
    bio: "Frontend-utvikler med fokus på brukeropplevelser...",
    interests: ["JavaScript", "Accessibility", "Animasjon"],
    logs: [
      { title: "Fikset login-bug", date: "2024-03-10", timeUsed: "1" },
      { title: "Workshop om testing", date: "2024-03-12", timeUsed: "3" },
    ],
  }

  return (
    <>
      <img
        src={member.image}
        alt={`Profilbilde av ${member.name}`}
        className="profile-image"
      />
      <section className="profile-page">
        <h1>{member.name}</h1>

        <article className="bio">
          <p>{member.bio}</p>
        </article>

        <article className="interests">
          <h2>Interesser</h2>
          <ul className="interests-li">
            {member.interests.map((interest, index) => (
              <li key={index} className="interest-tag">
                {interest}
              </li>
            ))}
          </ul>
        </article>

        <section className="log">
          <h2>Arbeidslogg</h2>
          <ul className="log-input">
            {member.logs.map((log, index) => (
              <li key={index} className="log-item">
                <p>{log.date}</p>
                <p>{member.name}</p>
                <p>{log.title}</p>
                <p>{log.timeUsed}</p>
              </li>
            ))}
          </ul>
        </section>
      </section>
    </>
  )
}
