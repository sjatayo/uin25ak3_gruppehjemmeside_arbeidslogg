import "../assets/styles/home.scss";
import { useState, useEffect } from "react";
import { fetchProfiles } from "../sanity/profilServices";
import { fetchLogByPerson } from "../sanity/loggServices";

export default function Home() {
  const [profiles, setProfiles] = useState([]);
  const [logsByPerson, setLogsByPerson] = useState({});
  const [loadingProfiles, setLoadingProfiles] = useState(true);
  const [loadingLogs, setLoadingLogs] = useState(true);

  useEffect(() => {
    async function loadProfiles() {
      try {
        const data = await fetchProfiles();
        setProfiles(data);
      } catch (error) {
        console.error("Error fetching profiles:", error);
      } finally {
        setLoadingProfiles(false);
      }
    }
    loadProfiles();
  }, []);

  useEffect(() => {
    async function loadLogsForProfiles() {
      if (profiles.length > 0) {
        const logsMap = {};
        await Promise.all(
          profiles.map(async (profile) => {
            try {
              const logs = await fetchLogByPerson(profile._id);
              logsMap[profile._id] = logs;
            } catch (error) {
              console.error(`Error fetching logs for profile ${profile._id}:`, error);
              logsMap[profile._id] = [];
            }
          })
        );
        setLogsByPerson(logsMap);
        setLoadingLogs(false);
      }
    }
    loadLogsForProfiles();
  }, [profiles]);

  return (
    <main className="home">
      <h1>Hjem</h1>
      <section className="home-members">
        <h2>Medlemmer</h2>
        {loadingProfiles ? (
          <p>Laster medlemmer…</p>
        ) : (
          profiles.map((profile) => (
            <article key={profile._id} className="home-profile-card">
              <img
                src={profile.imageUrl}
                alt={`Portrettbilde av: ${profile.name}`}
              />
              <header className="home-card-content">
                <h1>{profile.name}</h1>
                <p>{profile.email}</p>
              </header>
              <section className="home-logs">
                <h3>Logger for {profile.name}</h3>
                {loadingLogs ? (
                  <p>Laster logger…</p>
                ) : logsByPerson[profile._id] && logsByPerson[profile._id].length > 0 ? (
                  <ul className="home-log-list">
                    {logsByPerson[profile._id].map((log, index) => (
                      <li key={log._id || index} className="home-log-item">
                        <div className="home-log-description">{log.description}</div>
                        <div className="home-log-meta">
                          <span>{new Date(log.date).toLocaleString()}</span>
                          <span>{log.tidbrukt} timer</span>
                        </div>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p>Ingen logger funnet</p>
                )}
              </section>
            </article>
          ))
        )}
      </section>
    </main>
  );
}