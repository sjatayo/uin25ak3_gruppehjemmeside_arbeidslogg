import { useState } from "react"
import reactLogo from "./assets/react.svg"
import viteLogo from "/vite.svg"
// import "./App.css"
import ProfilePage from "./components/ProfilePage"
import Header from "./components/Header"
import Layout from "./components/Layout"
import { BrowserRouter, Route, Routes } from "react-router-dom"

function App() {
  const [count, setCount] = useState(0)

  return (
    <Routes>
      {/*Nested route for ProfilePage. Mulig vi bør endre route-strukturen etter Home.jsx blir laget? */}
      <Route path="/" element={<Layout />}>
        <Route path=":slug" element={<ProfilePage />} />
      </Route>
    </Routes>
  )
}

export default App
