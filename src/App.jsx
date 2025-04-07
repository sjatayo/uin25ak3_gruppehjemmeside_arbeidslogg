

import { BrowserRouter, Route, Routes } from "react-router-dom";

import ProfilePage from "./components/ProfilePage";
import Header from "./components/Header";
import Layout from "./components/Layout";
import Home from "./components/Home";

import "./assets/styles/style.scss";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path=":slug" element={<ProfilePage />} />
      </Route>
    </Routes>
  );
}

export default App;