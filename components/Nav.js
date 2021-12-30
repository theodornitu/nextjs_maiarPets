import Link from 'next/link'
import navStyles from '../styles/Nav.module.css'

const Nav = () => {
  return (
    <nav className={navStyles.nav}>
      <ul>
        <li>
          <Link href='/'>Story</Link>
        </li>
        <li>
          <Link href='/plan'>Plan</Link>
        </li>
        <li>
          <Link href='/rarity'>Rarity</Link>
        </li>
        <li>
          <Link href='/faq'>FAQ</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Nav
