import { Outlet } from "react-router-dom"
import { Footer } from "."
import {Introduction} from '../templates/Home/Introduction'
import Header from "./Header"


export const HomeLayout = () => {
  return (
    <div>
      <div><Header/></div>
      <div><Introduction/></div>
      {/* <div><Outlet/></div> */}
      <div><Footer/></div>
    </div>
  )
}

export default HomeLayout