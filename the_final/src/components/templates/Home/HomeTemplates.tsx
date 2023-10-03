import Footer from "components/layouts/Footer"
import Introduction from "./Introduction"
import styles from './styles.module.css'
import cn from 'classnames'

export const HomeTemplates = () => {
    return (
      <div className={cn("overflow-hidden", styles.customScrollbar)}>
        <Introduction/>
      </div>
    )
  }
  
  export default HomeTemplates