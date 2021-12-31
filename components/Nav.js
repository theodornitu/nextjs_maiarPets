import Link from 'next/link'
import Image from 'next/image'
import navStyles from '../styles/Nav.module.css'
import { FaTwitterSquare, FaDiscord } from 'react-icons/fa';

const Nav = () => {
  return (
    <nav className={navStyles.nav}>
      <logo>
          <Link href='/'>
            <Image src="/MaiarPet1.png" alt="MaiarPet #1" width={50} height={50} />
          </Link>
        </logo>
      <menu>
        <page>
          <Link href='/'>story</Link>
          </page>
        <page>
          <Link href='/plan'>plan</Link>
          </page>
        <page>
          <Link href='/rarity'>rarity</Link>
          </page>
        <page>
          <Link href='/faq'>faq</Link>
          </page>
      </menu>
      <socials>
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
      </socials>
    </nav>
  )
}

export default Nav
