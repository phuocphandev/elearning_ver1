
import Introduction from "./Introduction"
import styles from './styles.module.css'
import cn from 'classnames'

export const HomeTemplates = () => {
    return (
      <div>
        <div className={cn("overflow-hidden", styles.customScrollbar)}>
          <Introduction/>
        </div>
        <Sponsor/>
      </div>
    )
  }
  
  export default HomeTemplates