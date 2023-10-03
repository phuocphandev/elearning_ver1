import Footer from "components/layouts/Footer"
import Introduce from "./Introduce"
import styles from './styles.module.css'
import cn from 'classnames'

export const HomeTemplates = () => {
    return (
      <div className={cn("overflow-hidden", styles.customScrollbar)}>
        <Introduce/>
        <Footer/>
      </div>
    )
  }
  
  export default HomeTemplates


  


