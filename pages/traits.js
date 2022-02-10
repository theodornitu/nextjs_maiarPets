// Components import
import Meta    from '../components/Meta'
import Nav     from '../components/Nav'

import Link from 'next/link'

// Styles import
import s  from '../styles/traits.module.css'
import Welcome from '../components/Welcome'

const traits = () => {
  const darkSection = [s.section, s.dark].join(" ");
  const lightSection = [s.section, s.light].join(" ");
  return (
    <div>
      <Meta />
      <Nav />
      {/* <section className={lightSection}>
        <div className={s.flexContent}>
          <text className={s.textcontent2}>
            <Welcome />
          </text>
        </div>
      </section> */}
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
