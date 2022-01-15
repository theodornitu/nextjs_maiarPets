// Components import
import Meta    from '../components/Meta'
import Nav     from '../components/Nav'

import Link from 'next/link'

// Styles import
import s  from '../styles/Rarity.module.css'
import Welcome from '../components/Welcome'

const rarity = () => {
  const darkSection = [s.section, s.dark].join(" ");
  const lightSection = [s.section, s.light].join(" ");
  return (
    <div>
      <Meta />
      <Nav />
      <section className={lightSection}>
        <div className={s.flexContent}>
          <text className={s.textcontent2}>
            <Welcome />
          </text>
        </div>
      </section>
    </div>
  )
}

export default rarity
