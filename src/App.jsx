import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
// import "./App.css"
import ProfilePage from "./components/ProfilePage";
import Header from "./components/Header";
import Layout from "./components/Layout";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import "./assets/styles/style.scss";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Routes>
      {/* Grunnleggende nested routing med Layout */}
      <Route path="/" element={<Layout />}>
        {/* Felleselement for alle "underruter" */}
        <Route index element={<Home />} /> {/* Forside */}
        {/* Dynamisk profilside, bruker slug som path. */}
        <Route path=":slug" element={<ProfilePage />} />
      </Route>
    </Routes>
  );
}

export default App;
