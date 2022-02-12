// Components
import Meta    from '../components/Meta'
import Nav     from '../components/Nav'

// Reactjs & Nextjs
import Link from 'next/link'

// Styles
import s  from '../styles/traits.module.css'

const traits = () => {
  const darkSection = [s.section, s.dark].join(" ");
  return (
    <div>
      <Meta />
      <Nav />
      <section className={darkSection}>
        <div className={s.flexContent}>
          <img 
            src="/TraitMapV3.png" 
            class = {s.postItem} 
            alt="Traits of Maiar Pets' first #superstar, Riki"  
          />
        </div>
      </section>
    </div>
  )
}

export default traits
