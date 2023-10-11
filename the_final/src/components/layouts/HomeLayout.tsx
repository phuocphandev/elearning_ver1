import { Outlet } from "react-router-dom"
import { Footer } from "."
import Header from "./Header"


export const HomeLayout = () => {
  return (
    <div>
      {/* <div className="fixed top-0 left-0 z-10 w-full "><Header/></div> */}
      <div><Outlet/></div>
      <div><Footer/></div>
    </div>
  )
}

export default HomeLayout