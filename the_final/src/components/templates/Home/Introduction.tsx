import { useRef } from 'react'
import { Parallax, ParallaxLayer, IParallax } from '@react-spring/parallax'
import styles from './styles.module.css'
import cn from 'classnames'
interface PageProps {
  offset: number
  gradient: string
  onClick: () => void
}

const Page = ({ offset, gradient, onClick }: PageProps) => (
  <>
    <ParallaxLayer offset={offset} speed={0.2} onClick={onClick}>
      <div className={styles.slopeBegin} />
    </ParallaxLayer>

    <ParallaxLayer offset={offset} speed={0.6} onClick={onClick}>
      <div className={`${styles.slopeEnd} ${styles[gradient]}`} />
    </ParallaxLayer>

    <ParallaxLayer className={`${styles.text} ${styles.number}`} offset={0} speed={0.3}>
      <span>Welcome to E-Hub</span>
    </ParallaxLayer>
    <ParallaxLayer className={`${styles.text} ${styles.number}`} offset={1} speed={0.3}>
      <span>2</span>
    </ParallaxLayer>
    <ParallaxLayer className={`${styles.text} ${styles.number}`} offset={2} speed={0.3}>
      <span>3</span>
    </ParallaxLayer>
  </>
)

export const Introduction = () => {
  const parallax = useRef<IParallax>(null)

  const scroll = (to: number) => {
    if (parallax.current) {
      parallax.current.scrollTo(to)
    }
  }

  return (
    <div style={{ background: '#dfdfdf'}} className={cn("h-screen w-screen")}>
      <Parallax className={cn(styles.container, styles.customScrollbar)} ref={parallax} pages={3} horizontal>
        <Page offset={0} gradient="first-slide" onClick={() => scroll(1)} />
        <Page offset={1} gradient="second-slide" onClick={() => scroll(2)} />
        <Page offset={2} gradient="third-slide" onClick={() => scroll(0)} />
      </Parallax>
    </div>
  )
}

export default Introduction