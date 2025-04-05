import { Outlet } from "react-router-dom"
import Header from "./Header"
import ProfilePage from "./ProfilePage"

export default function Layout() {
  return (
    <>
      <Header />
      <main>
        {/*Kilder:
        https://medium.com/@shruti.latthe/understanding-react-outlet-a-comprehensive-guide-b122b1e5e7ff
        https://www.w3schools.com/react/react_router.asp
        */}
        <Outlet />
      </main>
    </>
  )
}
