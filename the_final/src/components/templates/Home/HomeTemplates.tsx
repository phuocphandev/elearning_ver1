import { Overral } from "."
import Introduction from "./Introduction"
import Sponsor from "./Sponsor"
import styles from './styles.module.css'
import cn from 'classnames'

export const HomeTemplates = () => {
    return (
      <div>
        <div className={cn("overflow-hidden", styles.customScrollbar)}>
          <Introduction/>
        </div>
        <Sponsor/>
        <Overral/>
      </div>
    )
  }
  
  export default HomeTemplates