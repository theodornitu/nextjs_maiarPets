import Link from 'next/link'
import Image from 'next/image'
import navStyles from '../styles/Nav.module.css'
import { FaTwitterSquare, FaDiscord } from 'react-icons/fa';
// import { NavItem, Navv } from "react-bootstrap";

const Nav = () => {
  return (
    <header>
      <nav className={navStyles.nav}>
        <div className={navStyles.container}>
          <a className={navStyles.logo}>
            <Link href='/'>
              <Image src="/MaiarPet1.png" alt="MaiarPet #1" width={50} height={50} />
            </Link>
          </a>
          <ul className={navStyles.menu}>
            <li className={navStyles.item}><Link href='/'>story</Link></li>
            <li className={navStyles.item}><Link href='/plan'>plan</Link></li>
            <li className={navStyles.item}><Link href='/rarity'>rarity</Link></li>
            <li className={navStyles.item}><Link href='/faq'>faq</Link></li>
          </ul>
          <a className={navStyles.socials}>
          <li>
            <Link href='https://twitter.com/maiar_pets'>
              <FaTwitterSquare />
            </Link>
          </li>
          <li>
            <Link href='/'>
              <FaDiscord />
            </Link>
          </li>
          </a>
        </div>
      </nav>
    </header>
  )
}

export default Nav
