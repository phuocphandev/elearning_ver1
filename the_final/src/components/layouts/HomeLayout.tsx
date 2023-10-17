import { Outlet } from "react-router-dom"
import { Footer } from "."
import Header from "./Header"


export const HomeLayout = () => {
  return (
    <div>
      <div className="fixed top-0 left-0 z-10 w-full "><Header/></div>
      <div className="mt-[10vh] md:mt-[7vh] xl:mt-[12vh] 2xl:mt-[5vh]"><Outlet/></div>
      <div className="z-10"><Footer/></div>
    </div>
  )
}

export default HomeLayout