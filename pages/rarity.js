// Components import
import Meta    from '../components/Meta'
import Nav     from '../components/Nav'

import Link from 'next/link'

// Styles import
import s  from '../styles/Rarity.module.css'

const rarity = () => {
  return (
    <div>
      <Meta />
      <Nav />
      <div>
        {/* <h1 className={s.title}>
        Rarity Map will be available shortly after the <span>official launch</span>!
        </h1> */}
        {/* <p className={s.link}>
          Follow us on <Link  href = "https://twitter.com/maiar_pets">Twitter</Link> or <Link href="https://www.instagram.com/riki.shibainu/">Instagram</Link> to stay up to date with the progress.
        </p> */}
      </div>
    </div>
  )
}

export default rarity
